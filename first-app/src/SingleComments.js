import React from "react";

const SingleComments = (props) =>{
    return (
        <div className="comment">
            
            <div className="content">
                <a href="/" className="author">
                    {props.name}
                </a>
                <div className="metadata">
                    <span className="date">
                        Today 
                    </span>
                </div>
                <div className="text">
                    it's my first comment
                </div>
            </div>
        </div>
    ) 
}


export default SingleComments;