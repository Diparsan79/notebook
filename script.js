const feed = document.getElementById("feed");
const navBtns = document.querySelectorAll(".nav-btn");

const themeToggle = document.getElementById("theme-toggle");
const themeIcon = document.getElementById("theme-icon");

function typeText(element, text, speed = 50) {
  element.textContent = "";
  let i = 0;
  function typeWriter() {
    if (i < text.length) {
      element.textContent += text.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    }
  }
  typeWriter();
}

function animateValue(obj, start, end, duration, suffix = "") {
  if (!obj) return;
  let startTimestamp = null;
  const step = (timestamp) => {
    if (!startTimestamp) startTimestamp = timestamp;
    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
    obj.innerHTML = Math.floor(progress * (end - start) + start) + suffix;
    if (progress < 1) {
      window.requestAnimationFrame(step);
    }
  };
  window.requestAnimationFrame(step);
}

function showLanding() {
  feed.innerHTML = landing;
  feed.classList.remove("grid-bg");
  const searchWrap = document.querySelector(".search-wrap");
  if (searchWrap) searchWrap.style.display = "none";

  document
    .querySelectorAll(".landing-link, .hero-btn[data-view]")
    .forEach((link) => {
      link.addEventListener("click", () => {
        const view = link.dataset.view;
        setActiveNav(view);
        showFeed(view);
      });
    });

  const staticStats = document.querySelectorAll('.stat-number, .github-stat-value:not([id])');
  staticStats.forEach(stat => {
    const text = stat.textContent;
    const targetMatch = text.match(/\d+/);
    if (targetMatch) {
      const target = parseInt(targetMatch[0]);
      const suffix = text.replace(/[0-9]/g, '');
      animateValue(stat, 0, target, 1000, suffix);
    }
  });

  fetchGitHubStats();
}

function showFeed(filter = "all") {
  currentView = filter;
  feed.classList.add("grid-bg");
  const searchWrap = document.querySelector(".search-wrap");
  if (searchWrap) searchWrap.style.display = "flex";
  renderEntries(filter);
}

function setActiveNav(view) {
  navBtns.forEach((btn) => btn.classList.remove("active"));
  document.querySelector(`[data-view="${view}"]`).classList.add("active");
}

function renderEntries(filter = "all", tag = null) {
  const existingLanding = feed.querySelector(".landing");
  if (existingLanding) existingLanding.remove();

  const existingHeader = feed.querySelector(".feed-header");
  if (existingHeader) existingHeader.remove();

  const existingEntries = feed.querySelectorAll(".entry, .empty-state");
  existingEntries.forEach((e) => e.remove());

  let filtered = entries;
  if (tag) {
    filtered = entries.filter((e) => e.tags.includes(tag));
  } else if (filter !== "all") {
    filtered = entries.filter((e) => e.type === filter);
  }

  filtered = [
    ...filtered.filter((e) => e.pinned),
    ...filtered.filter((e) => !e.pinned),
  ];

  const label = tag
    ? `tag: ${tag}`
    : filter === "all"
      ? "all entries"
      : filter === "journal"
        ? "journal"
        : filter === "lab-note"
          ? "lab notes"
          : filter === "changelog"
            ? "changelog"
            : filter;

  const header = document.createElement("div");
  header.className = "feed-header";
  header.innerHTML = `
    <h1 id="feed-header-title"></h1>
    <span class="feed-count">${filtered.length} ${filtered.length === 1 ? "entry" : "entries"}</span>
  `;

  const filterBar = feed.querySelector(".filter-bar");
  if (filterBar) {
    filterBar.insertAdjacentElement("afterend", header);
  } else {
    feed.prepend(header);
  }

  const h1 = header.querySelector("#feed-header-title");
  typeText(h1, label, 50);

  if (filtered.length === 0) {
    const empty = document.createElement("div");
    empty.className = "empty-state";
    empty.innerHTML = `
      <p>nothing here yet.</p>
      <span>entries will appear as you add them to data.js</span>
    `;
    feed.appendChild(empty);
    return;
  }

  filtered.forEach((entry) => {
    const article = document.createElement("article");
    article.className = `entry ${entry.type}${entry.pinned ? " pinned" : ""}`;
    article.dataset.id = entry.id;

    const words = entry.body
      .replace(/<[^>]*>/g, "")
      .trim()
      .split(/\s+/).length;

    const wordCount = Math.ceil(words / 200);

    article.innerHTML = `
      <div class="entry-header">
        <div class="entry-meta">
          <span class="entry-type">${entry.type}</span>
          <span class="entry-date">${relativeTime(entry.date)}</span>
        </div>
        <h2 class="entry-title">
          ${entry.title}
          <span class="expand-indicator">▼</span>
        </h2>
        <p class="entry-preview">${entry.preview}</p>
        <div class="entry-tags">
          <span class="reading-time">${wordCount} min read</span>
          ${entry.tags.map((tag) => `<button class="tag" data-tag="${tag}">${tag}</button>`).join("")}
        </div>
      </div>
      <div class="entry-body-wrap">
        <div class="entry-body">
          ${entry.image ? `<img src="${entry.image}" alt="" class="entry-image">` : ""}
          ${entry.body}
        </div>
        <div class="entry-footer">
          <span>${words} words</span>
        </div>
      </div>
    `;

    feed.appendChild(article);
  });
  attachExpandListeners();
  attachTagListeners();
}

