import fm from 'front-matter';

// Dynamically import all markdown files in the blogs directory (Vite)
const markdownFiles = import.meta.glob('../blogs/*.md', { as: 'raw', eager: true });

const blogs = Object.entries(markdownFiles).map(([path, rawContent]) => {
  const slug = path.split('/').pop().replace('.md', '');
  const { attributes, body } = fm(rawContent);
  return { ...attributes, content: body, slug };
});

// Sort by date descending
blogs.sort((a, b) => new Date(b.date) - new Date(a.date));

export default blogs;
