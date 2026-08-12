import './Blog.css';

const posts = [
  {
    category: 'PRODUCTIVITY',
    date: 'Aug 08, 2026',
    readTime: '5 min read',
    title: 'Build a Workspace That Works for You',
    description:
      'Discover how a focused digital workspace can help you organize ideas, tasks, and goals without the usual clutter.',
  },
  {
    category: 'PROJECTS',
    date: 'Aug 05, 2026',
    readTime: '6 min read',
    title: 'A Better Way to Manage Your Projects',
    description:
      'Learn how breaking projects into clear spaces, milestones, and actionable tasks can make complex work easier to manage.',
  },
  {
    category: 'LEARNING',
    date: 'Aug 02, 2026',
    readTime: '4 min read',
    title: 'Turn Learning Into Visible Progress',
    description:
      'From notes to milestones, explore a simple system for turning scattered learning activities into measurable progress.',
  },
];

const Blog = () => {
  return (
    <section id="blog" className="blog-section">
      <div className="blog-container">
        {/* Heading */}
        <div className="blog-heading">
          <div>
            <span className="blog-eyebrow">FROM THE NOVAHUB JOURNAL</span>

            <h2>
              Ideas to help you
              <br />
              <span>move forward.</span>
            </h2>
          </div>

          <p>
            Practical ideas about productivity, projects, learning, and building
            a better workflow.
          </p>
        </div>

        {/* Articles */}
        <div className="blog-grid">
          {posts.map((post, index) => (
            <article className="blog-card" key={post.title}>
              {/* Visual */}
              <div className={`blog-visual visual-${index + 1}`}>
                <span className="visual-number">0{index + 1}</span>

                <div className="visual-orbit">
                  <span />
                  <span />
                  <span />
                </div>
              </div>

              {/* Content */}
              <div className="blog-card-content">
                <div className="blog-meta">
                  <span className="blog-category">{post.category}</span>

                  <span className="blog-dot">•</span>

                  <span>{post.readTime}</span>
                </div>

                <h3>{post.title}</h3>

                <p>{post.description}</p>

                <div className="blog-card-footer">
                  <span className="blog-date">{post.date}</span>

                  <a
                    href="#"
                    className="blog-link"
                    onClick={(event) => event.preventDefault()}
                  >
                    Read article
                    <span>→</span>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
