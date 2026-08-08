import './Blog.css';

export default function Blog() {
  return (
    <section id="blog" className="section">
      <h2 className="section-title">Blog</h2>
      <div className="blog-list">
        <article className="blog-card">
          <h3>Boost Your Productivity</h3>
          <p>Learn how to stay focused and achieve more.</p>
          <a href="#">Read more →</a>
        </article>
        <article className="blog-card">
          <h3>Organizing Projects</h3>
          <p>Tips for managing multiple projects effectively.</p>
          <a href="#">Read more →</a>
        </article>
      </div>
    </section>
  );
}
