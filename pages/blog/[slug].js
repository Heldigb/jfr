import {ContentText, PageContentWrapper, ImageContainer} from "@/components/Layout/Content/styles";
import {Markup} from "interweave";
import {CustomRenderThumb, Text} from "@/components/ContentList/styles";
import {Scrollbars} from "react-custom-scrollbars";

export default function Post({post}) {

    const imgUrl = post.featuredImage?.node.sourceUrl
    return (
        <PageContentWrapper>

            <ImageContainer>
                {imgUrl && <img  width="700" height="700" src={imgUrl} alt={content.title}/> }
            </ImageContainer>

            <ContentText>
                {/*<Scrollbars  universal={true}*/}
                {/*             renderTrackHorizontal={() => <div />}*/}
                {/*             renderThumbHorizontal={() => <div />}*/}
                {/*             renderThumbVertical={() => <CustomRenderThumb /> }*/}
                {/*>*/}
                {/*    <Text>*/}
                {/*        <h2>{content.title}</h2>*/}
                {/*        <Markup  content={content.content} />*/}
                {/*    </Text>*/}
                {/*</Scrollbars>*/}
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
                query SinglePost($id: ID!, $idType: PostIdType!) {
                    post(id: $id, idType: $idType) {
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
                idType: 'SLUG'
            }
        })
    })
    const json = await res.json()
    return {
        props: {
            post: json.data.post,
        },
    }
}


export async function getStaticPaths() {

    const res = await fetch('https://webexpress.dk/graphql', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            query: `
            query AllPostsQuery {
                posts {
                    nodes {
                        slug
                        content
                        title
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

    const json = await res.json()
    const posts = json.data.posts.nodes;

    const paths = posts.map((post) => ({
        params: {slug: post.slug},
    }))

    return {paths, fallback: false}

}