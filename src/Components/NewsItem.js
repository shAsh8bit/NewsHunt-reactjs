import React from "react";


const NewsItem =(props)=> {
 
  
  
    let { title, description,imgUrl,newsUrl,publishedAt,source} = props;
    return (
      <div>
        <div className={`card rounded border border-dark`} style={{ width: "18rem" }}>
          <img
            src={imgUrl===null?"./sampleimg.png":imgUrl}
            className="card-img-top rounded"
            alt="..."
          /><span className="badge badge-pill badge-danger my-1 mx-1 ">{source}</span>
          <div className=" card-body">
            <h5 className="card-title">{title}</h5> 
            <p className="card-text"><small className="text-muted">{new Date(publishedAt).toGMTString()}</small></p>
            <p className="card-text">{description}</p>
            <a href={newsUrl} target="_blank" className="btn btn-outline-dark">
              Read more...
            </a>
          </div>
        </div>
      </div>
    );
  
}

export default NewsItem;
