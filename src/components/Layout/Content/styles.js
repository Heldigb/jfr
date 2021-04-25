import styled from '@emotion/styled'
// BaseLayout

export const ContentWrapper = styled('div')`
  display: flex;
  width: 100%;
  padding: 40px;
  background: #0070f3;
`

export const PageContentWrapper = styled('div')`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: space-between;
`
export const ContentText = styled('div')`
  display: flex;
  flex-direction: column;
  max-width: 40%;
  h1 {
    color: #cac8c8;
  }
  p {
    color: #fafafa;
  }
`
