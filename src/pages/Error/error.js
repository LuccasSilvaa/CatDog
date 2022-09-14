import React from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'

const Error = styled.div`

position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
font-size: 3rem;

`


export default function error() {
  return (
    <Error>
      <Link to="/">Home</Link>
    </Error>
    
  )
}
