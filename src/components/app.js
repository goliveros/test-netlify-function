import React from "react"
import { gql } from "apollo-boost"
import { useQuery } from "@apollo/react-hooks"
const GET_DATA = gql`
  {
    hello(name: "earthling")
    getPerson(id: 1) {
      name
      hair_color
      skin_color
      birth_year
      gender
    }
  }
`
const Apps = () => {
  const { loading, error, data } = useQuery(GET_DATA)
  return (
    <div className="App">
      <header className="App-header">An alien aproaches...</header>
      {data ? (
        <>
          <p>
            {data.hello}, I'm from the graphql
            <br />
            We know all about you ↴
          </p>
          <pre>{JSON.stringify(data.getPerson, null, 2)}</pre>
        </>
      ) : (
        ""
      )}
      <p>{loading ? "...loading" : ""}</p>
      {error && <pre>{JSON.stringify(error, null, 2)}</pre>}
    </div>
  )
}

export default Apps
