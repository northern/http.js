
const GET    = 'GET'
const PUT    = 'PUT'
const POST   = 'POST'
const DELETE = 'DELETE'

export default class Http {
  static get GET() {
    return GET
  }

  static get PUT() {
    return PUT
  }

  static get POST() {
    return POST
  }

  static get DELETE() {
    return DELETE
  }

  static isStatus200(status) {
    return (status >= 200 && status < 300)
  }

  static isStatus300(status) {
    return (status >= 300 && status < 400)
  }

  static isStatus400(status) {
    return (status >= 400 && status < 500)
  }

  static isStatus500(status) {
    return (status >= 500 && status < 600)
  }

  static isStatusOk(status, expectedStatus) {
    if (expectedStatus === undefined) {
      if (this.isStatus200(status) || this.isStatus300(status)) {
        return true
      }
    }

    return status === expectedStatus
  }

  static call(url, request) {
    return new Promise((resolve, reject) => {
      fetch(url, request)
        .then(response => {
          // If the response status is NOT a 500 then we can further process the response.
          if (Http.isStatus500(response.status) === false) {
            response.json().then(data => {
              if (response.ok) {
                // The response was OK (such as a 2xx status), we can resolve this promise.
                resolve(data)
              }
              else {
                // The response was not OK (such as a 4xx status), we should reject this promise.
                reject(data)
              }
            })
          }
          else {
            // The server blew up...
            reject({error:"Server error"})
          }
        })
        .catch(error => {
          // Probably some sort of connection/timeout issue...
          reject({error:error.message})
        })
    })
  }
}
