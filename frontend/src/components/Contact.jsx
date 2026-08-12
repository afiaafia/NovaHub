import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        {/* Left */}
        <div className="contact-content">
          <span className="contact-eyebrow">GET IN TOUCH</span>

          <h2>
            Let's build
            <br />
            <span>something better.</span>
          </h2>

          <p>
            Have a question, idea, or feedback? We'd love to hear from you. Send
            us a message and we'll get back to you.
          </p>

          <div className="contact-info">
            <div className="contact-info-item">
              <div className="contact-icon">✦</div>

              <div>
                <span>EMAIL</span>

                <a href="mailto:hello@novahub.dev">hello@novahub.dev</a>
              </div>
            </div>

            <div className="contact-info-item">
              <div className="contact-icon">◎</div>

              <div>
                <span>RESPONSE TIME</span>

                <p>Usually within 24 hours</p>
              </div>
            </div>
          </div>
        </div>

        {/* Form */}
        <form
          className="contact-form"
          onSubmit={(event) => event.preventDefault()}
        >
          <div className="form-heading">
            <span>SEND A MESSAGE</span>

            <h3>Tell us what's on your mind.</h3>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="name">Name</label>

              <input id="name" type="text" placeholder="Your name" required />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>

              <input
                id="email"
                type="email"
                placeholder="you@example.com"
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="subject">Subject</label>

            <input
              id="subject"
              type="text"
              placeholder="What can we help with?"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>

            <textarea
              id="message"
              placeholder="Write your message..."
              required
            />
          </div>

          <button type="submit" className="contact-submit">
            <span>Send Message</span>

            <span className="submit-arrow">→</span>
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
