import React from 'react'

export const GifGridItem = ({id,title,url}) => {
    return (
        <div className="card animate__animated animate__fadeInDown animate__delay-3s">
            <img src={url} alt={title}/>
          <p>{title}</p>  
        </div>
    )
}
