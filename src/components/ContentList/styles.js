import styled from '@emotion/styled'
// BaseLayout

export const ContentListContainer = styled('div')`
  display: flex;
  width: 100%;
`
export const ContentListItemWrapper = styled('div')`
  display: flex;
  width: 50%;
  flex-direction: column;
  padding: 1rem;
  background: cornflowerblue;
  height: 250px;
  justify-content: space-between;
`

export const Text = styled('div')`
  margin-bottom: 2rem;
`

export const ContentListItemContainer = styled('div')`
  display: flex;
  width: calc(100% / 3) - 0.5rem;
  margin: 0.5rem;
`

export const ImageWrapper = styled('div')`
  display: flex;
  height: 250px;
  filter: invert(1);
  opacity: 0.7;
`
