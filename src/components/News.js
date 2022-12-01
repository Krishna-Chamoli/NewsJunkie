import React, { Component } from 'react'
import LoadingSpinner from './LoadingSpinner';
import NewsItem from './NewsItem'
import InfiniteScroll from 'react-infinite-scroll-component';

export default class News extends Component {
    constructor() {
        super();
        this.state = {
            articles: [],
            page: 1,
            loading: false,
            totalResults: 0
        }
    }

    async componentDidMount() {
        this.setState({
            loading: true
        })
        this.fetchData();
    }

    fetchData = async () => {
        this.props.setProgress(10);
        let apiUrl = `https://newsapi.org/v2/top-headlines?country=in&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}&category=${this.props.category}`

        let fetchedData = await fetch(apiUrl);
        let data = await fetchedData.json();
        this.props.setProgress(40);

        let articles = data.articles;
        this.props.setProgress(100);
        this.setState({
            loading: false,
            articles: articles,
            totalResults: data.totalResults
        })
    }

    fetchMoreData = async () => {
        this.setState({
            page: this.state.page + 1
        })
        let apiUrl = `https://newsapi.org/v2/top-headlines?country=in&apiKey=${this.props.apiKey}&page=${this.state.page + 1}&pageSize=${this.props.pageSize}&category=${this.props.category}`
        let fetchedData = await fetch(apiUrl);
        let data = await fetchedData.json();
        let articles = data.articles;
        this.setState({
            articles: this.state.articles.concat(articles),
            totalResults: data.totalResults
        })
    }

    render() {
        let style = this.props.mode.style;
        return (
            <div className='container my-2' style={style}>
                <h2 className="text-center" style={{ marginTop: "65px" }}>NewsJunkie - Top HeadLines</h2>

                <InfiniteScroll
                    dataLength={this.state.articles.length}
                    next={this.fetchMoreData}
                    style={{ overflow: 'inherit' }}
                    hasMore={this.state.totalResults > this.state.articles.length}
                    loader={<LoadingSpinner />}
                    scrollableTarget="scrollableDiv"
                    endMessage={
                        !this.state.loading && <p style={{ textAlign: 'center' }}>
                            <b>Yay! You have seen it all</b>
                        </p>
                    }
                >
                    {this.state.loading && <LoadingSpinner />}
                    {<div className="row" >
                        {!this.state.loading && this.state.articles.map(dataItem => {
                            return <div className='col-md-4' key={dataItem.url}>
                                <NewsItem dataItem={dataItem} mode={this.props.mode} />
                            </div>
                        })}
                    </div>}

                </InfiniteScroll>
            </div >
        )
    }
}
