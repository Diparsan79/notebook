const entries = [
    {
        id: 1,
        type: "journal",
        date: "2026-06-03",
        title: "Why I Build",
        preview:
            "Building things has become the fastest way I learn, break and improve",
        tags: ["philosophy", "mindset", "engineering"],
        pinned: true,
        body: `
            <p>I used to spend hours watching tutorials, convincing myself I was making progress while I was js fooling my brain. But eventually , I realized real learning only happenned when I started building things myself.</p>
            <p>.This is a start of something new I've been trying. This is my engineering notebook where I track my journals and research and findings.  A place to document my learnings, researches and findings. Here I document my projects, experiments, lessons, failures and random ideas that keep me awake at night. Building in public is hard, but essential. Homefully, years from now, I'll look back and see just how far I've come.</p>
        `,
    },
    {
        id: 2,
        type: "lab-note",
        date: "2026-06-05",
        title: "Building my First RAG Assistant",
        preview:
            "Understanding retrieval, embeddings, and LLMs by building them from scratch.",
        tags: ["AI", "RAG"],
        pinned: false,
        body: `
            <div class="lab-section">
                <span class="lab-label">Objective</span>
                <p>Build an AI assistant capable of answering questions from custom documents instead of relying solely on the model's knowledge.</p>
            </div>
            <div class="lab-section">
                <span class="lab-label">Process</span>
                <p>I used LangChain, ChromaDB, Hugging Face embeddings, and Groq to create a retrieval pipeline. Most of the work wasn't code, It was improving document chunking, retrieval quality, and prompt design.</p>
                <p>At first , the improper prompts weren't being answered properly but I then had to make a prompt-writing guide for it and then finally it worked.</p>
            </div>
            <div class="lab-section">
                <span class="lab-label">Result</span>
                <p>The assistant now provides grounded answers from uploaded documents. More importantly, I finally understand how RAG systems actually workk!!</p>
            </div>
        `,
    },
    {
        id: 3,
        type: "journal",
        date: "2026-06-12",
        title: "Coding Feels Better When Something Moves IRL",
        preview:
            "Why embedded systems and robotics fascinate me aswell as everybody more than software-sided projects",
        tags: ["robotics", "embedded", "systems"],
        pinned: false,
        body: `
            <p>There's something incredibly satisfying about watching code interact with hardware. An led blinking, a motor spinning, or a sensor responding somehow feels more rewarding than another general boring & bland terminal output.</p>
            <p>That's why once in a while I keep coming back to small robotics projects to keep that spark of my childhood alive. Long term, I want to build intelligent systems that don't just generate text but they sense , think and act.</p>
        `,
    },
    {
        id: 4,
        type: "lab-note",
        date: "2026-07-31",
        title: "Designing a Study Tracker That I'll Actually Use",
        preview:
            "Building the study tracker I always wished existed instead of settling for random-ahh existing apps.",
        tags: ["viable", "web-dev", "FASTAPI"],
        pinned: true,
        body: `
            <div class="lab-section">
                <span class="lab-label">Objective</span>
                <p>Create a study tracker focused on meaningful progress rather than simply logging hours. I wanted something minimal, motivating, and that is catered around how I actually study.</p>
            </div>
            <div class="lab-section">
                <span class="lab-label">Process</span>
                <p>I spent more time thinking & planning the user-experience than writing code. Instead of copying popular productivity apps, I questioned what metrics genuinely make a difference in daily life : consistency, subjects covered, focused sessions, and long term progress.</p>
                <p>Every feature had to answer these questions: "Would I personally use this every day?" "Would it help me calibrate my study methods and decisions more carefully?"</p>
            </div>
            <div class="lab-section">
                <span class="lab-label">Result</span>
                <p>The project is still in works. Its still continuously evolving among multiple ideas, but its so crazy how its already changing how I think about product design.</p>
            </div>
        `,
    },
    {
        id: 5,
        type: "lab-note",
        date: "2025-07-09",
        title: "Building CivicPulse",
        preview:
            "Creating a secure digital governmental platform for a hackathon taught me far more than just writing code.",
        tags: ["hackathon", "CivicPulse"],
        pinned: false,
        body: `
            <div class="lab-section">
                <span class="lab-label">Objective</span>
                <p>Develop a digital governmental platform where users post their local day-to-day issues and local government bodies can attend the issue fastly and more conveniently</p>
            </div>
            <div class="lab-section">
                <span class="lab-label">Process</span>
                <p>Working with a team meant balancing ideas, and technical challenges. We used PHP, JavaScript, HTML, CSS, and SQL to build the system while constantly refining both functionality and usability. Building software with other people turned out to be just as challenging as writing the code itself.</p>
            </div>
            <div class="lab-section">
                <span class="lab-label">Result</span>
                <p>CivicPulse wasn't just another project. It was an introduction to collaborative software engineering. It showed us that communication, planning, and iteration are just as important as technical ability. And finally it was somewhere where my 1h git crash-course came in handy.</p>
            </span>`
    },


];

