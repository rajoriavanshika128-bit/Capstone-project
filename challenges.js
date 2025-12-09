
const challengesData = {
  'mission-1': {
    id: 'mission-1',
    title: 'Ghost Protocol',
    description: 'Clone a stealth landing page with layered neon glows, tactical typography, and shifting gradients. Master the art of creating mysterious and engaging interfaces.',
    fullDescription: 'In this stealth-themed challenge, you\'ll create a mysterious landing page featuring advanced CSS techniques. Implement layered neon glows using box-shadows, create tactical typography with custom fonts, and design shifting gradients that respond to user interaction. Perfect for learning advanced visual effects!',
    difficulty: 'Recruit',
    score: 250,
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80',
    timeLimit: '45 min',
    skills: ['CSS Gradients', 'Box Shadows', 'Typography', 'Neon Effects']
  },
  'mission-2': {
    id: 'mission-2',
    title: 'Spike Plant',
    description: 'Design a countdown HUD using pure CSS animation loops, glowing borders, and mission timers. Create tension and urgency through visual design.',
    fullDescription: 'Build an intense countdown timer interface inspired by tactical shooters. Master CSS animations with keyframes, create pulsing glowing borders, and design a heads-up display (HUD) that conveys urgency. Learn to create tension through visual design and animation timing!',
    difficulty: 'Agent',
    score: 500,
    image: 'https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=800&q=80',
    timeLimit: '60 min',
    skills: ['CSS Animations', 'Keyframes', 'Timing Functions', 'Glowing Effects']
  },
  'mission-3': {
    id: 'mission-3',
    title: 'Radiant Relics',
    description: 'Assemble an artifact showcase grid with hover reveals, holographic overlays, and responsive scaling. Showcase items with style and interactivity.',
    fullDescription: 'Create a stunning artifact gallery using CSS Grid. Implement hover-triggered reveals, holographic overlay effects, and responsive scaling animations. Learn advanced grid techniques, transform properties, and create interactive showcases that wow your users!',
    difficulty: 'Agent',
    score: 600,
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80',
    timeLimit: '75 min',
    skills: ['CSS Grid', 'Hover Effects', 'Transforms', 'Responsive Design']
  },
  'mission-4': {
    id: 'mission-4',
    title: 'Heist Run',
    description: 'Create a multi-section story layout that scrolls like a cinematic briefing with parallax-inspired layering. Tell stories through layout and design.',
    fullDescription: 'Design a cinematic storytelling experience with multi-section layouts. Implement parallax-inspired effects, create smooth scroll transitions, and build layered compositions that guide users through a narrative. Master the art of visual storytelling through web design!',
    difficulty: 'Vanguard',
    score: 850,
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80',
    timeLimit: '90 min',
    skills: ['Parallax Effects', 'Scroll Animations', 'Layering', 'Storytelling']
  },
  'mission-5': {
    id: 'mission-5',
    title: 'Valorant Nexus',
    description: 'Construct a dashboard with live-style badges, mission logs, and animated progress trackers. Build functional and beautiful data displays.',
    fullDescription: 'Build a comprehensive dashboard interface with real-time style elements. Create animated progress bars, design badge systems, implement mission log layouts, and craft data visualizations. Perfect for learning how to present complex information beautifully!',
    difficulty: 'Vanguard',
    score: 1000,
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
    timeLimit: '120 min',
    skills: ['Dashboard Design', 'Data Visualization', 'Progress Bars', 'Badge Systems']
  },
  'mission-6': {
    id: 'mission-6',
    title: 'Final Strike',
    description: 'Forge an endgame boss fight page combining grid tactics, flex squads, and kinetic CTA reveals. Create the ultimate challenge experience.',
    fullDescription: 'The ultimate challenge! Combine everything you\'ve learned to create an epic boss fight landing page. Use CSS Grid for complex layouts, Flexbox for component arrangement, and advanced animations for kinetic call-to-action reveals. This is your final test!',
    difficulty: 'Radiant',
    score: 1500,
    image: 'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?auto=format&fit=crop&w=800&q=80',
    timeLimit: '150 min',
    skills: ['Advanced Grid', 'Flexbox', 'Complex Animations', 'Full Integration']
  }
};


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


