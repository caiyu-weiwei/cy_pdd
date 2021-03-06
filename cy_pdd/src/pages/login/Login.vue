<template>
  <div class="login-container">
    <!-- 登录面板内容部分 -->
    <div class="login-inner">
      <!-- 面板头部 -->
      <div class="login-header">
        <div class="login-header-logo">
          <img :src="logoImg" width="250">
        </div>
        <!-- 面板标题 -->
        <div class="login-header-title">
          <a :class="{current: loginMode}" @click="switchLoginMode(true)">短信登录</a>
          <a :class="{current: !loginMode}" @click="switchLoginMode(false)">密码登录</a>
        </div>
      </div>
      <!-- 面板表单 -->
      <div class="login-content">
        <form>
          <!-- 短信登录部分 -->
          <div :class="{current: loginMode}">
            <section class="login-message">
              <input type="tel" maxlength="11" v-model="phone" placeholder="手机号">
              <button
                class="get-vertification"
                v-if="!countdown"
                :class="{'phone-right': phoneTest}"
                @click.prevent="getVertificationCode()"
                >
                获取验证码
              </button>
              <button disabled="disabled" v-else class="get-vertification">已发送{{countdown}}s</button>
            </section>
            <section class="login-vertification">
              <input type="tel" maxlength="8" placeholder="验证码" v-model="code">
            </section>
            <section class="login-hint">
              温馨提示：未注册帐号的手机号，登录时将自动注册，且代表已同意
              <a>服务协议与隐私政策</a>
            </section>
          </div>
          <!-- 账号登录部分 -->
          <div :class="{current: !loginMode}">
            <section class="login-message">
              <input type="tel" placeholder="用户名/手机/邮箱" v-model="userName" >
            </section>
            <section class="login-vertification">
              <input type="password" placeholder="密码" v-model="pwd" v-if="pwdMode">
              <input type="text" placeholder="密码" v-model="pwd" v-if="!pwdMode">
              <div class="switch-show">
                <img :src="showPwdImg" v-if="pwdMode" @click="switchPwdMode(false)">
                <img :src="hidePwdImg" v-else @click="switchPwdMode(true)">
              </div>
            </section>
            <section class="login-message">
              <input type="text" maxlength="11" placeholder="验证码" v-model="captcha">
              <img ref="captcha" src="http://localhost:3000/api/captcha" class="get-vertification" @click="getCaptcha()">
            </section>
          </div>
          <button class="login-submit" @click.prevent="login()">登录</button>
        </form>
        <button class="login-back" @click="$router.back()">返回</button>
      </div>
    </div>
  </div>
</template>