function attachExpandListeners() {
  document.querySelectorAll(".entry").forEach((entry) => {
    entry.addEventListener("click", (e) => {
      // Don't expand if clicking a tag or link
      if (
        e.target.classList.contains("tag") ||
        e.target.classList.contains("entry-link") ||
        e.target.closest("a")
      ) {
        return;
      }

      const isExpanded = entry.classList.contains("expanded");

      // Close all entries
      document
        .querySelectorAll(".entry")
        .forEach((el) => el.classList.remove("expanded"));

      // Toggle this one
      if (!isExpanded) {
        entry.classList.add("expanded");
        addToRecentlyViewed(parseInt(entry.dataset.id));
      }
    });
  });
}

function attachTagListeners() {
  document.querySelectorAll(".tag").forEach((tag) => {
    tag.addEventListener("click", (e) => {
      e.stopPropagation();
      const value = tag.textContent;
      filterByTag(value);
    });
  });
}

function filterByTag(tag) {
  feed.classList.add("grid-bg");
  const searchWrap = document.querySelector(".search-wrap");
  if (searchWrap) searchWrap.style.display = "flex";

  navBtns.forEach((btn) => btn.classList.remove("active"));

  renderEntries("all", tag);
}

function readingtime(body) {
  const text = body.replace(/<[^>]*>/g, "");
  const words = text.trim().split(/\s+/).length;
  const mins = Math.ceil(words / 200);
  return `${mins} min read`;
}
navBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const view = btn.dataset.view;
    setActiveNav(view);
    searchInput.value = "";
    searchCount.textContent = "";
    if (view === "home") {
      showLanding();
    } else {
      showFeed(view);
    }
  });
});

const savedTheme = localStorage.getItem("theme") || "light";
document.documentElement.setAttribute("data-theme", savedTheme);
themeIcon.textContent = savedTheme === "dark" ? "○" : "◐";

themeToggle.addEventListener("click", () => {
  const current = document.documentElement.getAttribute("data-theme");
  const next = current === "dark" ? "light" : "dark";
  document.documentElement.setAttribute("data-theme", next);
  localStorage.setItem("theme", next);
  themeIcon.textContent = next === "dark" ? "○" : "◐";
});

const searchInput = document.getElementById("search-input");
const searchCount = document.getElementById("search-count");

let searchTimeout = null;
let currentView = "home";

function highlight(text, query) {
  if (!query) return text;
  const escaped = query.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const regex = new RegExp(`(${escaped})`, "gi");
  return text.replace(regex, '<mark class="search-highlight">$1</mark>');
}

function searchEntries(query) {
  const q = query.toLowerCase().trim();

  if (!q) {
    searchCount.textContent = "";
    if (currentView === "home") {
      showLanding();
    } else {
      renderEntries(currentView === "all" ? "all" : currentView);
    }
    return;
  }

  const filtered = entries.filter((e) => {
    return (
      e.title.toLowerCase().includes(q) ||
      e.preview.toLowerCase().includes(q) ||
      e.body.toLowerCase().includes(q) ||
      e.tags.some((t) => t.toLowerCase().includes(q))
    );
  });

  feed.classList.add("grid-bg");
  feed.innerHTML = "";

  const header = document.createElement("div");
  header.className = "feed-header";
  header.innerHTML = `
    <h1>Search: ${query}</h1>
    <span class="feed-count">${filtered.length} ${filtered.length === 1 ? "result" : "results"}</span>
  `;
  feed.appendChild(header);

  searchCount.textContent = `${filtered.length} found`;

  if (filtered.length === 0) {
    const empty = document.createElement("div");
    empty.className = `empty-state`;
    empty.innerHTML = `
      <p>no results for "${query}"</p>
      <span>try different keywords or check your tags</span>
    `;
    feed.appendChild(empty);
    return;
  }

  filtered.forEach((entry) => {
    const article = document.createElement("article");
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
        ${entry.tags.map((t) => `<span class="tag">${highlight(t, query)}</span>`).join("")}
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

searchInput.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    searchInput.value = "";
    searchCount.textContent = "";
    if (currentView === "home") showLanding();
    else renderEntries(currentView);
  }
});