function displayChallengeDetails(challengeId) {
  const challenge = challengesData[challengeId];
  if (!challenge) return;


  let detailsSection = document.getElementById('challenge-details-section');
  if (!detailsSection) {
    detailsSection = document.createElement('section');
    detailsSection.id = 'challenge-details-section';
    detailsSection.className = 'challenge-details-section';
    

    const challengeSelect = document.querySelector('.challenge-select');
    if (challengeSelect) {
      challengeSelect.parentNode.insertBefore(detailsSection, challengeSelect.nextSibling);
    }
  }


  const difficultyColors = {
    'Recruit': '#4ade80',
    'Agent': '#60a5fa',
    'Vanguard': '#a78bfa',
    'Radiant': '#fbbf24'
  };

  const difficultyColor = difficultyColors[challenge.difficulty] || '#ff4655';


  detailsSection.innerHTML = `
    <div class="challenge-details-container">
      <button class="close-details" onclick="closeChallengeDetails()">✕</button>
      <div class="challenge-details-grid">
        <div class="challenge-details-image">
          <img src="${challenge.image}" alt="${challenge.title}">
          <div class="challenge-difficulty-badge" style="background: ${difficultyColor}">
            ${challenge.difficulty}
          </div>
        </div>
        <div class="challenge-details-content">
          <h2 class="challenge-details-title">${challenge.title}</h2>
          <div class="challenge-stats">
            <div class="stat-item">
              <span class="stat-icon"></span>
              <span class="stat-label">Score</span>
              <span class="stat-value">${challenge.score} XP</span>
            </div>
            <div class="stat-item">
              <span class="stat-icon"></span>
              <span class="stat-label">Time Limit</span>
              <span class="stat-value">${challenge.timeLimit}</span>
            </div>
            <div class="stat-item">
              <span class="stat-icon"></span>
              <span class="stat-label">Difficulty</span>
              <span class="stat-value">${challenge.difficulty}</span>
            </div>
          </div>
          <p class="challenge-details-description">${challenge.fullDescription}</p>
          <div class="challenge-skills">
            <h3>Skills You'll Master:</h3>
            <div class="skills-list">
              ${challenge.skills.map(skill => `<span class="skill-tag">${skill}</span>`).join('')}
            </div>
          </div>
          <div class="challenge-details-actions">
            <button class="btn-play-now" onclick="startChallenge('${challenge.id}')">
              <span class="btn-icon"></span>
              PLAY NOW
            </button>
            <div class="score-display">
              <span class="score-icon"></span>
              <span class="score-text">Earn ${challenge.score} XP</span>
            </div>
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


function closeChallengeDetails() {
  const detailsSection = document.getElementById('challenge-details-section');
  if (detailsSection) {
    detailsSection.classList.remove('show');
    setTimeout(() => {
      detailsSection.style.display = 'none';
    }, 300);
  }
}


function startChallenge(challengeId) {
  const challenge = challengesData[challengeId];
  if (!challenge) return;

  showGameAlert(' GAME STARTED!', 'game');

  setTimeout(() => {
    showGameAlert(` ${challenge.title} - Good luck, Agent!`, 'game');
  }, 1500);
}


function initializeChallengeCards() {
  const challengeCards = document.querySelectorAll('.challenge-card');
  
  challengeCards.forEach(card => {
    card.addEventListener('click', function(e) {
      
      const radioInput = this.parentElement.querySelector('input[type="radio"]');
      if (radioInput) {
        const challengeId = radioInput.id;
        displayChallengeDetails(challengeId);
      }
    });
  });
}

function initializePlayButton() {
  const playButton = document.querySelector('.play-all-btn');
  if (playButton) {
    playButton.addEventListener('click', function(e) {
      e.preventDefault();
      
      
      const selectedRadio = document.querySelector('input[name="mission"]:checked');
      if (selectedRadio) {
        const challengeId = selectedRadio.id;
        startChallenge(challengeId);
      }
    });
  }
}


function updateWishlistCount() {
  const wishlist = JSON.parse(localStorage.getItem('codequest-wishlist')) || [];
  const countElement = document.getElementById('wishlist-count');
  if (countElement) {
    countElement.textContent = wishlist.length;
  }
}


document.addEventListener('DOMContentLoaded', function() {
  updateWishlistCount();
  

  if (document.querySelector('.challenge-select')) {
    initializeChallengeCards();
    initializePlayButton();
  }
});
