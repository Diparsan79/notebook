const feed = document.getElementById('feed');
const navBtns = document.querySelectorAll('.nav-btn');

const themeToggle = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');



function showLanding() {
  feed.innerHTML = landing;
  feed.classList.remove('grid-bg');

  document.querySelectorAll('.landing-link').forEach(link => {
    link.addEventListener('click', ()=> {
      const view = link.dataset.view;
      setActiveNav(view);
      showFeed(view);
    });
  });
}

function showFeed(filter = 'all') {
  feed.classList.add('grid-bg');
  feed.innerHTML = `
  <div class="filter-bar">
    <button class="filter-btn ${filter ==='all' ? 'active' : ''}" data-filter="all">Home</button>
    <button class="filter-btn ${filter === 'journal' ? 'active' : ''}" data-filter="journal">journal</button>
    <button class="filter-btn ${filter === 'lab-note' ? 'active' : ''}" data-filter="lab-note">lab notes</button>
  </div>
`;

document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    renderEntries(btn.dataset.filter);
  });
});
  renderEntries(filter);
}

function setActiveNav(view) {
  navBtns.forEach(btn => btn.classList.remove('active'));
  document.querySelector(`[data-view="${view}"]`).classList.add('active');
}

function renderEntries(filter= 'all') {
  const existingHeader = feed.querySelector('.feed-header');
  if (existingHeader) existingHeader.remove()
    
  feed.innerHTML = '';

  let filtered = filter === 'all'
    ? entries
    : entries.filter(e => e.type === filter);

  filtered = [
    ...filtered.filter(e => e.pinned),
    ...filtered.filter(e => !e.pinned)
  ];

  

  const filtered = filter === 'all' ? entries : entries.filter(e => e.type === filter);
  
  const label = filter ==='all' ? 'all entries' : filter ==='journal' ? 'journal' : 'lab notes';

  const header = document.createElement('div');
  header.className = 'feed-header';
  feed.innerHTML = `
    <div class="feed-header">
      <h1>${label}</h1>
      <span class="feed-count">${filtered.length} ${filtered.length === 1 ? 'entry' : 'entries'}</span>
    </div>
  `;

  const filterBar = feed.querySelector('.filter-bar');
  if (filterBar) {
    filterBar.insertAdjacentElement('afterend', header);
  } else {
    feed.prepend(header);
  }
  const existingEntries = feed.querySelectorAll('.entry, .empty-state');
  existingEntries.forEach(e => e.remove());

  if (filtered.length === 0) {
    const empty = document.createElement('div');
    empty.className = 'empty-state';
    empty.innerHTML = `
      <p>nothing here yet.</p>
      <span>entries will appear as you add them to data.js</span>
    `;
    feed.appendChild(empty);
    return;
  }
  
  filtered.forEach(entry => {
    const article = document.createElement('article');
    article.className = `entry ${entry.type}${entry.pinned ? 'pinned': ''}`;
    article.dataset.id = entry.id;

    article.innerHTML = `
      <div class="entry-header">
        <span class="entry-type">${entry.type}</span>
        <span class="entry-date" title="${entry.date}">$relativeTime(entry.date)}</span>
        <span class="entry-readtime">${readingtime(entry.body)}</span>
        ${entry.pinned ? '<sp;an class="pin-indicator">pinned</span>' : ''}
        <h2 class="entry-title">${entry.title}</h2>
        <p class="entry-preview">${entry.preview}</p>
        <div class="entry-tags">
          ${entry.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
        </div>
      </div>
      <div class="entry-body">
        ${entry.body}
      </div>
    `;
    
    feed.appendChild(article);

  });
  attachExpandListeners();
  attachTagListeners();
}

function attachExpandListeners() {
  const allEntries = document.querySelectorAll('.entry');

  allEntries.forEach(entry => {
    entry.querySelector('.entry-body').style.display = 'none';

    entry.addEventListener('click', () => {
      const isExpanded = entry.classList.contains('expanded');
    
    entry.setAttribute('tabindex', '0');
    entry.setAttribute('role', 'button');
    entry.setAttribute('aria-expanded', 'false');

    entry.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        entry.click();
      }
    });

      allEntries.forEach(e => {
        e.classList.remove('expanded');
        e.querySelector('.entry-body').style.display = 'none';
        e.setAttribute('aria-expanded', 'false');
      });

      if (!isExpanded) {
        entry.classList.add('expanded');
        entry.querySelector('.entry-body').style.display ='block';
        entry.setAttribute('aria-expanded', 'true');
      }
    });
  });
  attachTagListeners();
}

function attachTagListeners() {
  document.querySelectorAll('.tag').forEach(tag => {
    tag.addEventListener('click', (e) => {
      e.stopPropagation();
      const value = tag.textContent;
      filterByTag(value);
    });
  });
}

