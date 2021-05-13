import '../styles/globals.css'
import {ThemeProvider} from '@emotion/react'
import {theme} from "@/theme/theme"
import {globalStyles} from "@/theme/global-styles"
import {BaseLayout} from "@/components/Layout/styles"
import {Nav} from "@/components/Nav/Nav";
import {Content} from "@/components/Layout/Content";

function MyApp({Component, pageProps}) {

    return (
        <>
            {globalStyles}
            <ThemeProvider theme={theme}>
                <BaseLayout>
                    <Nav/>

                    <Content>
                        <Component {...pageProps} />
                    </Content>


                </BaseLayout>
            </ThemeProvider>
        </>
    )

}

export default MyApp


