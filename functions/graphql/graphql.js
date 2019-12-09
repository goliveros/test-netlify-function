const { ApolloServer, gql } = require("apollo-server-lambda")
const axios = require("axios").default

const typeDefs = gql`
  type Query {
    hello(name: String): String!
    getPerson(id: Int!): String!
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

const resolvers = {
  Query: {
    hello: (_, { name }) => `Hello ${name || "World"} ${_}`,
    getPerson: async (_, { id }) => {
      // return `this is the passed: ${id}`
      const response = await axios
        .post(`https://graphql-apollo-server.firebaseio.com/people/${id}`)
        .then(res => {
          console.log(res)
          return res.data
        })
        .catch(err => console.log(err))
      return response
    },
  },
}

const server = new ApolloServer({ typeDefs, resolvers })

exports.handler = server.createHandler({
  cors: {
    origin: "*",
    allowedHeaders: "Content-Type, Origin, Accept, X-Requested-With",
    methods: "GET, PUT, POST",
    credentials: true,
  },
})
