const { ApolloServer, gql } = require("apollo-server-lambda")
const axios = require("axios").default

const typeDefs = gql`
  type Query {
    hello(name: String): String!
    getPerson(id: Int!): Person
  }

  type Person {
    name: String
    hair_color: String
    skin_color: String
    eye_color: String
    birth_year: Int
    gender: String
  }
`

const headers = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "Content-Type",
}

exports.handler = async (event, context, callback) => {
  try {
    callback(null, {
      statusCode: 200,
      headers,
    })
    return
  } catch (err) {
    return { statusCode: 500, body: err.toString() }
  }
}

const resolvers = {
  Query: {
    hello: (_, { name }) => `Hello ${name || "World"} ${_}`,
  },
  getPerson: async (_, { id }) => {
    console.log(id)
  },
}
// const resolvers = {
//   Query: {
//     hello: (_, { name }) => `Hello ${name || "World"} ${_}`,
//     getPerson: async (_, { id }) => {
//       const response = await axios({
//         method: "GET",
//         url: `https://swapi.co/api/people/${id}`,
//       })
//         .then(res => {
//           console.log(res)
//           return res.data
//         })
//         .catch(err => console.log(err))
//       return response
//     },
//   },
// }

const server = new ApolloServer({ typeDefs, resolvers })

exports.handler = server.createHandler()
