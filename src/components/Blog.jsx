
import "./Blog.css"; 
import blog1 from '../assets/blog1.png';
import blog2 from '../assets/blog2.png';
import blog3 from '../assets/blog3.png';
import blog4 from '../assets/navimage.png';


const Blog = () => {

  const blogs = [
    {
      title: "UX review presentations",
      category: "Design",
      description: "How do you create compelling presentations that wow your colleagues and impress your managers?",
      author: "Olivia Rye",
      date: "20 Jan 2024",
      logo:blog4,
      image:blog1, 
    },
    {
      title: "Migrating to Linear 101",
      category: "Product",
      description: "Linear helps streamline software projects, sprints, tasks, and bug tracking. Here's how to get started.",
      author: "Phoenix Baker",
      date: "19 Jan 2024",
      logo:blog4,
      image: blog2, 
    },
    {
      title: "Building your API stack",
      category: "Software Engineering",
      description: "The rise of RESTful APIs has been met by a rise in tools for creating, testing, and managing them.",
      author: "Lana Steiner",
      date: "18 Jan 2024",
      logo:blog4,
      image: blog3,
    },
  ];

  return (
    <div className="blog-section container py-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="fw" style={{color:'red',fontSize:"16px"}}>Our Blog</h2>
        <button className="btn btn-outline-primary" style={{color:"white",border:"none"}}>View all posts</button>
      </div>
      <h3 className="fw-bold" style={{textAlign:"left",fontSize:"36px"}}>Latest Blog Posts</h3>
      <p style={{textAlign:"left",color:"#475467",fontSize:"20px",marginTop:"10px"}}>Tool and strategies modern teams need to help their companies grow.</p>
      <div className="row">
        {blogs.map((blog, index) => (
          <div className="col-md-4" key={index}>
            <div className="blog-card">
              <img src={blog.image} alt={blog.title} className="blog-image" />
              <div className="blog-content">
                <span className="blog-category" style={{textAlign:"left"}}>{blog.category}</span>
                <h5 className="blog-title" style={{textAlign:"left"}}>{blog.title}</h5>
                <p className="blog-description" style={{textAlign:"left"}}>{blog.description}</p>
                <div className="blog-footer">
              <img src={blog.logo} alt="error" style={{width:"40px",height:"40px",borderRadius:"50%"}}></img>
              <span className="blog-author">{blog.author}</span>
                  <span className="blog-date">{blog.date}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
