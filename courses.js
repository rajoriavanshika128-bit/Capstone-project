
const coursesData = {
  course1: {
    id: 'course1',
    title: 'Mission 01 · Foundations',
    meta: 'HTML CORE · 6 CHECKPOINTS',
    description: 'Gear up with semantic structure, accessible markup, and expert tag mastery to ground your future missions.',
    fullDescription: 'Master the fundamentals of HTML with this comprehensive course. Learn semantic HTML5 elements, accessibility best practices, form creation, and document structure. Perfect for beginners starting their web development journey!',
    image: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&w=800&q=80',
    duration: '4 weeks',
    level: 'Beginner',
    checkpoints: 6
  },
  course2: {
    id: 'course2',
    title: 'Mission 02 · Neon Interfaces',
    meta: 'CSS STYLING · 8 CHECKPOINTS',
    description: 'Harness the power of custom properties, futuristic palettes, and Valorant-inspired UI holographics.',
    fullDescription: 'Dive into advanced CSS styling techniques. Create stunning visual effects with gradients, shadows, and animations. Learn CSS custom properties, modern color systems, and create eye-catching neon effects that bring your designs to life!',
    image: 'https://images.unsplash.com/photo-1523437113738-bbd3cc89fb19?auto=format&fit=crop&w=800&q=80',
    duration: '5 weeks',
    level: 'Intermediate',
    checkpoints: 8
  },
  course3: {
    id: 'course3',
    title: 'Mission 03 · Flexfield Ops',
    meta: 'LAYOUT OPS · 5 CHECKPOINTS',
    description: 'Create responsive formations using Flexbox tactics to adapt squads of components to every screen size.',
    fullDescription: 'Master Flexbox layout system to create responsive, flexible designs. Learn flex containers, flex items, alignment, distribution, and responsive design patterns. Build layouts that adapt beautifully to any screen size!',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80',
    duration: '3 weeks',
    level: 'Intermediate',
    checkpoints: 5
  },
  course4: {
    id: 'course4',
    title: 'Mission 04 · Grid Command',
    meta: 'ADVANCED GRID · 7 CHECKPOINTS',
    description: 'Design multi-tier layouts that balance hero areas, side quests, and battle telemetry like a pro tactician.',
    fullDescription: 'Unlock the power of CSS Grid for complex, professional layouts. Learn grid templates, areas, auto-placement, and responsive grid patterns. Create sophisticated multi-column designs with precision and ease!',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80',
    duration: '4 weeks',
    level: 'Advanced',
    checkpoints: 7
  },
  course5: {
    id: 'course5',
    title: 'Mission 05 · Motion Lab',
    meta: 'ANIMATION RUN · 6 CHECKPOINTS',
    description: 'Unleash keyframes, hover effects, and hover-triggered flares to make every component feel alive.',
    fullDescription: 'Bring your websites to life with CSS animations and transitions. Master keyframe animations, timing functions, transforms, and interactive hover effects. Create engaging, dynamic user experiences that captivate your audience!',
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&q=80',
    duration: '4 weeks',
    level: 'Advanced',
    checkpoints: 6
  },
  course6: {
    id: 'course6',
    title: 'Mission 06 · Final Raid',
    meta: 'BATTLE PROJECT · 1 BOSS FIGHT',
    description: 'Assemble everything you\'ve learned into a polished, game-inspired web experience worthy of the leaderboard.',
    fullDescription: 'Put all your skills to the test in this capstone project. Build a complete, game-inspired website from scratch using HTML, CSS, animations, and responsive design. Showcase your mastery and create a portfolio-worthy project!',
    image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=800&q=80',
    duration: '6 weeks',
    level: 'Expert',
    checkpoints: 1
  },
  course1b: {
    id: 'course1b',
    title: 'Mission 01 · Foundations',
    meta: 'HTML CORE · 6 CHECKPOINTS',
    description: 'Gear up with semantic structure, accessible markup, and expert tag mastery to ground your future missions.',
    fullDescription: 'Master the fundamentals of HTML with this comprehensive course. Learn semantic HTML5 elements, accessibility best practices, form creation, and document structure. Perfect for beginners starting their web development journey!',
    image: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&w=800&q=80',
    duration: '4 weeks',
    level: 'Beginner',
    checkpoints: 6
  },
  course2b: {
    id: 'course2b',
    title: 'Mission 02 · Neon Interfaces',
    meta: 'CSS STYLING · 8 CHECKPOINTS',
    description: 'Harness the power of custom properties, futuristic palettes, and Valorant-inspired UI holographics.',
    fullDescription: 'Dive into advanced CSS styling techniques. Create stunning visual effects with gradients, shadows, and animations. Learn CSS custom properties, modern color systems, and create eye-catching neon effects that bring your designs to life!',
    image: 'https://images.unsplash.com/photo-1523437113738-bbd3cc89fb19?auto=format&fit=crop&w=800&q=80',
    duration: '5 weeks',
    level: 'Intermediate',
    checkpoints: 8
  }
};


