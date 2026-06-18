const entries = [
    {
        id: 1,
        type: 'journal',
        date: '2025-06-03',
        title: 'Started the notebook',
        preview: 'First day of building this in public',
        tags: ['building','hard' ],
        pinned: true,
        body: `
            <p>Today i started buiding my engineering notebook styled portfolio website. Im learning html css and js from scratch so this is lowk a lott harder but im getting the hook.</p>
            <p>Some things has really been boring to learn but lets keep going and see how it all turns out.</p>
            `
    },
    {
        id:2,
        type: 'lab-note',
        date: '2025-06-03',
        title: 'HTML learning',
        preview: 'Im currently learning HTML from scratch.',
        tags: ['html', 'css', 'js'],
        pinned : false,
        body: `
            <div class="lab-section">
                <span class="lab-label">objective</span>
                <p>Build a good layout of my website using semantic HTML.</p>
            </div>
            <div class="lab-section">
                <span class="lab-label">ibservation</span>
                <p>IDK what to write here so im js typing random ahh words for now.</p>
            </div>
            <div class="lab-section">
                <span class="lab-label">result</span>
                <p> The result of my site turned out to be nice ig.</p>
            </div>
        `

    }   
];

const landing = `
    <div class="landing">
        <p class="landing-intro">I'm Diparsan Pathak -- A passionate programmer from Bharatpur, Nepal.</p>
        <p>16 year-old focused on CS & Mathematics. Building something new and learning everyday.</p>
        <p>Browse the <span class="landing-link" data-view="journal">journal</span> for my raw thoughts and <span class="landing-link" data-view="lab-note">Lab note</span> for my technical journey. </p>
    </div>
`;

const status = {
    working: 'engineering note',
    mood: 'focused',
    updated: '2025-06-03'
};


 