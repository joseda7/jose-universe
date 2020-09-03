import React from "react"
import { Link } from "gatsby"
// import Button from '../components/atoms/button/button'
import Layout from '../components/organisms/layout/layout'

const SecondPage = () => (
  <Layout>
    <h1>Hi from the second page</h1>
    <p>Welcome to page 4</p>
    <Link to="/">Go back to the homepage</Link>
    {/* <Button id="2" classname='primary' text="Hola" isDisabled={false} type="button"></Button> */}
  </Layout>
)

export default SecondPage
