<template>
  <div class="me-detail">
    <div class="me-detail-top">基本信息</div>
    <div class="me-detail-group">
      <div class="me-icon">
        <span>头像</span>
        <img :src="meIcon" >
      </div>
      <div class="me-item">
        <span>手机</span>
        <span>188****8888</span>
      </div>
      <div class="me-item">
        <span>昵称</span>
        <span><input type="text" v-model="userName"></span>
      </div>
      <div class="me-item" @click.stop="selectSex">
        <span>性别</span>
        <span>{{sex}}</span>
      </div>
      <div class="me-item">
        <span>常住地</span>
        <span><input type="text" v-model="userAddress"></span>
      </div>
      <div class="me-item" @click="handleOpenPicker">
        <span>生日</span>
        <span>{{birthday}}</span>
      </div>
      <div class="me-item">
        <span>个性签名</span>
        <span><input type="text" v-model="userSign"></span>
      </div>
    </div>
    <button>修改</button>
    <mt-actionsheet
      :actions="sexActions"
      v-model="sheetVisibleSex">
    </mt-actionsheet>
    <mt-datetime-picker
      ref="picker"
      type="date"
      :startDate="startDate"
      year-format="{value} 年"
      month-format="{value} 月"
      date-format="{value} 日"
      @confirm="handleConfirm">
    </mt-datetime-picker>
  </div>
</template>

<script>
  import moment from 'moment'
  export default {
    name: 'MeDetail',
    data() {
      return {
        meIcon: require('./images/me_icon.png'),
        userName: '',
        userAddress: '',
        userSign: '',
        sex: '',
        sexActions: [
          {
            name: '男',
            method: this.sexCallback
          },
          {
            name: '女',
            method: this.sexCallback
          }
        ],
        sheetVisibleSex: false,
        startDate: new Date('1950.01.01'),
        birthday: ''
      }
    },
    methods: {
      /**
       * 选择性别
       */
      selectSex() {
        this.sheetVisibleSex = true
      },
      /**
       * 选择性别回调函数
       */
      sexCallback(sex) {
        console.log('sexCallback', sex)
        this.sex = sex.name
      },
      /**
       * 选择生日
       */
      handleOpenPicker() {
        this.$refs.picker.open() 
      },
      handleConfirm(dateVal) {
        console.log('handleCconfirm', dateVal)
        // const date = new Date(dateVal)
        // const year = date.getFullYear()
        // const month = date.getMonth()+1
        // const day = date.getDate()
        // this.birthday = `${year}.${month<10 ? '0'+month : month}.${day<10 ? '0'+day : day}`
        this.birthday = moment(dateVal).format('YYYY-MM-DD')
      }
    }
  }
</script>

<style scoped lang="stylus" ref="stylesheet/stylus">
  .me-detail
    width 100%
    height 100%
    .me-detail-top
      width 100%
      height 60px
      line-height 60px
      padding-left 10px
      font-weight bold
    .me-detail-group
      div
        padding 0 10px
        height 60px
        background-color #fff
        border-bottom 1px solid #e0e0e0
        display flex
        justify-content space-between
        align-items center
      .me-icon
        img 
          width 50px
          border-radius 50%
      .me-item
        input 
          border none
          outline none
          text-align right
    button 
      width 90%
      height 40px
      line-height 40px
      background-color #e9232c
      text-align ceter
      margin 20px 5%
      border 0
      font-size 16px
      color #fff
      border-radius 10px
</style>