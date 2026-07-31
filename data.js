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
    image:
      "https://images.unsplash.com/photo-1639762681485-074b7f4d2315?w=800&q=80",
    body: `
            <p>I've recently found myself completely absorbed in the world of decentralized systems. For a long time, the centralized web felt inevitable, but diving deep into cryptography and peer-to-peer networks has completely shifted my perspective.</p>
            <p>This blog will serve as my open notebook. A place to document my learnings, random thoughts on blockchain architecture, and experiments in the web3 space. Building in public is hard, but essential.</p>
        `,
  },
  {
    id: 2,
    type: "lab-note",
    date: "2026-06-05",
    title: "Understanding Merkle Trees",
    preview:
      "A deep dive into the data structure that makes blockchains verifiable.",
    tags: ["cryptography", "data-structures"],
    pinned: false,
    body: `
            <div class="lab-section">
                <span class="lab-label">Objective</span>
                <p>Break down how Merkle Trees allow efficient and secure verification of content in large bodies of data.</p>
            </div>
            <div class="lab-section">
                <span class="lab-label">Process</span>
                <p>I implemented a basic Merkle Tree from scratch using Python. By taking a list of transaction hashes, pairing them, and recursively hashing the pairs, I was able to generate a single Merkle Root.</p>
            </div>
            <div class="lab-section">
                <span class="lab-label">Result</span>
                <p>It's fascinating how a single 256-bit hash can cryptographically prove the existence of thousands of underlying records without needing the entire dataset. I'll push the code to my GitHub soon.</p>
            </div>
        `,
  },
  {
    id: 3,
    type: "journal",
    date: "2026-06-12",
    title: "Thoughts on the EVM Architecture",
    preview:
      "Is the Ethereum Virtual Machine becoming obsolete, or is it the ultimate standard?",
    tags: ["ethereum", "architecture"],
    pinned: false,
    body: `
            <p>Been reading a lot of whitepapers lately regarding alternative virtual machines (like Solana's Sealevel and MoveVM). The EVM has immense network effects, but its sequential processing model is a massive bottleneck.</p>
            <p>Will layer-2 rollups save the EVM, or will a parallelized execution environment ultimately take the crown? Time will tell. My bet is currently on parallelized EVMs like Monad gaining serious traction this year.</p>
        `,
  },
  {
    id: 4,
    type: "lab-note",
    date: "2026-06-20",
    title: "Building a Simple P2P Node",
    preview:
      "Experimenting with libp2p to create a basic decentralized chat node.",
    tags: ["networking", "libp2p"],
    pinned: false,
    body: `
            <div class="lab-section">
                <span class="lab-label">Objective</span>
                <p>Use the libp2p networking stack to create two nodes that can discover each other and exchange messages without a central server.</p>
            </div>
            <div class="lab-section">
                <span class="lab-label">Process</span>
                <p>I set up a Node.js project and used <code>libp2p</code> with a simple floodsub routing protocol. Dealing with NAT traversal and peer discovery was significantly harder than standard HTTP client/server architecture.</p>
            </div>
            <div class="lab-section">
                <span class="lab-label">Result</span>
                <p>Success! The nodes successfully discovered each other using an MDNS local discovery module. Next step: trying to connect nodes across the internet using a bootstrap node.</p>
            </div>
        `,
  },
  {
    id: 5,
    type: "journal",
    date: "2026-06-28",
    title: "Digital Identity and Privacy",
    preview:
      "Who owns your data, and how Zero-Knowledge proofs might be the answer.",
    tags: ["privacy", "zkp"],
    pinned: false,
    body: `
            <p>The more I study Zero-Knowledge Proofs (ZKPs), the more I realize they are the missing layer of the internet. The ability to prove a statement is true without revealing the underlying data is basically magic.</p>
            <p>Imagine proving you are over 18 without showing your passport, or proving you have enough funds for a loan without revealing your bank balance. ZK is going to change everything about digital identity.</p>
        `,
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
