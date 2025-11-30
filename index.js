const blogPostData = [
    { 
      id: 1,
      image: '/images/article-03.png',
      date: 'NOVEMBER 29, 2025',
      title: 'Blog one',
      summary: "I'm excited to start a new learning journey as a Scrimba Bootcamp student! After several months of learning in the Frontend Developer Career Path."
    },
    { 
      id: 2,
      image: '/images/article-02.png',
      date: 'NOVEMBER 29, 2025',
      title: 'Blog two',
      summary: "I'm excited to start a new learning journey as a Scrimba Bootcamp student! After several months of learning in the Frontend Developer Career Path."
    },
    { 
      id: 3,
      image: '/images/article-01.png',
      date: 'NOVEMBER 29, 2025',
      title: 'Blog three',
      summary: "I'm excited to start a new learning journey as a Scrimba Bootcamp student! After several months of learning in the Frontend Developer Career Path."
    }
];

function renderBlogPosts() {
  const mainElement = document.querySelector('main');
  const loadMoreButton = mainElement.querySelector('.load-more-button');
  
  // Render blog posts from data
  blogPostData.forEach(post => {
    const article = document.createElement('section');
    article.className = 'grid-item';
    
    article.innerHTML = `
      <img src="${post.image}" alt="Blog post image" />
      <date>${post.date}</date>
      <h2>${post.title}</h2>
      <p>${post.summary}</p>
    `;
    
    mainElement.insertBefore(article, loadMoreButton);
  });
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', renderBlogPosts);
