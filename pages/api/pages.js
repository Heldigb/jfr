export default async (req, res) => {
    const data = await fetch('https://lejeanf.com/api/graphql', {
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

    const json = await data.json()
    const pages = json.data.pages;

    res.status(200).json(pages)
}
