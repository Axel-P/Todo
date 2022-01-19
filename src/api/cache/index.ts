import { InMemoryCache } from '@apollo/client'
import userNameVar from '../localFields/user/userName'
import passwordVar from '../localFields/user/password'

export default new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        userName: {
          read() {
            return userNameVar()
          },
        },
        password: {
          read() {
            return passwordVar()
          },
        },
      },
    },
  },
})
