import './Contact.css';

const Contact = () => {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <div className="contact-content">
          <span className="contact-badge">GET IN TOUCH</span>

          <h2>
            Let's build something
            <span> great together.</span>
          </h2>

          <p>
            Have a question, suggestion, or feedback about NovaHub? Send us a
            message and we'll get back to you.
          </p>

          <div className="contact-info">
            <div className="contact-info-item">
              <div className="contact-icon">✉</div>

              <div>
                <span>Email</span>
                <a href="mailto:hello@novahub.dev">hello@novahub.dev</a>
              </div>
            </div>

            <div className="contact-info-item">
              <div className="contact-icon">⌖</div>

              <div>
                <span>Workspace</span>
                <p>Available everywhere, anytime.</p>
              </div>
            </div>
          </div>
        </div>

        <form className="contact-form">
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="you@example.com"
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="subject">Subject</label>
            <input
              type="text"
              id="subject"
              name="subject"
              placeholder="How can we help?"
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows="6"
              placeholder="Write your message..."
            ></textarea>
          </div>

          <button type="submit" className="contact-submit">
            Send Message
            <span>→</span>
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
