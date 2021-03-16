import React from 'react'
import Headers from './components/Headers.js'
import { useEffect } from 'react'
import { useRouter } from "next/router"

export default function index() {
  const router = useRouter()

  // useEffect(() => {
  //   router.push("testredux", '', { shallow: true })
  // }, [])


  return (
    <div>
       <Headers />
    </div>

  )
}
