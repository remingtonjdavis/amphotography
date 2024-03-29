import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <img src="/images/chair.jpg" alt="Smiley face" height="42" width="42"></img>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>This is the homepage</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
