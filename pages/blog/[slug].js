import Image from "next/image";
import Link from "next/link";

export default function Post(data) {
    const {post} = data
    const imgUrl = post.featuredImage?.node.sourceUrl
    return (
        <div>
            <Link href={`/`}> TO HOME</Link>
            {imgUrl && <Image width="300" height="420" src={imgUrl}/> }
            <h1>{post.title}</h1>
            <p>{post.content}</p>
        </div>
    );
};

export async function getStaticProps(context) {
    const res = await fetch('http://localhost/jfr/graphql', {
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

    const res = await fetch('http://localhost/jfr/graphql', {
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