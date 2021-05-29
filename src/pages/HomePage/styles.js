import styled from '@emotion/styled'
// BaseLayout

export const HomePageContainer = styled('div')`
  display: flex;
  width: 100%;
  flex-direction: column;
  top: 0;
  left: 0;
  position: absolute;
  height: 100vh;
  justify-content: center;
  align-items: center;
  //background: #966363;
`

export const Text = styled.h3`
  font-size: 3rem;
  color: #fff;
  line-height: 3rem;
  width: 70%;
  padding: 0 30px;
  font-weight: 600;
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

