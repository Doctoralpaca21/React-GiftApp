import { useState } from "react"
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GiftExpertApp =()=> {

    const [categories, setCategories] = useState(['Death Note']);

    // const handleAddCategories = () =>{
    //     const newCategories = 'Hunter X Hunter'
    //     setCategories([...categories, newCategories])
    // }

    return (
        <>
            <h1>GiftExpertApp</h1>
            <hr />
            
            <AddCategory setCategories={setCategories}/>
            <ol>
                {
                    categories.map(category =>( 
                        <GifGrid 
                            key={category}
                            category={category}
                        />
                    ))
                }
            </ol>
        </>

    )
}