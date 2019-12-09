import React from "react"
import { ApolloProvider } from "react-apollo"
import ApolloClient from "apollo-boost"
import fetch from "isomorphic-fetch"

const client = new ApolloClient({
  uri: "https://test-fetch.netlify.com/.netlify/functions/graphql",
  fetchOptions: {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "Content-Type",
    },
  },
})

export const wrapRootElement = ({ element }) => (
  <ApolloProvider client={client}>{element}</ApolloProvider>
)
