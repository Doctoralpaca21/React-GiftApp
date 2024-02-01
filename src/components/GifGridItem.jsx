
export const GifGridItem = ({id, title, url}) => {
    // console.log({id, title, url})
    return (
        <div className="gif-container">
            <img className="gif-image" src={ url } alt={ title } />
            <p>{title}</p>
        </div>
    )
}
