import React, { PureComponent } from 'react'
import { ApolloClient, ApolloProvider } from '@apollo/client'
import cache from './cache'

const uri = 'http://localhost:4000/graphql'

const client = new ApolloClient({
  uri,
  cache,
})

export default class ApiConnector extends PureComponent {
  render() {
    return (
      <>
        <ApolloProvider client={client}>{this.props.children}</ApolloProvider>
      </>
    )
  }
}
