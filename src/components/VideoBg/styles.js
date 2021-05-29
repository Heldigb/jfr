import styled from "@emotion/styled";

export const Video = styled('div')`
  height: 100%;
  width: 100%;
  z-index: -1;
  filter: sepia(2);

  video {
    object-fit: cover;
  }
`
