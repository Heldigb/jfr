import React from 'react';
import {ThemeProvider} from '@emotion/react'
import {theme} from "@/theme/theme"
import {globalStyles} from "@/theme/global-styles"
import {BaseLayout} from "@/components/Layout/styles"
import {Nav} from "@/components/Nav/Nav";
import {Content} from "@/components/Layout/Content";
// import {VideoBg} from "@/components/VideoBg";
import {Footer} from "@/components/Layout/Footer";

function MyApp({Component, pageProps}) {
    return (
        <>
            {globalStyles}
            <ThemeProvider theme={theme}>
                <BaseLayout>
                    <Nav/>
                    {/*<VideoBg/>*/}

                    <Content>
                        <Component {...pageProps} />
                    </Content>
                    <Footer/>
                </BaseLayout>
            </ThemeProvider>
        </>
    )
}

export default MyApp


