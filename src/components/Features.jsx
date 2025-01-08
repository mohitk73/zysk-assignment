import "./Features.css";

function Features() {
  return (
    <div className="features-section container text-center py-5">
      <h6 className="text-danger">Features</h6>
      <h2 className="fw-bold">Analytics that feels like it&apos;s from the future</h2>
      <p className="text-muted">
        Powerful, self-serve product and growth analytics to help you convert, engage,
        and retain more users. Trusted by over 4,000 startups.
      </p>

      <div className="row text-center mt-4">
        {[
          {
            icon: "🔒", 
            title: "Share team inboxes",
            description:
              "Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.",
          },
          {
            icon: "⚡",
            title: "Deliver instant answers",
            description:
              "An all-in-one customer service platform that helps you balance everything your customers need to be happy.",
          },
          {
            icon: "📊",
            title: "Manage your team with reports",
            description:
              "Measure what matters with easy-to-use reports. Filter, export, and drill down on the data in a couple of clicks.",
          },
          {
            icon: "💬",
            title: "Connect with customers",
            description:
              "Solve a problem or close a sale in real-time with chat. If no one is available, customers are seamlessly routed to email.",
          },
          {
            icon: "🔗",
            title: "Connect the tools you already use",
            description:
              "Explore 100+ integrations that make your workflow efficient and familiar, plus our extensive developer tools.",
          },
          {
            icon: "🤝",
            title: "Our people make the difference",
            description:
              "We&apos;re an extension of your customer service team, here to make your life easier 24/7 when you need help.",
          },
        ].map((feature, index) => (
          <div key={index} className="col-md-4 mb-4">
            <div className="feature-item">
              <div className="icon mb-3 fs-1">{feature.icon}</div>
              <h5>{feature.title}</h5>
              <p className="text-muted">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Features;
