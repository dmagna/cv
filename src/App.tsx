import React from 'react';
import logo from './logo.svg';
import './App.scss';


type ParagraphProps = {
  title: string,
  text?: string,
  items?: Array<string>
}

const Paragraph: React.FC<ParagraphProps> = ({title, text, items}) =>{
  return (
    <div className="paragraph">
          <h2>{title}</h2>
          <p>{text}</p>
          {items && <ul>
              {items.map((item, i) => <li key={i}>{item}</li>)}
            </ul>
          }
        </div>
  );
}

function App() {
  return (
    <div className="CV">
      <aside>
        <img src="Dario B&W.jpeg" alt="dario" />
        <h1>Dario Magnanelli</h1>
        {ASIDE.map((paragraph, i) => 
          <Paragraph title={paragraph.title} items={paragraph.items} key={i} />
        )}
      </aside>

      <main>
        {MAIN.map((paragraph, i) => 
          <Paragraph title={paragraph.title} text={paragraph.text} items={paragraph.items} key={i} />
        )}

        <img src={logo} className="App-logo" alt="logo" />

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </main>
    </div>
  );
}

export default App;

const ASIDE = [
  {
    "title": "CONTACTS",
    "items": []
  },
  {
    "title": "ADDITIONAL SKILLS",
    "items": []
  },
]

const MAIN = [
  {
    "title": "PROFESSIONAL SUMMARY",
    "text": "Accomplished Adobe Experience Manager (AEM) Sites Developer with 6years of comprehensive experience in frontend and backend development. Developer and tech team leader, showcasing strong leadership and technical prowess. Successfully contributed to diverse projects across various industries, including new website creation, website porting/redesign, and development of asset migration tools. Skilled in collaborating with cross-functional teams to drive project success through strategic planning, execution, and continuous improvement initiatives."
  },
  {
    "title": "WORK EXPERIENCE",
    "items": [
      `Deloitte Digital (2017 - now) Developed and maintained custom AEM components, templates, workflows, and dialogs to meet project requirements. 
      Implemented frontend designs into responsive and accessible AEM components using HTML, CSS, and JavaScript frameworks. 
      Designed and implemented AEM solutions based on business requirements and best practices. 
      Integrated backend services and APIs to extend AEM functionalities and enhance user experiences. 
      Conducted code reviews and implemented coding standards to maintain code quality and consistency. 
      Optimized AEM performance by identifying and resolving performance bottlenecks. 
      Collaborated with UX/UI designers, content authors, and stakeholders to ensure alignment with project objectives and user needs. 
      Worked closely with QA teams to ensure the quality and stability of AEM applications.
      Provided technical guidance and support to junior developers and cross-functional teams. 
      Contributed to the documentation of technical designs, deployment guides, and troubleshooting procedures. 
      Participated in Agile ceremonies such as sprint planning, daily stand-ups, and retrospective meetings.`
    ]
  },
  {
    "title": "EDUCATION",
    "items": [
      "BSc Computer Science, 2018 ,Università degli studi di Milano"
    ]
  },
  {
    "title": "CERTIFICATIONS",
    "items": [
      "Adobe Certified Expert - Adobe Experience Manager Sites Developer - issued by Adobe",
      "PET - issued by Cambridge English"
    ]
  },
  {
    "title": "LANGUAGES",
    "items": [
      "English - Proficient",
      "Italian - Native"
    ]
  },
  {
    "title": "HOBBIES",
    "items": [
      "Sailing, Swimming, Guitar"
    ]
  }
];
