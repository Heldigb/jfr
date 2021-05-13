import { css, Global } from '@emotion/react'
import emotionNormalize from 'emotion-normalize'
// local libs
import {theme} from "@/theme/theme";

export const globalStyles = (
    <Global
        styles={css`
      ${emotionNormalize}
      * {
        box-sizing: border-box;
      }

      ul,
      li,
      p {
        padding: 0;
          font-weight: lighter;
          line-height: 1.4rem;
        margin: 0;
      }
        html {
          scroll-behavior: smooth;
        }
      html,
      body {
        line-height: ${theme.lineHeight};
        background: white;
        min-height: 100vh;
        //font-family: 'Open Sans', Helvetica, Arial, sans-serif;
        font-family: 'Noto Sans KR', sans-serif;
        padding: 0;
        margin: 0;
      }

      body {
        overflow-y: scroll; // this is necessary to block without displacement of the main content when the modal is opened
        margin: 0;
        min-height: 100%;
        display: flex;
        flex-direction: column;
      }
    `}
    />
)
