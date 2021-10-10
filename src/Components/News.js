import React from "react";
import NewsItem from "./NewsItem";
import Loader from "./Loader"
import { useState }  from "react";
import {useEffect} from 'react'
import InfiniteScroll from "react-infinite-scroll-component";

const News =(props)=>{
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true)
  const[page, setPage] = useState(1)
  const[totalResults, setTotalResults] = useState("")

  const fetchNews = async ()=>
  {
    setLoading(true);
    props.setProgress(0);
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=987d73ed5e354d74be2052f32adc0515&pagesize=${props.pagesize}`;
    let data = await fetch(url);
    props.setProgress(50);
    let parsedData = await data.json();
    props.setProgress(70);
    console.log(parsedData);
    setArticles(parsedData.articles);
    setTotalResults(parsedData.totalResults );
    props.setProgress(100);
    setLoading(false);
    
  }
  useEffect(() => {
    fetchNews();
    
  }, [])

 const fetchMoreData = async () => {
    let url =`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=987d73ed5e354d74be2052f32adc0515&page=${page+1}&pageSize=${props.pageSize}`;
    setPage(page + 1)
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
     setArticles(articles.concat(parsedData.articles));
     setTotalResults(parsedData.totalResults );
  };
  
    return (
      <div>
        <div className="container " style={{marginTop:"80px"}}>
          <h2 className={`my-3 text-${props.mode==="light"?"dark":"white"}`} >
            Top News - {props.category.charAt(0).toUpperCase()}
            {props.category.slice(1).toLowerCase()}
          </h2>
          <h5>
            <span className="badge badge-pill badge-light">
              {totalResults}
              {loading === false ? " results" : <Loader/>}
            </span>
          </h5>

          <InfiniteScroll
            dataLength={articles.length}
            next={fetchMoreData}
            hasMore={articles.length !== totalResults}
            
            
          >
          <div className="container">
            <div className="row">
              {articles.map((element) => {
                return (
                  <div className="card-columns col-md-4 my-2 " key={element.url}>
                    <NewsItem
                      title={element.title ? element.title.slice(0, 45) : ""}
                      description={
                        element.description
                          ? element.description.slice(0, 88)
                          : "no Description"
                      }
                      imgUrl={element.urlToImage}
                      newsUrl={element.url}
                      publishedAt={element.publishedAt}
                      source={element.source.name}
                      
                    />
                  </div>
                );
              })}
            </div>
          </div>
          </InfiniteScroll>
        </div>
      </div>
    );
  
}
export default News
