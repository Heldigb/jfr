import styled from "@emotion/styled";

export const GalleryWrapper = styled('div')`
  display: flex;
  //position: fixed;
  //overflow: hidden;
  //top: 10%;
  //height: 80vh;
  //width: 40%;
  //z-index: 1;
  //@media all and (max-width: 1024px) {
  //  top: 0;
  //  height: auto;
  //  position: relative;
  //  width: 100%;
  //}
  width: 100%;
  justify-content: flex-start;
  align-items: flex-start;
  flex-flow: wrap row;
`
export const ImageItem = styled('div')`
  width: 100%;
  height: 100%;
`

export const ImageWrapper = styled('div')`
  width: 90%;
  height: 100%;
  overflow: hidden;
`