
import "./Trial.css"; 

const Trial = () => {
  return (
    <div className="trial-section container text-center py-5">
      <h1 className="trial-heading">Start your free trial</h1>
      <p className="trial-paragraph">
        Join over 4,000+ startups already growing with Untitled.
      </p>
      <div className="button-group mt-4">
        <button className="btn btn-outline-dark trial-button" style={{border:"1px solid #D0D5DD"}}>Learn more</button>
        <button className="btn btn-danger trial-button ml-3">Get started</button>
      </div>
    </div>
  );
};

export default Trial;
