 async function handler()  {
    const response = await fetch('http://localhost/jfr/graphql', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            query: `
              query PagesMenu {
              pages {
                nodes {
                  slug
                  title
                }
              }
            }
        `
        })
    })

    const json = await response.json()

    return {
        props: {
            data: json.data.pages
        }
    }
}

 export default handler()