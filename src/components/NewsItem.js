import React, { Component } from 'react'

export default class NewsItem extends Component {
    render() {
        let { dataItem } = this.props;
        let date = new Date(dataItem.publishedAt)
        let style = this.props.mode.style;
        return (
            <div className="card my-2" style={style}>
                <img src={dataItem.urlToImage ? dataItem.urlToImage : "https://static.toiimg.com/thumb/imgsize-127229,msid-77956986,width-400,resizemode-4/77956986.jpg"} className="card-img-top" alt="..." />
                <span className="badge text-bg-dark my-1">{dataItem.source.name}</span>
                <div className="card-body">
                    <h5 className="card-title">{dataItem.title}</h5>
                    <p className="card-text">{dataItem.description}</p>
                    <div className="d-flex justify-content-between">
                        <p className="card-text"><small className="text-muted">By: {dataItem.author ? dataItem.author : "Unknown"} </small></p>
                        <p className="card-text"><small className="text-muted">On: {date.toDateString()}</small></p>
                    </div>
                    <div className="d-flex justify-content-between">
                        <a href={dataItem.url} target="_blank" rel="noreferrer" className="btn btn-dark">Read More</a>
                    </div>
                </div>
            </div>
        )
    }
}
