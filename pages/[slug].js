import Image from "next/image";
import Link from "next/link";

export default function Post({data}) {
    const {page} = data
    const imgUrl = page.featuredImage?.node.sourceUrl
    return (
        <div>
            <Link href={`/`}> TO HOME</Link>
            {imgUrl && <Image width="300" height="420" src={imgUrl}/> }
            <h1>{page.title}</h1>
            <p>{page.content}</p>
        </div>
    );
};

export async function getStaticProps(context) {

    console.log(context)

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


    console.log(context.params.slug)
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
console.log(pages)
    return {paths, fallback: false}

}