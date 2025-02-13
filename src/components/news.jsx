
import  {useState,useEffect} from 'react'
import axios from 'axios'
import Newsitem from './newsitem'
import Spinner from './spinner'
import '../styling/newsstyle.css'
const News = ()=>{
const[articles,setArticles] = useState([])
const API = import.meta.env.VITE_NEWSAPI;
const[loading,Setloading] =useState(false)
const newsdata= async()=>{
    try {
        Setloading(true)
        const resp = await axios.get(`https://newsdata.io/api/1/news?apikey=${API}&q=economics&language=en&category=business `)
        
       
        
        
       
        setArticles(resp.data.results)
        Setloading(false)
    } catch (error) {
        console.log('error in fetching news from api',error)
    }
}
useEffect(()=>{
    newsdata()
},[])
    return(
    <>
    <h1 className='newsheader'> Top Economic Headlines </h1>
    {loading ?(
        <Spinner/>
    ):(<div className="k">
        {articles.map((result,index)=>(
            <>
            <div className="cards" key={index}>
            <Newsitem 
            title={result.title}
            imageurl={result.image_url}
            url={result.source_url}
            content={result.description}
            pubdate={result.pubDate}
            />
            </div>
            </>
        ))}
    </div>)}
    

    </>
)

}
export default News