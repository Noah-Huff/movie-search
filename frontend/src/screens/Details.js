import React from 'react'
import { useParams } from 'react-router-dom';

const Details = () => {
    let { id } = useParams();
    console.log("Use Params ", id);
    return (
        <div>
            
        </div>
    )
}

export default Details
