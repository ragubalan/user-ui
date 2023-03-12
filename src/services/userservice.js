import WebService from './webservice.js'

class Userservice extends WebService {
  constructor (url) {
    super(`${url}`);
  }
}

export default Userservice
