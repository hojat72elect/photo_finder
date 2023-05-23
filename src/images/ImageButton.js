import React from 'react'

/**
 * A normal Image viewer which is clickable.
 */
const ImageButton = ({data}) => {
    return (
        <a href={data.urls.regular} target="_blank" rel="noreferrer">
            <img className="h-72 w-full object-cover rounded-lg shadow-lg"
                 src={data.urls.small} alt={data.alt_description}/>
        </a>
    )
}
export default ImageButton