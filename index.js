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
    },
    { 
      id: 4,
      image: '/images/article-04.png',
      date: 'NOVEMBER 29, 2025',
      title: 'Blog four',
      summary: "I'm excited to start a new learning journey as a Scrimba Bootcamp student! After several months of learning in the Frontend Developer Career Path."
    },
    { 
      id: 5,
      image: '/images/article-05.png',
      date: 'NOVEMBER 29, 2025',
      title: 'Blog five',
      summary: "I'm excited to start a new learning journey as a Scrimba Bootcamp student! After several months of learning in the Frontend Developer Career Path."
    },
    { 
      id: 6,
      image: '/images/article-06.png',
      date: 'NOVEMBER 29, 2025',
      title: 'Blog six',
      summary: "I'm excited to start a new learning journey as a Scrimba Bootcamp student! After several months of learning in the Frontend Developer Career Path."
    }
];

let visibleCount = 3;
const mainElement = document.querySelector('main');
const loadMoreButton = document.querySelector('.load-more-button');

function renderBlogPosts(posts) {
  posts.forEach(post => {
    const article = document.createElement('section');
    article.className = 'grid-item';
    
    article.innerHTML = `
      <img src="${post.image}" alt="Blog post image" />
      <date>${post.date}</date>
      <h2>${post.title}</h2>
      <p>${post.summary}</p>
    `;
    
    mainElement.appendChild(article);
  });
  
  // Hide button if all posts are displayed
  if (visibleCount >= blogPostData.length) {
    loadMoreButton.style.display = 'none';
  }
}

function loadMorePosts() {
  const nextPosts = blogPostData.slice(visibleCount, visibleCount + 3);
  visibleCount += 3;
  renderBlogPosts(nextPosts);
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  const initialPosts = blogPostData.slice(0, 3);
  renderBlogPosts(initialPosts);
  
  loadMoreButton.addEventListener('click', (e) => {
    e.preventDefault();
    loadMorePosts();
  });
});
