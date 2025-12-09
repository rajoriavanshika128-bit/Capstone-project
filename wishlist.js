
let wishlist = JSON.parse(localStorage.getItem('codequest-wishlist')) || [];


function updateWishlistCount() {
  const countElement = document.getElementById('wishlist-count');
  if (countElement) {
    countElement.textContent = wishlist.length;
  }
}


function displayWishlist() {
  const wishlistContainer = document.getElementById('wishlist-items');
  const emptyState = document.getElementById('empty-wishlist');

  if (wishlist.length === 0) {
    wishlistContainer.style.display = 'none';
    emptyState.classList.add('show');
  } else {
    wishlistContainer.style.display = 'grid';
    emptyState.classList.remove('show');

    wishlistContainer.innerHTML = wishlist.map(course => `
      <div class="wishlist-item" data-course-id="${course.id}">
        <img src="${course.image}" alt="${course.title}" class="wishlist-item-image">
        <div class="wishlist-item-content">
          <h3>${course.title}</h3>
          <p class="course-meta">${course.meta}</p>
          <p>${course.description}</p>
          <div class="course-info">
            <span class="info-badge"> ${course.duration}</span>
            <span class="info-badge"> ${course.level}</span>
            <span class="info-badge"> ${course.checkpoints} Checkpoints</span>
          </div>
          <div class="wishlist-item-actions">
            <button class="btn-remove" onclick="removeFromWishlist('${course.id}')">
              Remove from Wishlist
            </button>
          </div>
        </div>
      </div>
    `).join('');
  }
}

function removeFromWishlist(courseId) {
  
  const index = wishlist.findIndex(item => item.id === courseId);
  if (index !== -1) {
    wishlist.splice(index, 1);
    localStorage.setItem('codequest-wishlist', JSON.stringify(wishlist));
    
    
    const itemElement = document.querySelector(`[data-course-id="${courseId}"]`);
    if (itemElement) {
      itemElement.style.animation = 'slideOut 0.3s ease-out';
      setTimeout(() => {
        displayWishlist();
        updateWishlistCount();
        showGameAlert(' Removed from wishlist', 'info');
      }, 300);
    }
  }
}


function showGameAlert(message, type = 'success') {
  const existingAlert = document.querySelector('.game-alert');
  if (existingAlert) {
    existingAlert.remove();
  }

  const alert = document.createElement('div');
  alert.className = `game-alert ${type}`;
  alert.innerHTML = `
    <div class="game-alert-content">
      <div class="game-alert-icon">${type === 'success' }</div>
      <div class="game-alert-message">${message}</div>
    </div>
  `;

  document.body.appendChild(alert);

  setTimeout(() => {
    alert.classList.add('show');
  }, 10);

  setTimeout(() => {
    alert.classList.remove('show');
    setTimeout(() => {
      alert.remove();
    }, 300);
  }, 3000);
}


document.addEventListener('DOMContentLoaded', function() {
  updateWishlistCount();
  displayWishlist();
});
