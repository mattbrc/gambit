const NotFoundPage = () => {
  return (
    <div className="container text-center">
      <p className="my-10">That page doesn't exist!</p>
      <a href="/">
        <button className="btn btn-success">Go Home</button>
      </a>
    </div>
  );
};

export default NotFoundPage;
