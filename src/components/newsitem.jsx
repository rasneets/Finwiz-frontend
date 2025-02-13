import React from 'react'
const Newsitem=({title,imageurl,url,content,pubdate})=>{
   return( 
   
   <div className="mycard">
        <img src={imageurl} alt='news'/>
        <h1>{title}</h1>
        <p>{content}</p>
        <p>{pubdate}</p>
        <a href={url} target='_blank'>readmore</a>
    </div>
   )
}
export default Newsitem