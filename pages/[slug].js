// import Image from "next/image";
// import Link from "next/link";
import {PageContentWrapper,ContentText} from "@/components/Layout/Content/styles";

export default function Post({data}) {
    const {page} = data
    const imgUrl = page.featuredImage?.node.sourceUrl
    return (
        <PageContentWrapper>

            <ContentText>
                <h1>{page.title}</h1>
                <p>{page.content}</p>
            </ContentText>


            {imgUrl && <img  width="700" height="700" src={imgUrl}/> }
        </PageContentWrapper>
    );
};

export async function getStaticProps(context) {

    const res = await fetch('http://localhost/jfr/graphql', {
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
    const res = await fetch('http://localhost/jfr/graphql', {
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
    const pages = json.data.pages.nodes;

    const paths = pages.map((page) => ({
        params: {slug: page.slug.toString()},
    }))
    return {paths, fallback: false}
}