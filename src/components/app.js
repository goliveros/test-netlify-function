import React from "react"
import { gql } from "apollo-boost"
// import { useQuery } from "@apollo/react-hooks"
import { Query } from "react-apollo"
const GET_DATA = gql`
  query getData {
    getPerson(id: 1) {
      name
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
        </div>
      )
    }}
  </Query>

  // <div>hi</div>
)

export default Apps
