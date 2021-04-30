// import Image from "next/image";
import {ContentText, PageContentWrapper} from "@/components/Layout/Content/styles";

export default function Post({post}) {

    const imgUrl = post.featuredImage?.node.sourceUrl
    return (
        <PageContentWrapper>
            <ContentText>
                <h1>{post.title}</h1>
                <p>{post.content}</p>
            </ContentText>
            {imgUrl && <img  width="700" height="700" src={imgUrl}/> }
        </PageContentWrapper>
    );
};

export async function getStaticProps(context) {
    const res = await fetch('https://lejeanf.com/jfr/graphql', {
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

    const res = await fetch('https://lejeanf.com/jfr/graphql', {
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