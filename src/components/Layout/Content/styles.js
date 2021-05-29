import styled from '@emotion/styled'
// BaseLayout

export const ContentWrapper = styled('div')`
  display: flex;
  height: 100vh;
  width: 100%;
  top: 0;
  left: 0;
  justify-content: center;
  align-items: center;
  background: #282525 ;
  //background: #282525 url("/banner.jpg")no-repeat right top ;
  background-size: cover;
  position: relative;
  `

export const SpaceHolder = styled.div`
  display: flex;
  position: relative;
  padding: 10% 0;
`

export const PageContentWrapper = styled('div')`
  display: flex;
  width: 100%;
  height: fit-content;
  justify-content: space-evenly;
`

export const ImageContainer = styled('div')`
  display: flex;
  height: 100vh;
  width: 50%;
  position: relative;
`

export const ImageWrapper = styled('div')`
  display: flex;
  position: fixed;
  overflow: hidden;
  top: 10%;
  height: 80vh;
  background-repeat: no-repeat;
  background-size: cover;
  width:40%;
  z-index: 1;

`

export const ContentText = styled('div')`
  display: flex;
  flex-direction: column;
  max-width: 40%;
  height: 80vh;
  margin: auto;
  width: 100%;
  z-index: 10;
  padding-right:150px;
  h1 {
    font-size: 3rem;
    color: #cac8c8;
  } 
  h2 {
    font-size: 8rem;
    color: #cac8c8;
    line-height: 8rem;
  }
  p {
    color: #fafafa;
  }
`
