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
`

export const ContentListItemContainer = styled('div')`
  display: flex;
  flex-direction: column;
  width: 100%;
  //border: 1px solid #000000;
  //margin: 50px 0;
  //background-color: #110a0a;
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
  background: #fafafa;
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

