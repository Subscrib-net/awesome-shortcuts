import {
  AiFillGithub,
  AiOutlineCodepen,
  AiOutlineCodeSandbox,
} from 'react-icons/ai';
import {
  SiAdobeacrobatreader,
  SiAdobephotoshop,
  SiAnchor,
  SiAsana,
  SiBitly,
  SiBuffer,
  SiCanva,
  SiDashlane,
  SiDiagramsdotnet,
  SiDiscord,
  SiDotnet,
  SiGlitch,
  SiGooglekeep,
  SiGooglesheets,
  SiHashnode,
  SiIndeed,
  SiInvision,
  SiJamboard,
  SiKahoot,
  SiMedium,
  SiMicrosoftexcel,
  SiMicrosoftpowerpoint,
  SiMicrosoftteams,
  SiMicrosoftword,
  SiMiro,
  SiNamecheap,
  SiNextdotjs,
  SiNotion,
  SiPrezi,
  SiRailway,
  SiRunkit,
  SiShopify,
  SiSpotify,
  SiStackbit,
  SiSurveymonkey,
  SiSvelte,
  SiTailwindcss,
  SiVercel,
  SiWix,
  SiWordpress,
} from 'react-icons/si';
import { FaNode, FaReact, FaRust, FaSignature } from 'react-icons/fa';
import { IoLogoIonic } from 'react-icons/io';
import { TbBarcode } from 'react-icons/tb';
import { MdOutlineTextFields, MdVpnLock } from 'react-icons/md';
import { BiChalkboard } from 'react-icons/bi';
import { RiFileList3Line } from 'react-icons/ri';
import {
  AdobeSpark,
  AngularJs,
  BeFunky,
  BitIo,
  Codespace,
  Docusaurus,
  EditorX,
  Figma,
  Flutter,
  GitHubGist,
  GoogleAppScript,
  GoogleCalendar,
  GoogleDocs,
  GoogleForms,
  GoogleMeet,
  GoogleSites,
  GoogleSlides,
  iconSize,
  JavaScript,
  Matlab,
  MicrosoftVisualStudio,
  Personio,
  Resume,
  TypeScript,
  VideoEditor,
  Vite,
  VueJs,
} from './icons';

