import React from 'react'
import Column from './Column';

export default function NewsItem(props){
        let { title, description, image, url, author, publishedat, src} = props;
        return (
            <Column colwrap={4}>
                <div className="card" ><span className="badge bg-secondary">{src}</span>
                    <img src={image} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title} </h5>
                        <p className="card-text">{description}</p>
                        <p className="card-text"><small className="text-muted">{`Updated By: ${author?author:"Unknown"} ${new Date(publishedat).toLocaleString()}`}</small></p>
                        <a href={url} target="_blank" className="btn btn-primary">Read More</a>
                    </div>
                </div>
            </Column>
        );
    
}
