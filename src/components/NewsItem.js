import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, author, publishedAt, source } =
      this.props;
    return (
      <div className="my-3">
        <div className="card mb-2" style={{ maxWidth: "540px" }}>
          <span
            className="position-absolute top-0 translate-middle badge rounded-pill bg-danger"
            style={{ left: "95%", zIndex: "1" }}
          >
            {source}
          </span>
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
                style={{ height: "100%" }}
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">
                  <span className="badge rounded-pill bg-success">New</span>
                  {title}
                </h5>
                <p className="card-text">{description}...</p>
                <p className="card-text " style={{ fontSize: "0.75em",color:"blue" }}>
                  By {!author ? "unknown" : author} on{" "}
                  {new Date(publishedAt).toGMTString()}
                </p>
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
