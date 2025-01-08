
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer-section container py-5">
      <div className="footer-links d-flex justify-content-between">
        {[
            { heading: "Product", links: ["Overview", "Features", "Solutions", "Tutorials","Prices","Realeases"] },
          { heading: "Company", links: ["About", "Careers", "Press", "News","Media Kit","Contact"] },
          { heading: "UseCases", links: ["Marketing","Government","Startup","Ecommerce","MarketPlace","Saas Center"] },
          { heading: "Resources", links: ["Blog", "Newsletter", "Events", "Help Center","Tutorial","Support"] },
          { heading: "Social", links: ["Twitter", "Facebook", "LinkedIn", "Instagram","Github","AngleList"] },
          { heading: "Legal", links: ["Privacy", "Terms","Licence","Settings","Contact","Cookies"] },
        ].map((section, index) => (
          <div className="footer-link-section" key={index}>
            <h4>{section.heading}</h4>
            <ul>
              {section.links.map((link, idx) => (
                <li key={idx}>
                  <a href="#">{link}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="footer-bottom d-flex justify-content-between align-items-center mt-4">
        <h4 className="company-name">zYsK</h4>
        <p className="company-description">
        © 2077 zysktechnologies. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
