 async function handler()  {
    const response = await fetch('https://lejeanf.com/api/graphql', {
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