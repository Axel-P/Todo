import { gql } from '@apollo/client'

const GET_USERS = gql`
  query users {
    users {
      id
      firstname
      lastname
    }
  }
`

export default GET_USERS
