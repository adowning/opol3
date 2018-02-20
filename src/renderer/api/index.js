import axios from 'axios'
import config from '../config'

export default {
  request (method, uri, data = null) {
    if (!method) {
      console.error('API function call requires method argument')
      return
    }

    if (!uri) {
      console.error('API function call requires uri argument')
      return
    }

    var url = config.serverURI + uri
    if (uri === '/login') {
      url = config.serverURI + '/'
      method = 'GET'
      data = null
      axios({ method, url, data }).then(response => { console.log(response) })
    } else {
      return axios({ method, url, data })
    }
  }
}
