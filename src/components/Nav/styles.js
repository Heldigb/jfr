import styled from '@emotion/styled'
import Link from "next/link";
// BaseLayout

export const NavContainer = styled('div')`
  position: absolute;
  right: 0;
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100px;
  padding: .2rem 1rem;
  overflow: hidden;
  z-index: 100;
`

export const Logo = styled('div')`
  font-size: 4rem;
  color: #ece2e2;
  margin-top: 20px;
  text-transform: uppercase;
  font-weight: 900;
  z-index: 100;
`
