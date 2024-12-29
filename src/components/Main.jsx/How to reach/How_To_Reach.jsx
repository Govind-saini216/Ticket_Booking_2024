import React from 'react'
import { Link } from 'react-router-dom'

export default function How_To_Reach() {
  return (
    <>
          <Link to="/how_to_reach/by_road" >By Road</Link>
          <Link to="/how_to_reach/by_Train" >By Train</Link>
          <Link to="/how_to_reach/by_Air" >By Air</Link>
    <div>How_To_Reach</div>
    </>
  )
}
