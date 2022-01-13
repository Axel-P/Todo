import React, { PureComponent } from 'react'
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'

const uri = 'http://localhost:4000/graphql'
const cache = new InMemoryCache()

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
