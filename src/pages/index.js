import React, { Children } from "react"
import Layout from '../components/Layout/Layout'
import HomeComponent from '../components/Home/index'

export default function Home() {

  return (
    <Layout>
      <HomeComponent />
    </Layout>
  )
}
