import React from "react"
import { gql } from "apollo-boost"
// import { useQuery } from "@apollo/react-hooks"
import { Query } from "react-apollo"
const GET_DATA = gql`
  query get_data {
    hello
    getPerson(id: 1) {
      name
      hair_color
    }
  }
`
const Apps = () => (
  <Query query={GET_DATA}>
    {({ loading, error, data }) => {
      console.log(data)
      return (
        <div className="App">
          <header className="App-header">Learn React</header>
          {data ? <p>{data.hello} I'm from the graphql</p> : "null"}
        </div>
      )
    }}
  </Query>

  // <div>hi</div>
)

export default Apps
