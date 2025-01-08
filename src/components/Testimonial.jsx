
import "./Testimonial.css"; 
import logo3 from "../assets/image.png"; 
import logo4 from "../assets/testimonial.png"; 

function Testimonial() { 
  return (
    <div className="testimonial-section container text-center py-5">
      <div className="company-info d-flex justify-content-center align-items-center mb-4">
        <img src={logo3} alt="Company Logo" className="company-logo me-2" />
        <h4 className="company-name">Sisyphus</h4>
      </div>
      <h2 className="fw-bold">
        We’ve been using Untitled to kickstart every new project and can’t
        imagine working without it.
      </h2>
      <div className="user-info mt-4">
        <img
          src={logo4}
          alt="Candice Wu"
          className="rounded-circle profile-image mb-3"
        />
        <h5>Candice Wu</h5>
        <p className="text-muted">Product Manager, Sisyphus</p>
      </div>
    </div>
  );
}

export default Testimonial;
