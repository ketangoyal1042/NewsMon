import React, { Component } from 'react'
import NewsItem from './NewsItem'
import ProductService from '../Services/ProductService'
import Loading from './Loading';
import PropTypes from 'prop-types';

export default class News extends Component {
    newsResults = [
        {
            "source": {
                "id": "bbc-news",
                "name": "BBC News"
            },
            "author": "BBC News",
            "title": "Ukraine’s missile graveyard 'is evidence against Russia’",
            "description": "Prosecutors want the collection of more than 1,000 munitions to be used in any future court action.",
            "url": "http://www.bbc.co.uk/news/world-europe-63951794",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/11650/production/_127984217_p0dnrkjv.jpg",
            "publishedAt": "2022-12-13T12:37:20.3215888Z",
            "content": "Ukraines second city, Kharkiv, has suffered from heavy Russian shelling and air strikes since the start of the war in February. \r\nOfficials there told the BBC they have been collecting the remains of… [+358 chars]"
        },
        {
            "source": {
                "id": "bbc-news",
                "name": "BBC News"
            },
            "author": "BBC News",
            "title": "US charges Sam Bankman-Fried with defrauding investors",
            "description": "He is accused of \"orchestrating a scheme\" to defraud investors in failed crypto exchange FTX.",
            "url": "http://www.bbc.co.uk/news/technology-63957020",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/83B3/production/_115651733_breaking-large-promo-nc.png",
            "publishedAt": "2022-12-13T12:22:24.7491085Z",
            "content": "The US Securities and Exchange Commission (SEC) has charged Sam Bankman-Fried with \"orchestrating a scheme to defraud investors\" in the failed cryptocurrency exchange FTX.\r\nThe former FTX boss was ar… [+342 chars]"
        },
        {
            "source": {
                "id": "bbc-news",
                "name": "BBC News"
            },
            "author": "BBC News",
            "title": "K-pop star Jin from BTS begins military service",
            "description": "What can Jin from BTS expect from his time in the South Korean army?",
            "url": "http://www.bbc.co.uk/news/world-asia-63944860",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/E694/production/_127982095_9e58609a-ad17-4c50-abae-1127e40f3318.jpg",
            "publishedAt": "2022-12-13T11:37:19.6177368Z",
            "content": "Jin, the oldest member of K-pop mega-band BTS, has entered military service - the first of the group to do so.\r\nThe 30-year-old posted a photo of himself with his new military haircut before enlistin… [+5486 chars]"
        },
        {
            "source": {
                "id": "bbc-news",
                "name": "BBC News"
            },
            "author": "BBC News",
            "title": "Former seat of Confederacy takes down last monument",
            "description": "A descendant of the rebel general said it was \"a tough day\", but a black Richmond resident said it was \"nice\".",
            "url": "http://www.bbc.co.uk/news/world-us-canada-63953022",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/7952/production/_127985013_23200c652492fa4c660f22026cef3dd194152adc0_0_2700_18011000x667.jpg",
            "publishedAt": "2022-12-13T11:07:19.7115425Z",
            "content": "Media caption, Watch: Richmond, Virginia, removes its final symbol of the confederacy\r\nThe city of Richmond, Virginia, former seat of the pro-slaveowning Confederacy, has removed its last statue hono… [+1367 chars]"
        },
        {
            "source": {
                "id": "bbc-news",
                "name": "BBC News"
            },
            "author": "BBC News",
            "title": "Tory Lanez trial over Megan Thee Stallion shooting begins",
            "description": "Tory Lanez denies shooting the rapper as they left a pool party at Kylie Jenner's house in Hollywood.",
            "url": "http://www.bbc.co.uk/news/newsbeat-63955189",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/14ABB/production/_127976648_gettyimages-1397523021.jpg",
            "publishedAt": "2022-12-13T09:37:24.8213762Z",
            "content": "Tory Lanez told Megan Thee Stallion to \"dance\" as he shot at her feet during an argument, a jury has been told.\r\nProsecutors said Mr Lanez and Megan got into a row as they drove away from a pool part… [+1790 chars]"
        },
        {
            "source": {
                "id": "bbc-news",
                "name": "BBC News"
            },
            "author": "BBC News",
            "title": "India and China troops clash on Arunachal Pradesh mountain border",
            "description": "The Indian army says a small number of soldiers fought on Friday but both sides disengaged quickly.",
            "url": "http://www.bbc.co.uk/news/world-asia-63953400",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/11786/production/_127985517_gettyimages-1231432460.jpg",
            "publishedAt": "2022-12-13T08:22:25.322221Z",
            "content": "India says its forces have clashed with Chinese troops in a disputed area along the border, the first such flare-up in more than a year.\r\nThe nations had been working to de-escalate tensions since a … [+2010 chars]"
        },
        {
            "source": {
                "id": "bbc-news",
                "name": "BBC News"
            },
            "author": "BBC News",
            "title": "EU corruption scandal: European Parliament offices searched",
            "description": "Belgian police seize about €1m (£859,000) amid allegations that Qatar bribed EU officials.",
            "url": "http://www.bbc.co.uk/news/world-europe-63952993",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/5DFA/production/_127985042_e25a08673d714b02bd4028c1b569b4a61c1b4b9e0_0_4500_25311000x563.jpg",
            "publishedAt": "2022-12-13T03:22:21.8739032Z",
            "content": "Belgian investigators searched offices at the European Parliament in Brussels on Monday, in a probe into alleged bribes from World Cup host Qatar.\r\nIt was the 20th search carried out in Belgium since… [+3293 chars]"
        },
        {
            "source": {
                "id": "bbc-news",
                "name": "BBC News"
            },
            "author": "BBC News",
            "title": "US winter storm to bring blizzard, tornadoes and floods",
            "description": "\"This one is a little larger than your average winter storm,\" says a meteorologist of the wintry system.",
            "url": "http://www.bbc.co.uk/news/world-us-canada-63952802",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/3A64/production/_127984941_gettyimages-1244937915.jpg",
            "publishedAt": "2022-12-13T02:37:19.257148Z",
            "content": "A coast-to-coast storm is bringing heavy snowfall, powerful winds, the threat of thunderstorms and other extreme weather events across the US. \r\nSome western states, including Montana, Wyoming and So… [+1909 chars]"
        },
        {
            "source": {
                "id": "bbc-news",
                "name": "BBC News"
            },
            "author": "BBC News",
            "title": "FTX founder Sam Bankman-Fried arrested in Bahamas",
            "description": "FTX filed for bankruptcy last month, leaving many unable to withdraw their funds from the cryptocurrency exchange.",
            "url": "http://www.bbc.co.uk/news/business-63953096",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/B23A/production/_127562654_ftx.jpg",
            "publishedAt": "2022-12-13T00:22:19.1491217Z",
            "content": "On 12 December 2022, the Office of the Attorney General of The Bahamas is announcing the arrest by The Royal Bahamas Police Force of Sam Bankman-Fried (SBF), former CEO of FTX. pic.twitter.com/CRNeLP… [+66 chars]"
        },
        {
            "source": {
                "id": "bbc-news",
                "name": "BBC News"
            },
            "author": "BBC News",
            "title": "Murdered Canada billionaires' son tops cash reward",
            "description": "Barry and Honey Sherman were found strangled in their home in 2017. Their killer is still at-large.",
            "url": "http://www.bbc.co.uk/news/world-us-canada-63947424",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/6430/production/_127984652_1513437004-99232267043610425.jpg",
            "publishedAt": "2022-12-12T22:37:27.8853265Z",
            "content": "The son of two Canadian billionaires has offered an additional C$25m ($18.34m; £14.95m) as a reward for information on his parents' killer.\r\nBarry Sherman, 75, and Honey Sherman, 70, were found stran… [+2302 chars]"
        }
    ];

