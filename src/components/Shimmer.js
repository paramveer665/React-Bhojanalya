const Shimmer = () => {
  return (
    <div className="shimmer-body body-cards">
      {Array(15)
        .fill("")
        .map((index) => (
          <div key={index} className="shimmer-card">
            <div className="shimmer-img"></div>
            <div>
              <span className="shimmer-info">ABCDEFGHIJKL </span> <br />
              <span className="shimmer-info">kjdsbgfkjadsbfj</span>
              <br />
              <span className="shimmer-info">asdjf</span>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Shimmer;
