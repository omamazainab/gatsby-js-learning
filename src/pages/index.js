import React from "react"
import '../styles/index.scss'
import { useSiteMetaData } from '../hooks/useSiteMetaData'

export default function Home() {
  const data = useSiteMetaData()
  return (<div>title: {data.title} author: {data.author}</div>)
}