searchInput.addEventListener("input", () => {
  clearTimeout(searchTimeout);
  searchTimeout = setTimeout(() => {
    searchEntries(searchInput.value);
  }, 200);
});

// relative time

function relativeTime(dateStr) {
  const date = new Date(dateStr);
  const now = new Date();
  const diff = Math.floor((now - date) / 1000);

  if (diff < 60) return "just now";
  if (diff < 3600) return `${Math.floor(diff / 60)}m ago`;
  if (diff < 86400) return `${Math.floor(diff / 3600)}h ago`;
  if (diff < 2592000) return `${Math.floor(diff / 86400)}d ago`;
  if (diff < 32536000) return `${Math.floor(diff / 2592000)}mo ago`;
  return `${Math.floor(diff / 31536000)}y ago`;
}

//anchor links

function getEntryById(id) {
  return entries.find((e) => e.id === parseInt(id));
}

function openEntryById(id) {
  const entry = getEntryById(id);
  if (!entry) return;

  currentView = entry.type;
  setActiveNav(entry.type);
  showFeed(entry.type);

  setTimeout(() => {
    const article = document.querySelector(`[data-id="${id}"]`);
    if (!article) return;

    const allEntries = document.querySelectorAll(".entry");
    allEntries.forEach((e) => {
      e.classList.remove("expanded");
    });

    article.classList.add("expanded");
    article.scrollIntoView({ behavior: "smooth", block: "start" });

    window.location.hash = `entry-${id}`;
  }, 50);
}

function handleHashOnLoad() {
  const hash = window.location.hash;
  if (!hash.startsWith("#entry-")) return;
  const id = hash.replace("#entry-", "");
  openEntryById(id);
}

window.addEventListener("hashchange", () => {
  const hash = window.location.hash;
  if (hash.startsWith("#entry-")) {
    const id = hash.replace("#entry-", "");
    openEntryById(id);
  }
});

// back to top
const backToTop = document.getElementById("back-to-top");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTop.classList.add("visible");
  } else {
    backToTop.classList.remove("visible");
  }
});

backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Sidebar Tags
function renderSidebarTags() {
  const container = document.getElementById("sidebar-tags-container");
  if (!container) return;

  // Extract unique tags
  const allTags = new Set();
  entries.forEach((entry) => {
    entry.tags.forEach((tag) => allTags.add(tag));
  });

  const uniqueTags = Array.from(allTags).sort();

  if (uniqueTags.length === 0) {
    container.innerHTML = "<span>No tags yet</span>";
    return;
  }

  container.innerHTML = uniqueTags
    .map((tag) => `<button class="tag" data-tag="${tag}">${tag}</button>`)
    .join("");

  container.querySelectorAll(".tag").forEach((tagBtn) => {
    tagBtn.addEventListener("click", () => {
      filterByTag(tagBtn.dataset.tag);
    });
  });
}

// GitHub API Fetch
async function fetchGitHubStats() {
  try {
    const userRes = await fetch("https://api.github.com/users/Diparsan79");
    if (!userRes.ok) return;
    const userData = await userRes.json();

    const reposRes = await fetch(
      "https://api.github.com/users/Diparsan79/repos?per_page=100",
    );
    if (!reposRes.ok) return;
    const reposData = await reposRes.json();

    let totalStars = 0;
    let totalForks = 0;
    let lastCommitDate = new Date(0);

    reposData.forEach((repo) => {
      totalStars += repo.stargazers_count;
      totalForks += repo.forks_count;
      const pushed = new Date(repo.pushed_at);
      if (pushed > lastCommitDate) lastCommitDate = pushed;
    });

    // Update DOM if on landing page
    const repoEl = document.getElementById("gh-repos");
    const starEl = document.getElementById("gh-stars");
    const forkEl = document.getElementById("gh-forks");
    const commitEl = document.getElementById("gh-last-commit");

    if (repoEl) animateValue(repoEl, 0, userData.public_repos, 1000);
    if (starEl) animateValue(starEl, 0, totalStars, 1000);
    if (forkEl) animateValue(forkEl, 0, totalForks, 1000);

    if (commitEl && lastCommitDate.getTime() > 0) {
      const diffHrs = Math.floor(
        (new Date() - lastCommitDate) / (1000 * 60 * 60),
      );
      const diffDays = Math.floor(diffHrs / 24);

      let timeStr = "";
      if (diffHrs < 1) timeStr = "less than an hour ago";
      else if (diffHrs < 24) timeStr = `${diffHrs} hours ago`;
      else timeStr = `${diffDays} days ago`;

      commitEl.textContent = `Last Commit: ${timeStr}`;
    }
  } catch (error) {
    console.error("Error fetching GitHub stats:", error);
  }
}

handleHashOnLoad();
renderSidebarTags();
showLanding();