    static defaultProps = {
        PageSize: 6,
        Country: "in",
        category: "entertainment"
    }

    static propsTypes = {
        PageSize: PropTypes.number,
        Country: PropTypes.string,
        category: PropTypes.string
    }

    constructor(props) {
        super(props);
        this.state = {
            Articles: [], // phle yha hm Articles: newsResults kr rhe the
            loading: false,
            Page: 1,
        }
        document.title = `${this.props.category} News | All About World`;
    }

    async updateNews(){
        this.setState({ loading: true });
        const fetchedNews = await ProductService.getarticles(this.state.Page, this.props.PageSize, this.props.category,);
        // fetchedNews.then((res) => {this.setState({Articles:res.articles});})   //way 1 (if not used the async await)
        this.setState({
            Articles: fetchedNews.articles,
            Page: this.state.Page,
            totalResults: fetchedNews.totalResults,
            loading: false
        });
    }

    async componentDidMount() {
        this.updateNews();
    }

    HandlePrev = async () => {
        this.setState({ Page: this.state.Page - 1 });
        this.updateNews();
    }
    HandleNext = async () => {
        this.setState({ Page: this.state.Page + 1 });
        this.updateNews();
    }


    render() {
        // const MyNews = {
        //     Articles: this.newsResults,
        //     loading: false
        // }
        return (
            <div className='my-3 container'>
                <h2 className='text-center'>Top News of <b>{this.props.category}</b> <i> | Page :{this.state.Page}</i></h2>
                {this.state.loading && <Loading />}
                {!this.state.loading && <div className="row">
                    {this.state.Articles.map((news) => (
                        <NewsItem key={news.url} title={news.title ? news.title.slice(0, 45) : "Unknown"} description={news.description && news.description.length > 75 ? news.description.slice(0, 75) + "..." : news.description ? news.description.slice(0, 75) : "Description is not provided"} image={news.urlToImage} url={news.url} publishedat={news.publishedAt} author={news.author} src={news.source.name}/>
                    ))}
                </div>}
                <hr />
                <div className="container justify-content-between d-flex">
                    <button disabled={this.state.Page <= 1} type="button" className="btn btn-info" onClick={this.HandlePrev}> &larr; Previous</button>
                    <button disabled={this.state.Page + 1 > Math.ceil(this.state.totalResults / this.props.pagesize)} type="button" className="btn btn-info" onClick={this.HandleNext}>Next &rarr;</button>
                </div>
            </div>
        )
    }
}
