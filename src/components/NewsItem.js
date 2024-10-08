import React from "react";

const NewsItem = (props) => {
  const isLatestNews = (publishedDate) => {
    const currentDate = new Date();
    const timeDiff = currentDate - publishedDate;
    const oneDayInMilliseconds = 24 * 60 * 60 * 1000;
    return timeDiff <= oneDayInMilliseconds;
  };

  let { title, description, imageUrl, newsUrl, author, publishedAt, source } =
    props;

  const publishedDate = new Date(publishedAt);

  return (
    <div className="my-3">
      <div className="card">
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            position: "absolute",
            right: "0",
          }}
        >
          <span className="badge rounded-pill bg-danger">{source}</span>
        </div>
        <img
          src={
            !imageUrl
              ? "https://img.freepik.com/premium-vector/news-breaking-internet-text-noisy-headline-modern-concept-broadcast-flare-television-design-flat-style-vector-illustration_169479-2663.jpg?w=826"
              : imageUrl
          }
          className="card-img-top"
          alt="News"
        />
        <div className="card-body">
          <h5 className="card-title">
            {isLatestNews(publishedDate) && (
              <span className="badge rounded-pill bg-success">Latest</span>
            )}
            {title}
          </h5>
          <p className="card-text">{description}...</p>
          <p
            className="card-text"
            style={{ fontSize: "0.75em", color: "blue" }}
          >
            By {!author ? "unknown" : author} on {publishedDate.toGMTString()}
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
  );
};

export default NewsItem;
