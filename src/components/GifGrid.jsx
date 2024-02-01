import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifGridItem } from "./GifGridItem";

export const GifGrid = ({ category }) => {
    const { data, loading } = useFetchGifs(category);

    // const [images, setImages] = useState([]);
    // useEffect( () => {
    //     getGifsAPI(category)
    //         .then( setImages);
    // },[category])


    return (
        <>
            <h3>{category}</h3>
            
            <div className="card-grid">                
                {data.map(image => (
                    <GifGridItem
                        key={image.id}
                        {...image}
                    />
                ))}

            </div>
        </>

    )
}
