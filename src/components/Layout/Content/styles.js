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
  background: #000000;
  //background: #282525 url("/banner.jpg")no-repeat right top ;
  background-size: cover;
  position: relative;

  & {
    height: 100vh;
    //background-image: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/9632/northernlights.jpg);
  }

  &:after {
    animation: grain 8s steps(10) infinite;
    background-image: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/9632/paper-pattern.png);
    content: "";
    height: 300%;
    left: -50%;
    opacity: 0.3;
    position: fixed;
    top: -110%;
    width: 300%;
    filter: invert(75%);
  }

  @keyframes grain {
    0%, 100% {
      transform: translate(0, 0)
    }
    10% {
      transform: translate(-5%, -10%)
    }
    20% {
      transform: translate(-15%, 5%)
    }
    30% {
      transform: translate(7%, -25%)
    }
    40% {
      transform: translate(-5%, 25%)
    }
    50% {
      transform: translate(-15%, 10%)
    }
    60% {
      transform: translate(15%, 0%)
    }
    70% {
      transform: translate(0%, 15%)
    }
    80% {
      transform: translate(3%, 35%)
    }
    90% {
      transform: translate(-10%, 10%)
    }
  }
`

export const SpaceHolder = styled.div`
  display: flex;
  position: relative;
  padding: 10% 0;
`
export const ListWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
`

export const PageContentWrapper = styled('div')`
  display: flex;
  width: 100%;
  height: fit-content;
  justify-content: space-evenly;
  @media all and (max-width: 1024px) {
    flex-direction: column;
  }
`

export const ImageContainer = styled('div')`
  display: flex;
  height: 100vh;
  width: 50%;
  @media all and (max-width: 1024px) {
    width: 100%;
  }
  position: relative;
`

export const ImageWrapper = styled('div')`
  display: flex;
  position: fixed;
  overflow: hidden;
  top: 10%;
  height: 80vh;
  width: 40%;
  z-index: 1;
  @media all and (max-width: 1024px) {
    top: 0;
    height: auto;
    position: relative;
    width: 100%;
  }
`

export const ContentText = styled('div')`
  display: flex;
  flex-direction: column;
  max-width: 1000px;
  height: 80vh;
  margin: auto;
  width: 100%;
  z-index: 10;
  padding-right: 150px;

  h1 {
    font-size: 3rem;
    color: #cac8c8;
  }

  h2 {
    font-size: 3rem;
    color: #cac8c8;
    line-height: 3rem;
  }

  p {
    color: #fafafa;
  }

  @media all and (max-width: 1024px) {
    padding-right: 0;
    max-width: 100%;
    h2 {
      font-size: 3rem;
      color: #cac8c8;
      line-height: 3rem;
    }
  }
`