function filterByTag(tag) {
  const filtered = entries.filter(e => e.tags.includes(tag));

  const existingEntries = feed.querySelectorAll('.entry, .empty-state, .feed-header');
  existingEntries.forEach(e => e.remove());

  const header = document.createElement('div');
  header.className = 'feed-header';
  header.innerHTML = `
    <h1>tag : ${tag}</h1>
    <span class="feed-count">${filtered.length} ${filtered.length === 1 ? 'entry' : 'entries'}</span>
  `;
  feed.appendChild(header);
}

function readingtime(body) {
  const text = body.replace(/<[^>]*>/g, '');
  const words = text.trim().split(/\s+/).length;
  const mins = Math.ceil(words / 200);
  return `${mins} min read`;
}
navBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const view = btn.dataset.view;
    setActiveNav(view);
    searchInput.value = '';
    searchCount.textContent = '';
    if (view ==='home') {
      showLanding();
    } else {
      showFeed(view);
    }
  });
});

document.getElementById('status-working').textContent = status.working;
const savedTheme = localStorage.getItem('theme') || 'light';
document.documentElement.setAttribute('data-theme', savedTheme);
themeIcon.textContent = savedTheme === 'dark' ? '○' : '◐';

themeToggle.addEventListener('click', () => {
  const current = document.documentElement.getAttribute('data-theme');
  const next = current === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', next);
  localStorage.setItem('theme', next);
  themeIcon.textContent = next === 'dark' ? '○' : '◐';
});
showLanding();

const searchInput = document.getElementById('search-input');
const searchInput = document.getElementById('search-count');

let searchTimeout = null;
let currentView = 'home';

function highlight(text, query) {
  if (!query) return text;
  const escaped = query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const regex = new RegExp(`(${escaped})`, 'gi');
  return text.replace(regex, '<mark class="search-highlight">$1</mark>');
}

function searchEntries(query) {
  const q = query.toLowerCase().trim();

  if (!q) {
    searchCount.textContent = '';
    if (currentView === 'home') {
      showLanding();
    } else {
      renderEntries(currentView === 'all' ? 'all' : currentView);
    }
    return;
  }

  const filtered = entries.filter(e => {
    return (
      e.title.toLowerCase().includes(q) ||
      e.preview.toLowerCase().includes(q) ||
      e.body.toLowerCase().includes(q) ||
      e.tags.some(t => t.toLowerCase().includes(q))
    );
  });

  feed.classList.add('grid-bg');
  feed.innerHTML = '';

  const header = document.createElement('div');
  header.className = 'feed-header';
  header.innerHTML = `
    <h1>Search: ${query}</h1>
    <span class="feed-count">${filtered.length} ${filtered.length === 1 ? 'result' : 'results'}</span>
  `;
  feed.appendChild(header);

  searchCount.textContent = `${filtered.length} found`;
  
  if (filtered.length === 0) {
    const empty = document.createElement('div');
    empty.className = `empty-state`;
    empty.innerHTML = `
      <p>no results for "${query}"</p>
      <span>try different keywords or check your tags</span>
    `;
    feed.appendChild(empty);
    return;
  }

  filtered.forEach(entry => {
    const article = document.createElement('article');
    article.className = `entry ${entry.type}`;
    article.dataset.id = entry.id;

    article.innerHTML = `
    <div class="entry-header">
      <span class="entry-type">${entry.date}</span>
      <span class="entry-date">${entry.date}</span>
      <span class="entry-readtime">${readingtime(entry.body)}</span>
      <h2 class="entry-title">${highlight(entry.title, query)}</h2>
      <p class="entry-preview">${highlight(entry.preview, query)}</p>
      <div class="entry-tags">
        ${entry.tags.map(t => `<span class="tag">${highlight(t, query)}</span>`).join('')}
      </div>
    </div>
    <div class="entry-body">
      ${entry.body}
    </div>
  `;
    
  
  feed.appendChild(article);

  });

  attachExpandListeners();
  attachTagListeners();
}

searchInput.addEventListener('keydown', (e) => {
  if (e.key ==='Escape') {
    searchInput.value = '';
    searchCount.textContent = '';
    if (currentView === 'home') showLanding();
    else renderEntries(currentView);
  }
});

// relative time

function relativeTime(dateStr) {
  const date = new Date(dateStr);
  const now = new Date();
  const diff = Math.floor((now-date) / 1000);

  if (diff < 60)        return'just now';
  if (diff < 3600)      return `${Math.floor(diff / 60)}m ago`;
  if (diff <86400)      return `${Math.floor(diff / 3600)}h ago`;
  if (diff < 2592000)   return `${Math.floor(diff / 86400)}d ago`;
  if (diff < 32536000)  return `${Math.floor(diff / 2592000)}mo ago`;
  return `${Math.floor(diff / 31536000)}y ago`;
}