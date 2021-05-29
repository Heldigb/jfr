import styled from '@emotion/styled'
// BaseLayout

export const ContentListContainer = styled('div')`
  display: flex;
  width: 100%;
  flex-direction: column;
`

export const ContentListItemWrapper = styled('div')`
  display: flex;
  width: 70%;
  flex-direction: column;
`

export const Text = styled('div')`
  min-height: 80vh;
  padding: 50px;
  top: 10%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media all and (max-width: 1280px) {
    padding: 32px;
  }
`

export const ContentListItemContainer = styled.div`
  display: flex;
  width: 20%;
  padding: 2%  2%  2% 0;
  margin-right: 1%;
  cursor: pointer;
  height: 80px;
  ${({active}) => active && `
  border-bottom: 1px solid red;
     p {
      color: red;
    }
  `}
  &:hover {
    p {
      color: red;
    }
  }
`

export const ImageWrapper = styled('div')`
  display: flex;
  width: 100%;
  height: auto;
  filter: invert(1);
  opacity: 1;
`

export const CustomRenderThumb = styled.div`
  position: relative;
  display: block;
  height: 100%;
  background: #241818;
  border-radius: 8px;
`

export const CustomRenderTrack = styled.div`
  position: absolute;
  background: #fafafa;
  bottom: 0;
  height: 8px;
  width: 100%;
  border-radius: 3.5px;
`