<script>
  import { getMessageCode, phoneCodeLogin, captchaLogin } from '@/api/index'
  import { Toast } from 'mint-ui'
  import {mapActions} from 'vuex'
  export default {
    name: 'Login',
    data() {
      return {
        logoImg: require('./images/cy_logo_sm.png'),
        hidePwdImg: require('./images/hide_pwd.png'),
        showPwdImg: require('./images/show_pwd.png'), 
        loginMode: true, // 登录方式： true: 短信登录；false: 密码登录
        phone: '', // 短信登录的手机号
        code: '', // 短信验证码
        countdown: 0, // 倒计时数据
        pwdMode: true, // 密码显示方式：true: 密文；false：明文
        userName: '', // 用户名/手机/邮箱
        pwd: '', // 登录密码
        captcha: '', // 图形验证码
        userInfo: {}, // 用户信息
      }
    },
    computed: {
      phoneTest() {
        return /^[1][3,4,5,7,8][0-9]{9}$/.test(this.phone)
      }
    },
    methods: {
      ...mapActions(['syncUserInfo']),
      /**
       * 切换短信登录与账号登录方式
       */
      switchLoginMode(loginMode) {
        this.loginMode = loginMode
      },
      /**
       * 密码明文、密文切换
       */
      switchPwdMode(pwdMode) {
        this.pwdMode = pwdMode
      },
      /**
       * 获取短信登录验证码倒计时
       */
      async getVertificationCode() {
        if (this.phoneTest) {
          this.countdown = 60
          this.intervalId = setInterval(() => {
            this.countdown--
            !this.countdown && clearInterval(this.intervalId)
          }, 1000)
        }
        let res = await getMessageCode({phone: this.phone})
        console.log('res', res)
        if (res.data.code === 0) {
          Toast('获取验证码失败')
        }
      },
      /**
       * 获取图像验证码
       */
      getCaptcha() {
        this.$refs.captcha.src = 'http://localhost:3000/api/captcha?time='+ new Date()
      },
      /**
       * 登录
       */
      async login() {
        if (this.loginMode) {
          // 短信验证码登录
          if (!this.phone) {
            Toast('请输入手机号！')
            return
          } else if (!this.phoneTest) {
              Toast('请输入正确的手机号！')
              return
            }
          if (!this.code) {
            Toast('请输入验证码!')
            return
          } else if (!(/^\d{6}$/gi.test(this.code))) {
            Toast('请输入正确的验证码！')
            return
          }
          const res = await phoneCodeLogin(this.phone, this.code)
          const { code, data } = res.data
          if (code === 200) {
            this.userInfo = data
          } else {
            this.userInfo.message = '登录失败， 用户名或密码错误！'
          }
        } else {
          // 账号、密码登录
          if (!this.userName) {
            Toast('请输入用 户名/手机/邮箱！')
            return
          }
          if (!this.pwd) {
            Toast('请输入密码！')
            return
          }
          if (!this.captcha) {
            Toast('请输入图形验证！')
            return
          }
          const res = await captchaLogin(this.userName, this.pwd, this.captcha)
          const { code, data } = res.data
          if (code === 200) {
            this.userInfo = data
          } else {
            this.userInfo.message = '登录失败， 用户名或密码错误！'
          }
        }

        if (!this.userInfo.userId) {
          Toast({
            message: this.userInfo.message,
            position: 'middle',
            duration: 2000
          })
        } else {
          this.syncUserInfo(this.userInfo)
          this.$router.back()
        }
      }
    }
  }
</script>

<style scoped lang="stylus" ref="stylesheet/stylus">
  .login-container
    width 100%
    height 100%
    background-color #F5F5F5
    .login-inner
      padding-top 60px
      width 80%
      margin 0 auto
      .login-header
        .login-header-logo
          text-align center
        .login-header-title
          text-align center
          padding 40px 0 10px 0
          > a
            color #333
            font-size 14px
            padding-bottom 4px
            &:first-child
              margin-right 40px
            &.current
              color mediumpurple
              font-weight 700
              border-bottom 2px solid mediumpurple
      .login-content
        > form
          > div
            display none 
            &.current
              display block
            input
              width 100%
              height 100%
              padding-left 8px
              box-sizing border-box
              border 1px solid #ddd
              border-radius 4px
              outline 0
              font 400 14px Arial
              &:focus
               border 1px solid mediumpurple
          .login-message
            position relative
            margin-top 16px
            height 48px
            font-size 14px
            background-color #fff
            .get-vertification
              position absolute
              top 50%
              right 10px
              transform translateY(-50%)
              border 0
              color #ccc
              font-size 14px
              background-color transparent
              &.phone-right
                color mediumpurple
          .login-vertification
            position relative
            height 48px
            font-size 14px
            background-color #fff
            margin-top 16px
            .switch-show
              position absolute 
              top 13px
              right 10px
              img 
                width 20px
          .login-hint
            color #999
            font-size 12px
            margin-top 12px
            line-height 20px
            > a
              color mediumpurple
        .login-submit
          width 100%
          height 42px
          margin-top 30px
          background mediumpurple
          color #fff
          border 0
          font-size 16px
          text-align center
          border-radius 4px
          line-height 42px
      .login-back
        width 100%
        height 42px
        margin-top 15px
        background transparent
        border 1px solid mediumpurple
        border-radius 4px
        color mediumpurple
        text-align center
        font-size 16px
        line-height 42px

</style>