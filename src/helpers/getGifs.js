const getGifsAPI = async (category) =>{
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=20&api_key=7IT1RwmrhcGrWzG79FR0YRKMwMBBfvg8`

    const res = await fetch(url);
    const {data} = await res.json()

    const gifs = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
        
    });
    return gifs;
}

export {
    getGifsAPI
}