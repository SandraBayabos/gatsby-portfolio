import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Sandra Bayabos | Developer', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Sandra Bayabos',
  subtitle: 'Frontend Developer',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne:
    'A web-developer with a love for ReactJS, searching for remote front-end roles. A keen desire to contribute to the tech industry and flourish as a developer.',
  paragraphTwo:
    'Looking for full-time frontend remote roles, but also willing to take on short-term freelance jobs.',
  paragraphThree:
    'Mostly work with ReactJS, but willing to self-learn other frontend stacks for the role.',
  resume: 'https://drive.google.com/file/d/15jrTgwlEtRkFZquHZce6kiswIQbMzHQI/view?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'panasonic.png',
    title: 'Panasonic Space Solutions',
    info: "Built a microsite for Panasonic's Space Solution virtual tour with a separate site for 8 countries",
    info2: 'Integrated the microsite with 3D Vista virtual tour software',
    info3: 'Integrated Google Analytics and Google Tag Manager for user/event tracking',
    url: 'https://panatest.netlify.app/space-solution/malaysia',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'cosc.png',
    title: 'Conjoint Ophthalmology Scientific Conference 2020',
    info: 'Built a microsite for the COSC2020 live virtual event',
    info2:
      "Integrated Active Admin library to allow admins to approve or reject users' registrations",
    info3: 'Integrated Sendgrid to trigger emails to new users upon user registration',
    url: 'https://cosc2020selayang.live/home',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'prudential.png',
    title: 'Prudential Go Beyond 2021',
    info: "Self-learned Ruby on Rails to build a microsite for Prudential's live virtual event, successfully handling up to 1,500 live users",
    info2:
      'Integrated Google Analytics and Amplitude for user/event tracking and Chaport for live support',
    url: 'https://pru2021gobeyond.herokuapp.com/',
    info3:
      'Integrated Sendgrid to trigger emails to new users upon user registration, and intermittent reminder emails leading up to the event',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'nextacademy.png',
    title: 'Next Academy Website',
    info: "Self-learned Wordpress and Elementor to rebuild NEXT Academy's website from scratch",
    info2: '',
    url: 'https://www.nextacademy.com/',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'helikopter.png',
    title: 'Helikopter (Server)',
    info: "Part of Next Academy's Final Group Project. Built both a Google Chrome extension and an interactive web-app, aimed towards protecting young children from potentially sensitive, graphic and violent content on the internet by censoring keywords, blurring images and disabling links associated with said keywords",
    info2: '',
    url: 'https://helikopter.herokuapp.com/',
    repo: '', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'sandra.bayabos@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/sandra-bayabos/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/SandraBayabos',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