export const actions = [
  {
    name: 'Google Meet',
    icon: GoogleMeet,
    description: 'Create a real-time meeting using Google Meet.',
    url: 'https://meet.new',
    tags: ['zoom', 'meeting'],
  },
  {
    name: 'Google Calendar',
    icon: GoogleCalendar,
    description: 'Create and send a new Google Calendar invite.',
    url: 'https://meeting.new',
  },
  {
    name: 'Google Docs',
    icon: GoogleDocs,
    description: 'Create a new document using Google Docs.',
    url: 'https://docs.new',
  },
  {
    name: 'Google Sheet',
    icon: <SiGooglesheets size={iconSize} color="#34A853" />,
    description: 'Create a new spreadsheet using Google Sheets.',
    url: 'https://sheets.new',
  },
  {
    name: 'Google Keep',
    icon: <SiGooglekeep size={iconSize} color="#FFBB00" />,
    description: 'Create a new note using Google Keep.',
    url: 'https://keep.new',
  },
  {
    name: 'Google Forms',
    icon: GoogleForms,
    description: 'Create a new form using Google Forms.',
    url: 'https://form.new',
  },
  {
    name: 'Google Slides',
    icon: GoogleSlides,
    description: 'Create an online presentation using Google Slides.',
    url: 'https://slide.new',
  },
  {
    name: 'Google Sites',
    icon: GoogleSites,
    description: 'Create and publish a website using Google Sites.',
    url: 'https://site.new',
  },
  {
    name: 'Google Jamboard',
    icon: <SiJamboard size={iconSize} color="#F37C20" />,
    description: 'Create a new Jamboard with Google.',
    url: 'https://jam.new',
  },
  {
    name: 'Google AppScript',
    icon: GoogleAppScript,
    description:
      'Create and share new editor functions using Google App Script.',
    url: 'https://script.new',
  },
  {
    name: 'Bitly',
    icon: <SiBitly size={iconSize} color="#EE6123" />,
    description: 'Create memorable, short links to your website with Bitly.',
    url: 'https://bitly.new',
  },
  {
    name: 'BeFunky',
    icon: BeFunky,
    description: 'Quickly edit, filter, and enhance your photos with BeFunky.',
    url: 'https://befunky.new',
  },
  {
    name: 'Proxy',
    icon: <MdVpnLock size={iconSize} />,
    description: 'Use a proxy server without having to connect to a VPN.',
    url: 'https://vpn.new',
  },
  {
    name: 'Medium',
    icon: <SiMedium size={iconSize} />,
    description: 'Create a new story on Medium.',
    url: 'https://story.new',
  },
  {
    name: 'Hashnode',
    icon: <SiHashnode size={iconSize} color="#2962FF" />,
    description: 'Create a new developer blog post using hashnode.',
    url: 'https://hn.new',
  },
  {
    name: 'Spotify',
    icon: <SiSpotify size={iconSize} color="#1DB954" />,
    description: 'Create a new Spotify playlist.',
    url: 'https://playlist.new',
  },
  {
    name: 'SurveyMonkey',
    icon: <SiSurveymonkey size={iconSize} color="#00BF6F" />,
    description: 'Create a new survey using SurveyMonkey.',
    url: 'https://surveymonkey.new',
  },
  {
    name: 'GitHub',
    icon: <AiFillGithub size={iconSize} />,
    description: 'Create a new GitHub repository.',
    url: 'https://github.new',
  },
  {
    name: 'GitHub Gist',
    icon: GitHubGist,
    description: 'Create a new GitHub gist.',
    url: 'https://gist.new',
  },
  {
    name: 'Figma',
    icon: Figma,
    description: "Design and prototype using Figma's collaborative interface.",
    url: 'https://figma.new',
  },
  {
    name: 'CodePen',
    icon: <AiOutlineCodepen size={iconSize} />,
    description:
      "Prototype your frontend code in CodePen's online development sandbox.",
    url: 'https://pen.new',
  },
  {
    name: 'Codespace',
    icon: Codespace,
    description: 'Create a new code snippet on Codespace.',
    url: 'https://snippet.new',
  },
  {
    name: 'React.js',
    icon: <FaReact size={iconSize} color="#61DAFB" />,
    description: 'Create a new React project online with CodeSandbox.',
    url: 'https://react.new',
  },
  {
    name: 'Vue.js',
    icon: VueJs,
    description: 'Create a new vue.js project online with CodeSandbox.',
    url: 'https://vue.new',
  },
  {
    name: 'Angular.js',
    icon: AngularJs,
    description: 'Create a new Angular project online with CodeSandbox.',
    url: 'https://ng.new',
  },
  {
    name: 'Node.js',
    icon: <FaNode size={iconSize} color="#5C9553" />,
    description: 'Create a new Node.js project online with CodeSandbox.',
    url: 'https://nodejs.new',
  },
  {
    name: 'Next.js',
    icon: <SiNextdotjs size={iconSize} />,
    description: 'Create a new Next.js project online with stackblitz.',
    url: 'https://next.new',
  },
  {
    name: 'JavaScript',
    icon: JavaScript,
    description: 'Create a new Javascript project online with CodeSandbox.',
    url: 'https://js.new',
  },
  {
    name: 'TypeScript',
    icon: TypeScript,
    description: 'Create a new Typescript project online with CodeSandbox.',
    url: 'https://ts.new',
  },
  {
    name: 'Vite',
    icon: Vite,
    description: 'Create a new Vite.js project online with Stackblitz.',
    url: 'https://vite.new',
  },
  {
    name: 'Flutter',
    icon: Flutter,
    description: 'Create a new Flutter project online with dartpad.',
    url: 'https://flutter.new',
  },
  {
    name: 'Ionic',
    icon: <IoLogoIonic size={iconSize} color="#3880FF" />,
    description:
      'Create a high quality, cross-platform native and web app with Ionic.',
    url: 'https://ionic.new',
  },
  {
    name: '.NET',
    icon: <SiDotnet size={iconSize} color="#512BD4" />,
    description:
      "Create a .NET application in Microsoft's Try .NET environment.",
    url: 'https://dotnet.new',
  },
  {
    name: 'Svelte',
    icon: <SiSvelte size={iconSize} color="#FF3E00" />,
    description: 'Create a new Svelte project online with CodeSandbox.',
    url: 'https://svelte.new',
  },
  {
    name: 'Rust',
    icon: <FaRust size={iconSize} />,
    description: 'Run a Rust Program.',
    url: 'https://rust.new',
  },
  {
    name: 'CodeSandbox',
    icon: <AiOutlineCodeSandbox size={iconSize} />,
    description: 'Create a new project online with CodeSandbox.',
    url: 'https://csb.new',
  },
  {
    name: 'Glitch',
    icon: <SiGlitch size={iconSize} color="#3333FF" />,
    description:
      'Create a full-stack app in your browser and collaborate live.',
    url: 'https://glitch.new',
  },
  {
    name: 'UUID',
    icon: <TbBarcode size={iconSize} />,
    description: 'Generate a new UUID.',
    url: 'https://uuid.new',
  },
  {
    name: 'Microsoft Excel',
    icon: <SiMicrosoftexcel size={iconSize} color="#217346" />,
    description: 'Create a spreadsheet using Excel.',
    url: 'https://excel.new',
  },
  {
    name: 'Microsoft PowerPoint',
    icon: <SiMicrosoftpowerpoint size={iconSize} color="#B7472A" />,
    description: 'Create a new presentation using PowerPoint.',
    url: 'https://powerpoint.new',
  },
  {
    name: 'Microsoft Word',
    icon: <SiMicrosoftword size={iconSize} color="#2B579A" />,
    description: 'Create a new document using Word.',
    url: 'https://word.new',
  },
  {
    name: 'Microsoft Visual Studio',
    icon: MicrosoftVisualStudio,
    description: 'Create a new Visual Studio codespace for your project.',
    url: 'https://env.new',
  },
  {
    name: 'Microsoft Teams',
    icon: <SiMicrosoftteams size={iconSize} color="#6264A7" />,
    description: 'Chat with your team using Microsoft Teams.',
    url: 'https://teams.new',
  },
  {
    name: 'Editor X',
    icon: EditorX,
    description: "Create a website using Editor X's online tool.",
    url: 'https://editorx.new',
  },
  {
    name: 'Stackbit',
    icon: <SiStackbit size={iconSize} color="#207BEA" />,
    description: 'Create a new Jamstack site.',
    url: 'https://jamstack.new',
  },
  {
    name: 'Tailwind',
    icon: <SiTailwindcss size={iconSize} color="#06B6D4" />,
    description: 'Create a new Tailwind Play page.',
    url: 'https://tailwindcss.new',
  },
  {
    name: 'Vercel',
    icon: <SiVercel size={iconSize} />,
    description: 'Create a new project in Vercel for preview and deployment.',
    url: 'https://deploy.new',
  },
  {
    name: 'Docusaurus',
    icon: Docusaurus,
    description: 'Create a new docusaurus project in your browser.',
    url: 'https://docusaurus.new',
  },
  {
    name: 'PDF Compress',
    icon: <SiAdobeacrobatreader size={iconSize} color="#EC1C24" />,
    description:
      'Compress PDF documents with simple drag and drop with Adobe Acrobat.',
    url: 'https://compresspdf.new',
  },
  {
    name: 'Merge PDF',
    icon: <SiAdobeacrobatreader size={iconSize} color="#EC1C24" />,
    description: 'Combine PDFs into one file with Adobe.',
    url: 'https://mergepdf.new',
  },
  {
    name: 'PDF to Word',
    icon: <SiAdobeacrobatreader size={iconSize} color="#EC1C24" />,
    description: 'Convert PDFs to Word documents with Adobe.',
    url: 'https://pdftoword.new',
  },
  {
    name: 'JPG to PDF',
    icon: <SiAdobeacrobatreader size={iconSize} color="#EC1C24" />,
    description: 'Convert JPG images to PDF with Adobe Acrobat.',
    url: 'https://jpgtopdf.new',
  },
  {
    name: 'Word to PDF',
    icon: <SiAdobeacrobatreader size={iconSize} color="#EC1C24" />,
    description: 'Convert Microsoft Word documents to PDF.',
    url: 'https://wordtopdf.new',
  },
  {
    name: 'Buffer',
    icon: <SiBuffer size={iconSize} />,
    description: 'Schedule and manage your social media posts.',
    url: 'https://buffer.new',
  },
  {
    name: 'Email Signature',
    icon: <FaSignature size={iconSize} />,
    description:
      'Create a professional email signature in 30 seconds HoneyBook.',
    url: 'https://emailsignature.new',
  },
  {
    name: 'Canva',
    icon: <SiCanva size={iconSize} color="#00C4CC" />,
    description: 'Create a new Canva design.',
    url: 'https://design.new',
  },
  {
    name: 'Canva Menu',
    icon: <SiCanva size={iconSize} color="#00C4CC" />,
    description:
      'Create an appetizing menu using customizable templates from Canva.',
    url: 'https://menu.new',
  },
  {
    name: 'Canva Resume',
    icon: <SiCanva size={iconSize} color="#00C4CC" />,
    description:
      'Create a professional-looking resume using templates from Canva.',
    url: 'https://resumes.new',
  },
  {
    name: 'Indeed',
    icon: <SiIndeed size={iconSize} color="#003A9B" />,
    description: 'Create your online resume with Indeed.',
    url: 'https://profile.new',
  },
  {
    name: 'Shopify',
    icon: <SiShopify size={iconSize} color="#7AB55C" />,
    description: 'Start a new online shop on Shopify.',
    url: 'https://shopify.new',
  },
  {
    name: 'Business Name',
    icon: <SiShopify size={iconSize} color="#7AB55C" />,
    description: 'Designate your business name on Shopify.',
    url: 'https://businessname.new',
  },
  {
    name: 'Business Card',
    icon: <SiNamecheap size={iconSize} color="#DE3723" />,
    description: 'Design personalized business cards with Namecheap.',
    url: 'https://businesscard.new',
  },
  {
    name: 'Anchor',
    icon: <SiAnchor size={iconSize} color="#5000B9" />,
    description: 'Create a new podcast episode using Anchor.',
    url: 'https://podcast.new',
  },
  {
    name: 'Personio',
    icon: Personio,
    description: 'Track your candidate pipeline using Personio.',
    url: 'https://candidate.new',
  },
  {
    name: 'Wix',
    icon: <SiWix size={iconSize} color="#0C6EFC" />,
    description: 'Build a new website using Wix.',
    url: 'https://wix.new',
  },
  {
    name: 'Adobe Spark',
    icon: AdobeSpark,
    description:
      'Design beautiful social media posts and more with Adobe Spark.',
    url: 'https://create.new',
  },
  {
    name: 'Logo',
    icon: AdobeSpark,
    description: 'Create a new logo for your business with Adobe Spark.',
    url: 'https://logo.new',
  },
  {
    name: 'Photoshop',
    icon: <SiAdobephotoshop size={iconSize} color="#31A8FF" />,
    description: 'Edit an image using Adobe Photoshop online.',
    url: 'https://photo.new',
  },
  {
    name: 'Wordpress',
    icon: <SiWordpress size={iconSize} color="#21759B" />,
    description: 'Create a new blog on wordpress.com.',
    url: 'https://blog.new',
  },
  {
    name: 'Blog Post',
    icon: <SiWordpress size={iconSize} color="#21759B" />,
    description: 'Create a new blog post on your Wordpress blog.',
    url: 'https://post.new',
  },
  {
    name: 'Video Editor',
    icon: VideoEditor,
    description: 'Edit your video online.',
    url: 'https://recording.new',
  },
  {
    name: 'Board',
    icon: <BiChalkboard size={iconSize} />,
    description: 'Collaborate remotely on an online whiteboard.',
    url: 'https://board.new',
  },
  {
    name: 'Asana',
    icon: <SiAsana size={iconSize} />,
    description: 'Add a new task to your Asana project.',
    url: 'https://asana.new',
  },
  {
    name: 'Resume',
    icon: Resume,
    description:
      "Build a new resume with one of CV2You's customizable templates.",
    url: 'https://resume.new',
  },
  {
    name: 'InVision',
    icon: <SiInvision size={iconSize} color="#FF3366" />,
    description:
      "Collaborate on an online whiteboard using InVision's Freehand.",
    url: 'https://freehand.new',
  },
  {
    name: 'Prezi',
    icon: <SiPrezi size={iconSize} color="#3181FF" />,
    description: 'Design beautiful presentations using Prezi.',
    url: 'https://prezi.new',
  },
  {
    name: 'Text Editor',
    icon: <MdOutlineTextFields size={iconSize} />,
    description: 'Quickly write a note in online text editor.',
    url: 'https://text.new',
  },
  {
    name: 'Kahoot',
    icon: <SiKahoot size={iconSize} color="#46178F" />,
    description: 'Create an online quiz using Kahoot.',
    url: 'https://quiz.new',
  },
  {
    name: 'Dashlane',
    icon: <SiDashlane size={iconSize} color="#0E353D" />,
    description:
      "Keep your online accounts secure with Dashlane's password generator.",
    url: 'https://password.new',
  },
  {
    name: 'Discord',
    icon: <SiDiscord size={iconSize} color="#5865F2" />,
    description:
      'Start a new Discord community where you can hang out and chat with friends.',
    url: 'https://discord.new',
  },
  {
    name: 'Test Data',
    icon: <RiFileList3Line size={iconSize} />,
    description: 'Generate test identities for testing purposes.',
    url: 'https://id.new',
  },
  {
    name: 'Diagram',
    icon: <SiDiagramsdotnet size={iconSize} color="#F08705" />,
    description: 'Create a flowchart diagram using Diagrams.net.',
    url: 'https://diagram.new',
  },
  {
    name: 'bit.io',
    icon: BitIo,
    description: 'Easily query bit.io data repositories.',
    url: 'https://query.new',
  },
  {
    name: 'Miro',
    icon: <SiMiro size={iconSize} />,
    description: 'Create a wireframe for your project using Miro.',
    url: 'https://wireframe.new',
  },
  {
    name: 'Matlab',
    icon: Matlab,
    description: 'Use MATLAB and Simulink through your web browser.',
    url: 'https://matlab.new',
  },
  {
    name: 'Railway',
    icon: <SiRailway size={iconSize} />,
    description: 'Create a new Railway deployment in the cloud.',
    url: 'https://dev.new',
  },
  {
    name: 'RunKit',
    icon: <SiRunkit size={iconSize} color="#DB4792" />,
    description: 'Prototype and launch your APIs using RunKit.',
    url: 'https://api.new',
  },
  {
    name: 'Notion',
    icon: <SiNotion size={iconSize} />,
    description:
      'Take notes, track your progress and organize project details.',
    url: 'https://notion.new',
  },
];
