import {css, Global} from '@emotion/react'
import emotionNormalize from 'emotion-normalize'
// local libs
import {theme} from "@/theme/theme";

// --FONTS
/*@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;900&family=Roboto&display=swap');*/
/*@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100&display=swap');*/
/*@import url('https://fonts.googleapis.com/css2?family=Russo+One&display=swap');*/

export const globalStyles = (
    <Global
        styles={css`

          @import url('https://fonts.googleapis.com/css2?family=Archivo+Black&display=swap');
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
            padding: 0;
            margin: 0;
            font-family: 'Open Sans', sans-serif;
            overflow: hidden;
            line-height: ${theme.lineHeight};
            background: white;
            min-height: auto;

            //font-family: 'Open Sans', Helvetica, Arial, sans-serif;
            //font-family: 'Noto Sans KR', sans-serif;
            //font-family: 'Russo One', sans-serif;
          }


          body {
            margin: 0;
            min-height: 100%;
            display: flex;
            flex-direction: column;
          }

          h1, h2, h3, h4, h5 {
        
          }

          a {
            color: inherit;
            text-decoration: none;
          }
        `}
    />
)
