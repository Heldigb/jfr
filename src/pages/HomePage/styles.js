import styled from '@emotion/styled'
// BaseLayout

export const HomePageContainer = styled('div')`
  //display: flex;
  //width: 100%;
  //flex-direction: column;
  //top: 0;
  //left: 0;
  //height: 100vh;
  //background: rgba(0, 0, 0, 0.25);
`

export const TextLink = styled.a`
  position: absolute;
  bottom: 25%;
  right: 25%;
  width: 350px;
  font-size: 1.2rem;
  color: #d2cece;
  line-height: 1.2rem;
  padding: 0 30px;
  font-weight: 400;
  cursor: pointer;
  z-index: 10;
  transition: 0.3s ease;

  &:hover,
  &:active {
    transition: 0.3s ease;
    color: #ff0000;
  }

  @media all and (max-width: 1024px) {
    max-width: 100%;
    width: 100%;
    font-size: 2.2rem;
    padding: 0 25px;
    line-height: 2.7rem;
  }
`

export const CtaBtn = styled.button`
  font-size: 2rem;
  color: #ffffff;
  border-radius: 50px;
  text-align: center;
  font-weight: 600;
  padding: 2rem;
  width: 100%;
  background-color: #43a2d2;
  cursor: pointer;
  border: none;
`

export const CtaBtnWrapper = styled.div`
  width: 300px;
  height: 30px;
  position: relative;
  margin-top: 100px;
`


export const Title = styled.div`
  position: absolute;
  top: 50%;
  left: 25%;
  width: 550px;
  font-size: 3.2rem;
  color: #d2cece;
  line-height: 4.2rem;
  padding: 0 30px;
  font-weight: 400;
  z-index: 10;
`

