import {useState, useEffect} from "react";

// import Link from "next/link";
import {
    PageContentWrapper,
    ContentText,
    ImageContainer,
    ImageWrapper,
    ContentWrapper,
    ListWrap
} from "@/components/Layout/Content/styles";
import {CustomRenderThumb, Text} from "@/components/ContentList/styles";
import {Markup} from "interweave";
import {Scrollbars} from "react-custom-scrollbars";
import {useRouter} from 'next/router'
import {MapBlog} from "@/components/MapBlog";

import {useBreakpoints} from "@/utils/useBreakpoints";
import {ContentListItem} from "@/components/ContentList/ContentListItem";
import {GalleryWrapper} from "@/components/MapBlog/styles";


export const ScrollWrapper = ({children}) => {


    return (
        <Scrollbars
            autoHide
            // Hide delay in ms
            autoHideTimeout={1000}
            // Duration for hide animation in ms.
            autoHideDuration={200}
            universal={true}
            renderTrackHorizontal={() => <div/>}
            renderThumbHorizontal={() => <div/>}
            renderThumbVertical={() => <CustomRenderThumb/>}
        >

            {/*{page.slug === "projects" &&*/}
            {/*<ContentList/>*/}
            {/*}*/}
            {children}
        </Scrollbars>
    )
}

export default function Post({data, posts}) {
    const allPosts = posts.nodes
    const [selectedItem, setSelectedItem] = useState()

    const {page} = data
    const imgUrl = page.featuredImage?.node.sourceUrl
    const point = useBreakpoints();

    const sizes = ['md', 'sm', 'xs']
    const isMd = Boolean(sizes.includes(point))

    const router = useRouter()
    const {slug} = router.query

    const isProjects = Boolean(slug === 'projects')


    useEffect(()=> {
if(!isProjects)   setSelectedItem('')

    },[router])
    const selectItemHandler = (itemId) => {
        if (itemId && isProjects) {
            setSelectedItem(itemId)
        }
    }

    const filteredData = allPosts.filter(x => x.id === selectedItem)[0] ?? page

    return (
        <PageContentWrapper>
            <GalleryWrapper >
            {isProjects && selectedItem &&
            <MapBlog data={allPosts} selectedItem={selectedItem}/> ||
                <ImageWrapper style={{
                backgroundRepeat: ' no-repeat',
                backgroundSize: 'cover', background: `url(${imgUrl})`
            }}/>

            }
            </GalleryWrapper>
            {/*{!isProjects && imgUrl && !isMd &&*/}
            {/*<ImageContainer>*/}
            {/*    <ImageWrapper style={{*/}
            {/*        backgroundRepeat: ' no-repeat',*/}
            {/*        backgroundSize: 'cover',*/}
            {/*        background: `url(${imgUrl})`*/}
            {/*    }}/>*/}
            {/*</ImageContainer>*/}
            {/*}*/}
            <ContentText>
                <ScrollWrapper>
                    {/*{!selectedItem && isMd &&*/}
                    {/*<ImageContainer>*/}
                    {/*    <ImageWrapper style={{*/}
                    {/*        backgroundRepeat: ' no-repeat',*/}
                    {/*        backgroundSize: 'cover',*/}
                    {/*        background: `url(${imgUrl})`*/}
                    {/*    }}/>*/}
                    {/*</ImageContainer>}*/}
                    <Text>
                        <ListWrap>
                            {isProjects && allPosts.map((item) =>
                                <ContentListItem selectedItem={selectedItem} key={item.id} content={item}
                                                 selectItem={selectItemHandler}/>
                            )}
                        </ListWrap>

                        <h2>{filteredData.title}</h2>
                        <Markup content={filteredData.content}/>
                    </Text>
                </ScrollWrapper>
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
                id: context.params.slug,
            }
        })
    })

    const posts = await fetch('https://webexpress.dk/graphql', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            query: `
            query AllPostsQuery {
                posts {
                    nodes {
                        id
                        slug
                        content
                        title
                        featuredImage {
                            node {
                                id
                                sourceUrl
                            }
                        }
                    }
                }
            }
        `
        })
    })

    const postList = await posts.json()
    const json = await res.json()

    return {
        props: {
            data: json.data,
            posts: postList.data.posts
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
    const pagesIdList = Object.values(pages).map((x) => {
        console.log(x)
    })
    console.log(pagesIdList)

    const paths = pages.map((page) => ({
        params: {slug: page.slug.toString()},
    }))
    return {paths, fallback: false}
}