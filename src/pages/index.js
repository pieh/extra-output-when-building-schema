import React from "react"

export default function Home() {
  return <div>Hello world!</div>
}

// this is just so there is SSR (or DSG) page for this site so
// Gatsby actually generate "engines" and run "Engine validation"
export function getServerData() {
  return {
    props: {},
  }
}
