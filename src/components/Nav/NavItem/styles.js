import styled from '@emotion/styled'
import { jsx, css, keyframes } from '@emotion/react'

import Link from "next/link";
// BaseLayout

export const blink = keyframes`
  50% {
    opacity: 0;
  }
`
export const NavItemWrapper = styled('div')`
  font-size: 1rem;
  text-transform: uppercase;
  padding: 0.5rem 0;
  transition: 0.3s ease;
  color: #4c4141;
  width: 100px;
  height: 100px;
  text-align: center;
  
  &:hover {
    animation: ${blink} 0.1s linear infinite;
    cursor: pointer;
    transition: 0.3s ease;
    color: #f8f8f8;
  }

`

export const NavLink = styled(Link)`
  position: absolute;
  height: 100px;
  width: 100px;
`
