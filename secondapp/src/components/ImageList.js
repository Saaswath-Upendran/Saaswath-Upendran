import React from "react";


const ImageList = (props) => {
    const image = props.images.map((image)=>{
        return <div key={image.id}>
                <img  src={image.webformatURL} alt=""/>
        </div>
        
    })
    return(
        <div>
            {image}
        </div>
    )
}


export default ImageList;