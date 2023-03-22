





export const fetchPosts = async (page: number) => {
    const response = await fetch(`https://dev.tedooo.com/hw/feed.json?skip=${page*6}`)
    return response.json()
}