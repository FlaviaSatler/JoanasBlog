import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hero</h1>
    <ul>
      <li>
        <a href="/about">A link</a>
      </li>
      <li>
        <Link to="/" activeStyle={{ color: 'red' }}>Home</Link>
      </li>
      <li>
        <Link to="/about" activeStyle={{ color: 'red' }}>A link with gatsby link</Link>
      </li>
    </ul>
  </Layout>
)

export default IndexPage
