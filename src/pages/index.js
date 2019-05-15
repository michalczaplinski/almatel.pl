import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <p>
      W związku ze zmianą organizacyjną firmy zapraszamy wkrótce na nową odsłonę
      naszej witryny oraz naszej oferty. Jesteśmy zawsze do dyspozycji pod
      mailem:
      <a href="mailto:biuro@almatel.pl" style={{ color: `#008dd2` }}>
        {" "}
        biuro@almatel.pl
      </a>
    </p>
  </Layout>
)

export default IndexPage
