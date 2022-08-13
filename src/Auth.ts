import auth0 from 'auth0-js'
import credentials from './credentials'

class Auth {
  auth0: auth0.WebAuth
  idToken: string | undefined
  expiresAt: number = 0
  constructor() {
    this.auth0 = new auth0.WebAuth({
      domain: credentials.domain,
      clientID: credentials.clientID,
      redirectUri: 'http://localhost:3000/callback',
      audience: `https://${credentials.domain}/userinfo`,
      responseType: 'token id_token',
      scope: 'openid email',
    })

    this.login = this.login.bind(this)
    this.logout = this.logout.bind(this)
    this.handleAuthentication = this.handleAuthentication.bind(this)
    this.isAuthenticated = this.isAuthenticated.bind(this)
  }

  login() {
    this.auth0.authorize()
  }

  getIdToken() {
    return this.idToken
  }

  handleAuthentication() {
    return new Promise<void>((resolve, reject) => {
      this.auth0.parseHash((err, authResult) => {
        if (err) {
          return reject(err)
        }
        if (!authResult || !authResult.idToken) {
          return reject(err)
        }
        this.setSession(authResult)
        resolve()
      })
    })
  }

  setSession(authResult: auth0.Auth0DecodedHash) {
    this.idToken = authResult.idToken
    // set the time that the id token will expire at
    this.expiresAt = (authResult?.expiresIn || 0) * 1000 + new Date().getTime()
  }

  logout() {
    this.auth0.logout({
      returnTo: 'http://localhost:3000',
      clientID: credentials.clientID,
    })
  }

  silentAuth() {
    return new Promise<void>((resolve, reject) => {
      this.auth0.checkSession({}, (err, authResult) => {
        if (err) {
          return reject(err)
        }
        this.setSession(authResult)
        resolve()
      })
    })
  }

  isAuthenticated() {
    // Check whether the current time is past the token's expiry time
    return new Date().getTime() < this.expiresAt
  }
}

const auth = new Auth()

export default auth
