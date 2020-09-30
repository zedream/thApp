<template>
  <div class="container">
    <button @click="ddd">ddd</button>
    <button @click="send">fasong</button>
  </div>
</template>

<script>
import axios from '@/axios'
import store from '@/store'
export default {
  name: 'HelloWorld',
  data () {
    return {
      socket: '',
      msgList: [],
      newMsg: ''
    }
  },
  created () {


  },
  methods: {
    ddd () {
      axios.post('/api/users', {

      }).then(res => {
        console.log(res)
      })
    },
    send () {
      let self = this
      store.commit('CONNECT', '172.16.3.223:3000')
      this.socket = this.$store.state.socket.socket
      console.log(this.$store.state.socket.socket)
      this.socket.on('connect', function() {
        console.log('连上了')
      })
      // 这里接收服务端发来的单独消息
      this.socket.on('singleMsg', function(msg) {
        console.log(msg)
        switch (msg.event) {
            // 如来自服务端的问候，虽然这里没写什么，但是可以据此做一些页面上的效果
          case 'greet_from_server':
            break
          default:
            break
        }
      })
      // 目前还没用到，可拓展
      this.socket.on('broadcastAll', function(msg) {
        console.log(msg)
      })
      // 监听广播
      this.socket.on('broadcast', function(msg)	{
        console.log(msg)
        switch (msg.event) {
            // 新用户加入聊天室
          case 'new_user_join':
            self.msgList.push({
              time: new Date().toLocaleString(),
              user: '系统通知',
              content: `用户 ${msg.data.user} 加入了聊天室......`
            })
            break
            // 用户退出聊天室
          case 'someone_exit':
            self.msgList.push({
              time: new Date().toLocaleString(),
              user: '系统通知',
              content: `用户 ${msg.data.user} 退出了聊天室......`
            })
            break
            // 接收某用户的聊天内容
          case 'new_chat_content':
            self.msgList.push({
              time: new Date().toLocaleString(),
              user: msg.data.user,
              content: msg.data.content
            })
            break
          default:
            break
        }
      })
      this.socket.on('disconnect', function() {
        console.log('连接断开了')
      })
    },
    // 监听输入框回车事件
    onInpuKeyDown (e) {
      console.log(e)
      if (e.keyCode == 13) {
        // 将输入的聊天内容推送给服务端
        this.socket.emit('chat', e.target.value)
        this.msgList.push({
          time: new Date().toLocaleString(),
          user: '我说',
          content: e.target.value
        })
        this.newMsg = ''
      }
    }
  }
}
</script>

<style scoped>
</style>
