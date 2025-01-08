import  { useState } from "react";
import "./Frequently.css";

const Frequently = () => {
  const faqs = [
    {
      question: "Is there a free trial available?",
      answer:
        "Yes, you can try us for free for 30 days. If you want, we&apos;ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
    },
    { question: "Can I change my plan later?", answer: "Yes, you can upgrade or downgrade your plan at any time." },
    {
      question: "What is your cancellation policy?",
      answer: "You can cancel your subscription anytime without any penalties.",
    },
    {
      question: "Can other info be added to an invoice?",
      answer: "Yes, you can include additional information when generating invoices.",
    },
    { question: "How does billing work?", answer: "Billing occurs on a monthly basis and is fully automated." },
    { question: "How do I change my account email?", answer: "You can update your email in your account settings." },
  ];

  const [activeIndex, setActiveIndex] = useState(null); // Manage active FAQ item
  const toggleFAQ = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="faq-section container py-5">
      <div className="text-center mb-4">
        <h2 className="fw-bold">Frequently asked questions</h2>
        <p className="text-muted">Everything you need to know about the product and billing.</p>
      </div>

      <div className="faq-list">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`faq-item ${activeIndex === index ? "active" : ""}`}
            onClick={() => toggleFAQ(index)}
          >
            <div className="faq-question d-flex justify-content-between align-items-center">
              <h5>{faq.question}</h5>
              <span className="toggle-icon">{activeIndex === index ? "-" : "+"}</span>
            </div>
            {activeIndex === index && <p className="faq-answer mt-2">{faq.answer}</p>}
          </div>
        ))}
      </div>

      <div className="faq-footer text-center mt-5">
        <p style={{ color: "black", fontWeight: "600" }}>Still Have Questions?</p>
        <p>Can&apos;t find the answer you&apos;re looking for? Please chat with our friendly team.</p>
        <button className="btn">Get in touch</button>
      </div>
    </div>
  );
};

export default Frequently;
