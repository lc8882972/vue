export default {
  constructor() {
    this.isDev = process.env.NODE_ENV === 'production'
  },
  log(msg) {
    if (this.isDev)
      console.log(msg);
  },
  info(msg) {
    if (this.isDev)
      console.info(msg);
  },
  warn(msg) {
    if (this.isDev)
      console.warn(msg);
  },
  error(msg) {
    if (this.isDev)
      console.error(msg);
  },
  trace(msg) {
    if (this.isDev)
      console.trace(msg);
  }
}