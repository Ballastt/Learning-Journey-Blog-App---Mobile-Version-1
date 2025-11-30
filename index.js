import blogPostData from '../blogData.js';

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
}

function toggleLoadMoreButton() {
  if (visibleCount >= blogPostData.length) {
    loadMoreButton.textContent = 'Show Less';
    loadMoreButton.style.display = 'block';
  } else if (visibleCount <= 3) {
    loadMoreButton.textContent = 'View More';
    loadMoreButton.style.display = 'block';
  } else {
    loadMoreButton.textContent = 'View More';
    loadMoreButton.style.display = 'block';
  }
}

function loadMorePosts() {
  const nextPosts = blogPostData.slice(visibleCount, visibleCount + 3);
  visibleCount += 3;
  renderBlogPosts(nextPosts);
  toggleLoadMoreButton();
}

function loadLessPosts() {
  // Remove posts beyond the first 3
  const allPosts = mainElement.querySelectorAll('.grid-item');
  for (let i = 3; i < allPosts.length; i++) {
    allPosts[i].remove();
  }
  visibleCount = 3;
  toggleLoadMoreButton();
}

function handleButtonClick(e) {
  e.preventDefault();
  if (loadMoreButton.textContent === 'Show Less') {
    loadLessPosts();
  } else {
    loadMorePosts();
  }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  const initialPosts = blogPostData.slice(0, 3);
  renderBlogPosts(initialPosts);
  
  loadMoreButton.addEventListener('click', handleButtonClick);
});
