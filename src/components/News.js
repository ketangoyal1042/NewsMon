import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import ProductService from '../Services/ProductService'
import Loading from './Loading';
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";

export default function News(props) {

    const [Articles, setArticles] = useState([])
    const [loading, setLoading] = useState(false)
    const [Page, setPage] = useState(1)
    const [totalResults, setTotalResults] = useState(0)
    
    document.title = `${props.category} News | All About World`;
    
    const updateNews = async()=> {
        props.setProgress(30);
        setLoading(true);
        const fetchedNews = await ProductService.getarticles(Page, props.PageSize, props.category, props.apiKey);
        // fetchedNews.then((res) => {this.setState({Articles:res.articles});})   //way 1 (if not used the async await)
        props.setProgress(50);
        setArticles(fetchedNews.articles);
        // setPage(Page);
        setTotalResults(fetchedNews.totalResults);
        setLoading(false);
        props.setProgress(100);
    }

    const componentDidMount= async()=> {
        updateNews();
    }
    useEffect(() => {
        updateNews();
      }, []) // it works as like componentdidmount

    const HandlePrev = async () => {
        setPage(Page-1);
        updateNews();
    }
    const HandleNext = async () => {
        setPage(Page+1);
        updateNews();
    }

    const fetchMoreData = async () => {
        setPage(Page+1);
        const fetchedNews = await ProductService.getarticles(Page+1, props.PageSize, props.category, props.apiKey);
        // fetchedNews.then((res) => {this.setState({Articles:res.articles});})   //way 1 (if not used the async await)
        setArticles(Articles.concat(fetchedNews.articles))
        setLoading(false)
    }

        return (
            <>
                <h2 className='text-center'>Top News of <b>{props.category}</b> <i> | Page :{Page}</i></h2>
                {/* {loading && <Loading />} */}
                <InfiniteScroll
                    dataLength={Articles.length}
                    next={fetchMoreData}
                    hasMore={Articles.length !== totalResults.length}
                    loader={<Loading />}
                    >
                    <div className='my-3 container'>
                        <div className="row">
                            {Articles.map((news) => (
                                <NewsItem key={news.url} title={news.title ? news.title.slice(0, 45) : "Unknown"} description={news.description && news.description.length > 75 ? news.description.slice(0, 75) + "..." : news.description ? news.description.slice(0, 75) : "Description is not provided"} image={news.urlToImage} url={news.url} publishedat={news.publishedAt} author={news.author} src={news.source.name} />
                            ))}
                        </div>
                        {/*  <hr /> */}
                        {/* <div className="container justify-content-between d-flex">
                        <button disabled={this.state.Page <= 1} type="button" className="btn btn-info" onClick={this.HandlePrev}> &larr; Previous</button>
                        <button disabled={this.state.Page + 1 > Math.ceil(this.state.totalResults / this.props.pagesize)} type="button" className="btn btn-info" onClick={this.HandleNext}>Next &rarr;</button>
                    </div> */}
                    </div>
                </InfiniteScroll>
            </>
        );
}

News.defaultProps = {
    PageSize: 6,
    Country: "in",
    category: "entertainment"
}

News.propsTypes = {
    PageSize: PropTypes.number,
    Country: PropTypes.string,
    category: PropTypes.string
}