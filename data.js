const entries = [
  {
    id: 1,
    type: "journal",
    date: "2026-06-03",
    title: "The Shift to Decentralization",
    preview:
      "Why I am dedicating my time to understanding peer-to-peer systems and decentralized networks.",
    tags: ["web3", "philosophy"],
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
        <h1 class="hero-title">Diparsan's Notebook</h1>
        <p class="landing-intro">I'm Diparsan Pathak, a 16-year-old exploring the frontiers of decentralized systems, cryptography, and computer science. This space is my digital garden.</p>
        
        <div class="landing-about">
            <h2>About Me</h2>
            <ul class="about-list">
                <li><strong>Location:</strong> Bharatpur, Nepal</li>
                <li><strong>Focus:</strong> Building In Public</li>
                <li><strong>Learning:</strong> Web dev & Python</li>
            </ul>
        </div>

        <div class="landing-connect">
            <h2>Connect</h2>
            <div class="landing-social-links">
                <a href="https://github.com/Diparsan79" target="_blank" rel="noopener">GitHub</a>
                <a href="https://www.linkedin.com/in/diparsan-pathak/" target="_blank" rel="noopener">LinkedIn</a>
            </div>
        </div>

        <p class="landing-nav-hint">
            Browse the <button class="landing-link" data-view="journal">journal</button> for my raw thoughts, 
            or dive into my <button class="landing-link" data-view="lab-note">lab notes</button> for technical experiments.
        </p>
    </div>
`;
