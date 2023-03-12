import superagent from 'superagent'

class WebService {
  constructor (url) {
    this.url = url
    this.agent = superagent
  }

  all() {
    return this.agent
      .get(this.url)
      .then((data) => {
        return data.body })
  }
}

export default WebService
