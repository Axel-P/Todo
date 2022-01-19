import { gql } from '@apollo/client'

const GET_USER_ACCOUNT = gql`
  query getUserAccount($userName: String!, $password: String!) {
    userName @client @export(as: "userName")
    password @client @export(as: "password")
    getUserAccount(userName: $userName, password: $password) {
      id
      firstname
      lastname
    }
  }
`

export default GET_USER_ACCOUNT
