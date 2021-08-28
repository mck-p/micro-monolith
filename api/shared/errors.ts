export class NotAuthorized extends Error {
  statusCode = 403
  constructor() {
    super()

    this.message = `I'm sorry Dave. I'm afraid I can't do that.`
  }
}
