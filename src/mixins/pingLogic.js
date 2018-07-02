const Monitor = require('ping-monitor')

export default {
  created () {
    this.createMonitor()
  },
  destroyed () {
    this.destroyMonitor()
  },
  methods: {
    createMonitor () {
      this.monitor = new Monitor({
        website: this.remote.url,
        interval: this.remote.interval / 60
      })
      this.monitor.on('up',  res => {
        console.log(`${this.remote.alias} is up!`)
        this.remote.status = 'online'
      })

      this.monitor.on('error',  error => {
        console.log(`${this.remote.alias} is down :(`)
        this.remote.status = 'offline'
      })
    },
    destroyMonitor () {
      if(this.monitor) {
        this.monitor.stop()
        this.monitor = {}
      }
    }
  }
}