const landing = `
    <div class="landing">
        <div class="landing-hero">
            <h1 class="hero-title">Diparsan Pathak</h1>
            <p class="hero-subtitle">I'm a high school student from Nepal passionate about machine learning, embedded systems, and open-source software. I'm currently building projects at the intersection of AI and hardware while preparing for university.</p>
            <div class="hero-buttons">
                <a href="https://github.com/Diparsan79?tab=repositories" target="_blank" rel="noopener" class="hero-btn">View Projects</a>
                <a href="https://github.com/Diparsan79" target="_blank" rel="noopener" class="hero-btn">GitHub</a>
            </div>
        </div>

        <div class="landing-section">
            <h2>Stats</h2>
            <div class="stats-row">
                <div class="stat-item">
                    <span class="stat-number">15+</span>
                    <span class="stat-label">Projects</span>
                </div>
                <div class="stat-item">
                    <span class="stat-number">3</span>
                    <span class="stat-label">Hackathons</span>
                </div>
                <div class="stat-item">
                    <span class="stat-number">2</span>
                    <span class="stat-label">National Awards</span>
                </div>
            </div>
        </div>

        <div class="landing-section">
            <h2>Skills</h2>
            <div class="skills-grid">
                <div class="skill-category">
                    <h3>Programming</h3>
                    <div class="skill-pills">
                        <span class="skill-pill">Python</span>
                        <span class="skill-pill">C</span>
                        <span class="skill-pill">JavaScript</span>
                        <span class="skill-pill">SQL</span>
                    </div>
                </div>
                <div class="skill-category">
                    <h3>Frameworks</h3>
                    <div class="skill-pills">
                        <span class="skill-pill">FastAPI</span>
                        <span class="skill-pill">Flask</span>
                        <span class="skill-pill">Streamlit</span>
                    </div>
                </div>
                <div class="skill-category">
                    <h3>AI</h3>
                    <div class="skill-pills">
                        <span class="skill-pill">LangChain</span>
                        <span class="skill-pill">ChromaDB</span>
                        <span class="skill-pill">Hugging Face</span>
                        <span class="skill-pill">PyTorch</span>
                    </div>
                </div>
                <div class="skill-category">
                    <h3>Hardware</h3>
                    <div class="skill-pills">
                        <span class="skill-pill">Arduino</span>
                        <span class="skill-pill">ESP32</span>
                        <span class="skill-pill">Sensors</span>
                        <span class="skill-pill">PCB basics</span>
                    </div>
                </div>
                <div class="skill-category">
                    <h3>Tools</h3>
                    <div class="skill-pills">
                        <span class="skill-pill">Git</span>
                        <span class="skill-pill">Linux</span>
                        <span class="skill-pill">Docker</span>
                        <span class="skill-pill">VS Code</span>
                    </div>
                </div>
            </div>
        </div>

        <div class="landing-section">
            <h2>GitHub</h2>
            <div class="github-card">
                <div class="github-stats-grid">
                    <div class="github-stat">
                        <span class="github-stat-value" id="gh-repos">--</span>
                        <span class="github-stat-label">Public Repos</span>
                    </div>
                    <div class="github-stat">
                        <span class="github-stat-value" id="gh-stars">--</span>
                        <span class="github-stat-label">Stars Earned</span>
                    </div>
                    <div class="github-stat">
                        <span class="github-stat-value" id="gh-forks">--</span>
                        <span class="github-stat-label">Forks</span>
                    </div>
                    <div class="github-stat">
                        <span class="github-stat-value">3</span>
                        <span class="github-stat-label">OS Contributions</span>
                    </div>
                    <div class="github-stat">
                        <span class="github-stat-value">1</span>
                        <span class="github-stat-label">Published Package</span>
                    </div>
                </div>
                <div class="github-footer">
                    <span>@Diparsan79</span>
                    <span id="gh-last-commit">Fetching latest activity...</span>
                </div>
            </div>
        </div>

        <div class="landing-section">
            <h2>Contact</h2>
            <div class="contact-links">
                <a href="mailto:diparsanpathak0@gmail.com" class="contact-link">Email</a>
                <a href="https://github.com/Diparsan79" target="_blank" rel="noopener" class="contact-link">GitHub</a>
                <a href="https://www.linkedin.com/in/diparsan-pathak/" target="_blank" rel="noopener" class="contact-link">LinkedIn</a>
                <span class="contact-link" style="border: none; cursor: default; color: var(--color-muted)">Location: Nepal</span>
            </div>
        </div>
    </div>
`;