let wishlist = JSON.parse(localStorage.getItem('codequest-wishlist')) || [];


function updateWishlistCount() {
  const countElement = document.getElementById('wishlist-count');
  if (countElement) {
    countElement.textContent = wishlist.length;
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

function addToWishlist(courseId) {
  const course = coursesData[courseId];
  if (!course) return;


  const existingIndex = wishlist.findIndex(item => item.id === courseId);
  if (existingIndex !== -1) {
    showGameAlert(' Course already in wishlist!', 'info');
    return;
  }


  wishlist.push(course);
  localStorage.setItem('codequest-wishlist', JSON.stringify(wishlist));
  updateWishlistCount();
  
  showGameAlert('ADDED TO WISHLIST!', 'success');
}


function displayCourseDetails(courseId) {
  const course = coursesData[courseId];
  if (!course) return;


  let detailsSection = document.getElementById('course-details-section');
  if (!detailsSection) {
    detailsSection = document.createElement('section');
    detailsSection.id = 'course-details-section';
    detailsSection.className = 'course-details-section';
    
    
    const courseMarquee = document.querySelector('.course-marquee');
    if (courseMarquee) {
      courseMarquee.parentNode.insertBefore(detailsSection, courseMarquee.nextSibling);
    }
  }

  
  detailsSection.innerHTML = `
    <div class="course-details-container">
      <button class="close-details" onclick="closeCourseDetails()">✕</button>
      <div class="course-details-grid">
        <div class="course-details-image">
          <img src="${course.image}" alt="${course.title}">
          <div class="course-level-badge">${course.level}</div>
        </div>
        <div class="course-details-content">
          <h2 class="course-details-title">${course.title}</h2>
          <p class="course-details-meta">${course.meta}</p>
          <div class="course-stats">
            <div class="stat-item">
              <span class="stat-icon"></span>
              <span class="stat-value">${course.duration}</span>
            </div>
            <div class="stat-item">
              <span class="stat-icon"></span>
              <span class="stat-value">${course.checkpoints} Checkpoints</span>
            </div>
            <div class="stat-item">
              <span class="stat-icon"></span>
              <span class="stat-value">${course.level}</span>
            </div>
          </div>
          <p class="course-details-description">${course.fullDescription}</p>
          <div class="course-details-actions">
            <button class="btn-wishlist" onclick="addToWishlist('${course.id}')">
              <span class="btn-icon"></span>
              Add to Wishlist
            </button>
            <button class="btn-start-course">
              <span class="btn-icon"></span>
              Start Course
            </button>
          </div>
        </div>
      </div>
    </div>
  `;


  detailsSection.style.display = 'block';
  setTimeout(() => {
    detailsSection.classList.add('show');
  }, 10);

  
  detailsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
}


function closeCourseDetails() {
  const detailsSection = document.getElementById('course-details-section');
  if (detailsSection) {
    detailsSection.classList.remove('show');
    setTimeout(() => {
      detailsSection.style.display = 'none';
    }, 300);
  }
}


function initializeCourseCards() {
  const courseCards = document.querySelectorAll('.course-card');
  
  courseCards.forEach(card => {
    const courseLink = card.querySelector('.course-link');
    if (courseLink) {
      courseLink.addEventListener('click', function(e) {
        e.preventDefault();
        const courseId = card.id;
        displayCourseDetails(courseId);
      });
    }
  });
}

document.addEventListener('DOMContentLoaded', function() {
  updateWishlistCount();
  
 
  if (document.querySelector('.course-marquee')) {
    initializeCourseCards();
  }
});
