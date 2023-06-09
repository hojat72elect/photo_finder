import React, {useContext} from 'react'
import {ImageContext} from "../../Application";
import {ImageButton} from "./ImageButton";


/**
 * The page for showing requested images.
 * On top, there's a text indicating what was the saerch query, and below it,
 * there is a gallery of images.
 *
 */
export const ImageScreen = () => {


    const {response, searchImage} = useContext(ImageContext);

    return (
        <>
            <h1 className="text-center mt-6 underline text-2xl">Results for {searchImage || 'Cats'}</h1>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 my-10 max-w-7xl mx-auto px-4">
                {response.map((data, key) => <ImageButton key={key}
                                                                            data={data}/>)}
            </div>
        </>
    )
}
