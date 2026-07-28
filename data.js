const entries = [
  {
    id: 1,
    type: "journal",
    date: "2026-06-03",
    title: "Starting the notebook",
    preview: "First day of building this site in public",
    tags: ["building", "reflection"],
    pinned: true,
    image:
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&q=80",
    body: `
            <p>Today I started building my engineering notebook styled portfolio website. I'm learning HTML, CSS, and JS from scratch so this is a lot harder than I expected, but I'm getting the hang of it.</p>
            <p>Some things have been tedious to learn (like CSS flexbox), but let's keep going and see how it all turns out. The goal is to build a place where I can document my learning journey.</p>
        `,
  },
  {
    id: 2,
    type: "lab-note",
    date: "2026-06-05",
    title: "Mastering Semantic HTML",
    preview: "Structuring the site for better accessibility",
    tags: ["html", "accessibility"],
    pinned: false,
    body: `
            <div class="lab-section">
                <span class="lab-label">Objective</span>
                <p>Build a solid, accessible layout for the website using proper semantic HTML tags.</p>
            </div>
            <div class="lab-section">
                <span class="lab-label">Process</span>
                <p>Instead of using generic <code>&lt;div&gt;</code> tags everywhere, I researched how to use landmarks like <code>&lt;aside&gt;</code>, <code>&lt;main&gt;</code>, and <code>&lt;nav&gt;</code>. It makes the code much easier to read and improves screen reader compatibility.</p>
            </div>
            <div class="lab-section">
                <span class="lab-label">Result</span>
                <p>The DOM structure is much cleaner now. I also learned about ARIA labels which I'll be adding to buttons without text.</p>
            </div>
        `,
  },
  {
    id: 3,
    type: "journal",
    date: "2026-06-12",
    title: "The CSS Grid vs Flexbox debate",
    preview: "Figuring out when to use which layout system",
    tags: ["css", "layout"],
    pinned: false,
    body: `
            <p>I spent the whole evening trying to figure out if I should use Grid or Flexbox for the main layout. Everyone on Twitter seems to have a different opinion.</p>
            <p>Ultimately, I went with Flexbox for the two-column sidebar layout because it felt simpler for this specific use case, but I can see how Grid would be powerful for a true masonry feed.</p>
        `,
  },
  {
    id: 4,
    type: "lab-note",
    date: "2026-06-20",
    title: "Implementing Search functionality",
    preview: "Building a live search with vanilla JavaScript",
    tags: ["js", "feature"],
    pinned: false,
    body: `
            <div class="lab-section">
                <span class="lab-label">Objective</span>
                <p>Add a real-time search bar that filters entries instantly as the user types.</p>
            </div>
            <div class="lab-section">
                <span class="lab-label">Process</span>
                <p>I added an event listener to the input field and used the <code>.filter()</code> array method to match the search query against the title, preview, and tags of each entry. I also learned about debouncing to prevent the function from firing too many times.</p>
            </div>
            <div class="lab-section">
                <span class="lab-label">Result</span>
                <p>It works perfectly! It's super fast because it's all happening client-side with a small dataset.</p>
            </div>
        `,
  },
  {
    id: 5,
    type: "journal",
    date: "2026-06-28",
    title: "Site launch planning",
    preview: "Getting ready to push to production",
    tags: ["portfolio", "milestone"],
    pinned: false,
    body: `
            <p>The core features are finally working. I've got the sidebar, the journal entries, lab notes, and filtering set up.</p>
            <p>Next steps before I put this on my Twitter: fixing some weird mobile responsive bugs and adding a proper dark mode. Really proud of how this is turning out.</p>
        `,
  },
];

const landing = `
    <div class="landing">
        <h1 class="hero-title">Hey, I'm Diparsan <span class="wave">👋</span></h1>
        <p class="landing-intro">I'm a 16-year-old passionate programmer from Bharatpur, Nepal. I spend most of my time focused on Computer Science & Mathematics, building new things, and learning everyday.</p>
        <p class="landing-nav-hint">
            Browse the <button class="landing-link" data-view="journal">journal</button> for my raw thoughts, 
            or check out my <button class="landing-link" data-view="lab-note">lab notes</button> for my technical journey.
        </p>
    </div>
`;

const status = {
  working: "engineering note",
  mood: "focused",
  updated: "2026-06-28",
};
