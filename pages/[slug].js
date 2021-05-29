// import Image from "next/image";
// import Link from "next/link";
import {
    PageContentWrapper,
    ContentText,
    ImageContainer,
    ImageWrapper,
    ContentWrapper
} from "@/components/Layout/Content/styles";
import {CustomRenderThumb, Text} from "@/components/ContentList/styles";
import {Markup} from "interweave";
import {Scrollbars} from "react-custom-scrollbars";
import {ContentList} from "@/components/ContentList";

export default function Post({data}) {
    const {page} = data
    const imgUrl = page.featuredImage?.node.sourceUrl
    return (
        <PageContentWrapper>
            <ImageContainer>
                <ImageWrapper style={{background: `url(${imgUrl})`}}>

                </ImageWrapper>
            </ImageContainer>

            <ContentText>
                <Scrollbars  universal={true}
                             renderTrackHorizontal={() => <div />}
                             renderThumbHorizontal={() => <div />}
                             renderThumbVertical={() => <CustomRenderThumb /> }
                >

                    {/*{page.slug === "projects" &&*/}
                    {/*<ContentList/>*/}
                    {/*}*/}
                <Text>
                    <h2>{page.title}</h2>
                    <Markup  content={page.content} />
                </Text>
                </Scrollbars>
            </ContentText>


        </PageContentWrapper>
    );
};

export async function getStaticProps(context) {

    const res = await fetch('https://webexpress.dk/graphql', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            query: `
                query SinglePage($id: ID!){
                    page(id: $id, idType: URI) {
                        title
                        slug
                        content
                        featuredImage {
                            node {
                                sourceUrl
                            }
                        }
                    }
                }
            `,
            variables: {
                id:  context.params.slug,
            }
        })
    })

    const json = await res.json()

    return {
        props: {
            data: json.data,
        },
    }
}


export async function getStaticPaths() {
    const res = await fetch('https://webexpress.dk/graphql', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            query: `
            query AllPagesQuery {
                pages {
                    nodes {
                        slug
                        content
                        title
                        pageId
                        featuredImage {
                        node {
                          sourceUrl
                        }
                      }
                    }
                }
            }
        `
        })
    })

    const pageId = {
        story: 4489,
        projects: 4502,
        contact: 4505
    }

    const json = await res.json()
    const pages = json.data.pages.nodes;
    const pagesIdList = Object.values(pages).map((x)=> {
        console.log(x)
    })
console.log(pagesIdList)

    const paths = pages.map((page) => ({
        params: {slug: page.slug.toString()},
    }))
    return {paths, fallback: false}
}