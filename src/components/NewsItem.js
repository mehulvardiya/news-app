import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl } = this.props;
    return (
      <div className="my-3">
        <div className="card mb-2" style={{ maxWidth: "540px"}}>
          <div className="row g-0">
            <div className="col-md-4">
              <img
                src={
                  !imageUrl
                    ? "https://img.freepik.com/premium-vector/news-breaking-internet-text-noisy-headline-modern-concept-broadcast-flare-television-design-flat-style-vector-illustration_169479-2663.jpg?w=826"
                    : imageUrl
                }
                className="img-fluid rounded-start"
                alt="..."
                style={{ height: "100%"}}
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">{title}...</h5>
                <p className="card-text">{description}...</p>
                <a
                  rel="noreferrer"
                  href={newsUrl}
                  target="_blank"
                  className="btn btn-sm btn-dark"
                >
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
