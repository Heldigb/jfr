import Image from "next/image";
import Link from "next/link";

export default function About({data}) {

    const page = data.page
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


export async function getStaticProps() {

    const res = await fetch("http://localhost/jfr/graphql", {
        method: "POST",
        headers: {'Content-type': 'application/json'},
        body: JSON.stringify({
            query: `
                 query PagesQuery {
                  page(id: "about", idType: URI) {
                    content
                    slug
                    title
                           featuredImage {
                            node {
                                sourceUrl
                            }
                        }
                  }
                }
            `
        })
    })
    const json = await res.json()


    console.log(json)
    return {
        props: {
            data: json.data
        }
    }

}