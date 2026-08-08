import './Pricing.css';

export default function Pricing() {
  return (
    <section id="pricing" className="section">
      <h2 className="section-title">Pricing</h2>
      <div className="pricing-cards">
        <div className="card">
          <h3>Free</h3>
          <p>Basic features for personal use.</p>
          <span className="price">$0</span>
        </div>
        <div className="card featured">
          <h3>Pro</h3>
          <p>Advanced tools for creators.</p>
          <span className="price">$12/mo</span>
        </div>
        <div className="card">
          <h3>Enterprise</h3>
          <p>Full suite for teams & companies.</p>
          <span className="price">Custom</span>
        </div>
      </div>
    </section>
  );
}
