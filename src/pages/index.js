import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
  <div>
    <h1>Hello Coders</h1>
    <p>This is my freeCodeCamp Hackathon Ticket</p>
    <p>Now excuse me while I go build something great.</p>

    <a href="https://timwheeler.com" target="_blank">Check me out here</a>

    <Link to="/page-2/">Go to page 2</Link>
  </div>
)

export default IndexPage
