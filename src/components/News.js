import React, { Component } from "react";
import axios from "axios";

class News extends Component {
  state = {
    news_feed: []
  };
  componentDidMount() {
    const { api_url } = this.props;
    console.log(api_url);

    axios.get(api_url).then(res => {
      console.log(res.data);

      if (res.status === 200) {
        this.setState({
          news_feed: res.data.articles
        });
      }
    });
  }

  render() {
    const { news_feed } = this.state;

    if (!news_feed) return null;
    const newsFeed = news_feed.map((news, index) => {
      return (
        <div className="card horizontal" key={`Litu_${index}`}>
          <div className="card-image" style={{ maxWidth: "37%" }}>
            <img src={news.urlToImage} alt="" />
          </div>
          <div className="card-stacked">
            <div className="card-content" style={{ paddingTop: 0 }}>
              <span
                className="card-title grey-text text-darken-4"
                style={{ fontSize: "1.5rem" }}
              >
                {news.title}
              </span>
              <p>{news.description}</p>
            </div>
            <div className="card-action">
              <a className="btn light-green" href={news.url} target="_blank">
                Click here
                <i className="material-icons right">send</i>
              </a>
            </div>
          </div>
        </div>
      );
    });
    return (
      <div className="container">
        <div className="row" style={{ minHeight: "100vh" }}>
          <div className="col s12">
            <h4>News</h4>
            {newsFeed}
          </div>
        </div>
      </div>
    );
  }
}

export default News;
