import React from "react"
import { ApolloProvider } from "react-apollo"
import ApolloClient from "apollo-boost"
import fetch from "isomorphic-fetch"

const client = new ApolloClient({
  uri: "https://graphql-apollo-server.firebaseio.com/",
})

export const wrapRootElement = ({ element }) => (
  <ApolloProvider client={client}>{element}</ApolloProvider>
)
