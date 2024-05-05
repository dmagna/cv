import React from 'react';
import logo from './logo.svg';
import './App.scss';


function App() {
  return (
    <div className="CV">
      <aside>
        <img src="Dario B&W.jpeg" alt="dario" />
        <h1>Dario Magnanelli</h1>
        <div className="paragraph"><h2>CONTACT</h2></div>
        <div className="paragraph"><h2>ADDITIONAL SKILLS</h2></div>
      </aside>

      <main>
        <div className="paragraph"><h2>PROFESSIONAL SUMMARY</h2></div>
        <div className="paragraph"><h2>WORK EXPERIENCE</h2>
          <ul>
            <li>Deloitte Digital (2017 - now)</li>
          </ul>
        </div>
        <div className="paragraph">
          <h2>EDUCATION</h2>
          <ul>
            <li>
              <b>BSc Computer Science, 2018</b><br></br>
              Università degli studi di Milano
            </li>
          </ul>
        </div>
        <div className="paragraph"><h2>CERTIFICATIONS</h2>
          <ul>
            <li><i>Adobe Certified Expert - Adobe Experience Manager Sites Developer</i> issued by Adobe</li>
            <li><i>PET</i> by Cambridge English</li>
          </ul>
        </div>
        <div className="paragraph"><h2>LANGUAGES</h2>
          <ul>
            <li>English - Proficient</li>
            <li>Italian - Native</li>
          </ul>
        </div>
        <div className="paragraph"><h2>HOBBIES</h2>
        <ul>
          <li>Sailing, Swimming, Guitar</li>
        </ul>
        </div>

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
