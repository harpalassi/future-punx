import React from "react"
import { Link } from "gatsby"
import Footer from "../components/footer"
import Header from "../components/header"

const IndexPage = () => {
  return (
    <div>
      <Header />
      <h1>FUTURE PUNX</h1>
      <h2>synth punk from brooklyn, new york</h2>
      <p>
        Want 2 book us? <Link to="/contact"> Click here!</Link>
      </p>
      <Footer />
    </div>
  )
}

export default IndexPage
