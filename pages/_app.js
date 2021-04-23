import '../styles/globals.css'
import {ThemeProvider} from '@emotion/react'
import {theme} from "@/theme/theme"
import {globalStyles} from "@/theme/global-styles"
import {BaseLayout} from "@/components/Layout/styles"


function MyApp({Component, pageProps}) {


    return (
        <>
            {globalStyles}
            <ThemeProvider theme={theme}>
                <BaseLayout>
                    <Component {...pageProps} />
                </BaseLayout>
            </ThemeProvider>
        </>
    )

}

export default MyApp
