import styled from '@emotion/styled'
import Link from "next/link";
// BaseLayout

export const NavItemWrapper = styled('div')`
  font-size: 2rem;
  padding: 0.5rem 0;
  transition: 0.3s ease;
  
  &:hover{
    letter-spacing: 1.2px;
    transition: 0.3s ease;
    color: #0070f3;
  }
  
`

export const NavLink = styled(Link)`

`
