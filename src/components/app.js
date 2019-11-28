import React from "react"
import { gql } from "apollo-boost"
import { useQuery } from "@apollo/react-hooks"

const GET_DATA = gql`
  {
    getPerson(id: 1) {
      name
    }
  }
`

const App = () => {
  const { loading, error, data } = useQuery(GET_DATA)
  //   console.log(error)
  console.log(data)
  return (
    <div className="App">
      <header className="App-header">Learn React</header>
    </div>
  )
}

export default App
