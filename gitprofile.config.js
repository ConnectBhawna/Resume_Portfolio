// gitprofile.config.js

const config = {
  github: {
    username: 'ConnectBhawna', 
    sortBy: 'stars',
    limit: 10, 
    exclude: {
      forks: false, 
      projects: ['DSA','Dice-Roller-App',''], // These projects will not be displayed. example: ['my-project1', 'my-project2']
    },
  },
  social: {
    linkedin: 'ConnectBhawna',
    twitter: 'ConnectBhawna',
    facebook: '',
    instagram: 'connect.bhawna',
    dribbble: '',
    behance: '',
    medium: 'ConnectBhawna',
    dev: 'ConnectBhawna',
    stackoverflow: '', // format: userid/username
    website: 'https://linktr.ee/ConnectBhawna',
    phone: '',
    email: 'bhawnabc2002@gmail.com',
  },
  resume: {
    fileUrl:
      'https://www.overleaf.com/read/xwzbqzstfyms', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Kotlin',
    'Android',
    'Firebase',
    'Html',
    'Css',
    'JavaScript',
    'Github',
    'Python',
    'NextJs',
    'ReactJs',
    'Docker',
    'React',
    'Tezos',
    'Tailwind',
    'NodeJs',
  ],
  experiences: [
    {
      company: 'SheBuilds',
      position: 'Founder & Lead Organizer',
      from: 'Nov 2022',
      to: 'Present',
      companyLink: 'https://shebuilds.tech/',
    },
    {
      company: 'XROS-Fellowship(MonadoXR)',
      position: 'Software Developer Intern',
      from: 'May 2023',
      to: 'Sept 2023',
      companyLink: 'https://xrosfellowship.ficci.in/',
    },
    {
      company: 'Linux Foundation Mentorship',
      position: 'Software Developer Intern',
      from: 'March 2023',
      to: 'May 2023',
      companyLink: 'https://lfx.linuxfoundation.org/tools/mentorship/',
    },
    {
      company: 'Major League Hacking Fellowship',
      position: 'Software Developer Intern',
      from: 'Oct 2022',
      to: 'Nov 2022',
      companyLink: 'https://fellowship.mlh.io/',
    },
  ],
  /* certifications: [
    {
      name: 'Lorem ipsum',
      body: 'Lorem ipsum dolor sit amet',
      year: 'March 2022',
      link: 'https://example.com'
    },
  ], */
  education: [
    {
      institution: 'University of Delhi',
      degree: 'Dual Degree in Computer Science',
      from: '2021',
      to: '2025',
    },
    {
      institution: 'Rajkiya Pratibha Vikas Vidyalaya',
      degree: 'High School',
      from: '2019',
      to: '2021',
    },
  ],

  // To hide the `My Projects` section, keep it empty.
  externalProjects: [
    {
      title: 'Writez - Decentralized Blogging Platform',
      description:
        'Writez is a decentralised open-source social platform aimed to provide bloggers and writers the control and revenue they deserve which they are devoid of on traditional social platforms.The current state of web3 is mostly about decentralised finance but crypto mass adoption won’t be happening until we have engaging web3 social apps. Writez is a rich UI driven markdown based blogging platform where authors can also raise funds for their ideas! We are extending the famous crypto quote “Not your keys, not your coins” to “Not your keys, not your content”. The traditional blogging platforms are ad-driven and very much censored and hence they don’t have an open social-graph. With Writez, anyone can express their views anonymously without any censorship. There hardly is any way through which the readers can support the authors painlessly in web2 platforms. With Writez, readers can tip Tezos cryptocurrency to all posts and also fund the ideas of authors with just a few clicks.',
      imageUrl: '',
      link: 'https://www.writez.xyz/',
    },
    {
      title: 'Kunal Run - Learn Development through Gaming',
      description:
        'Making Learning Development Easy through Gaming.The Kunal Run, which combined learning with fun. this will help players to refresh their minds as well as learn new things about different fields of computer science and development. Learning about tech through watching youtube videos and tech news is boring why not learn while gaming? We created a game in which you can learn about tech while playing. This is a 2D runner game in which you will have to collect skills and Kunal will tell answers to questions asked by enemies which will deplete your skills/coins. Other than that with learning skills, you can also implement them using contributing to specific open- source projects. So here we are providing you with a curated list of Open source projects as per your skill set. Also, we are providing you a list of opportunities for which you can apply for earning money from your skills like MLH Fellowship and Google Summer of Code.',
      imageUrl: '',
      link: 'https://devpost.com/software/kunal-run',
    },
    {
      title: 'DigiManager - An App that gives you the power to do more',
      description:
        'DigiManager is app that gives you the power to do more. It manages your daily tasks and boosts your productivity.I built this app to demonstrate knowledge working in Kotlin and Firebase. This app was built using Kotlin and Firebase. This application supports user authentication using firebase. Users are able to create a new account using their email address and can then sign in to save coins to a user-specific list. This is made possible by creating a firestorm cloud storage database at the time of user registration. Another feature of this application is it offers light as well as dark themes. So now you can use DigiManager in whatever theme you like the most. Have a look at your running task, and upcoming and completed tasks all in one place. Create a task by pressing the button. DigiManager gives you notification on assigning as well as on completing the task. Then you will be able to achieve your long-term goal.',
      imageUrl: '',
      link: 'https://devpost.com/software/digimanager-nldvk4',
    },
    {
      title: 'MusicVerse - Lets Play the music as per emotion',
      description:
        'MusicVerse has a chatbot and an email suggestion system. Using chatbot you can learn more about the world of music. Email Suggestion will suggest you the music according to your mood. We also have a Twilio messaging feature that will find your nearest music store. We also have a facial expression music suggestion system that will suggest the music according to your mood and play music accordingly.For Frontend and Graphics we use Wix, Canva, Figma, and other designing tools.We used Twilio functions, to host serverless functions, through which we made an Axios API call to the Google Maps API to find the nearest music store.We used Wix-windows through Velo on our Wix site to get the location coordinates, through which we sent the nearest music store locations.',
      imageUrl: '',
      link: 'https://devpost.com/software/later-uak123',
    },
  ],
  


  // Display blog posts from your medium or dev account. (Optional)
  blog: {
    source: '', 
    username: '', 
    limit: 2, 
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'winter',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Hide the ring in Profile picture
    hideAvatarRing: false,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'procyon',
    ],

    // Custom theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made By <a 
      class="text-primary" href="https://linktr.ee/bhawna1203"
      target="_blank"
      rel="noreferrer"
    >Bhawna</a> and ❤️`,
};

export default config;
