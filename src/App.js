import React, { useState } from "react";
import "./styles.css";
import booklogo from "./booklogo.JPG";
import github from './github.svg';
import instagram from './instagram.svg';
import linkedIn from './linkedin.svg';
const courseDb = {
  DATABASE: [
    {
      course: "ORACLE12C"
    },
    {
      course: "MangoDb"
    },
    {
      course: "Microsoft SQL Server"
    },
    {
      course: "MySQL"
    },
    { course: "SAP HANA" },
    { course: "MariaDB" },
    { course: "PostgreSQL" }
  ],
  WEBDEVELOPER: [
    { course: "HTML" },
    { course: "CSS" },
    { course: "JavaScript" },
    { course: "JQuery" },
    { course: "React" },
    { course: "Bootstrap" },
    { course: "VueJs" },
    { course: "Full stack with Django and React" },
    { course: "AngularJs" },
    { course: "MERN" }
  ],
  BACKENDDEVELOPER: [
    {
      course: "PHP"
    },
    { course: "Python" },
    { course: "Pearl" },
    { course: "Java" },
    { course: "C" },
    { course: "C++" },
    { course: "Ruby" },
    { course: "C#" },
    { course: ".net" },
    { course: "NodeJs" }
  ]
};
var logoimg = <img class='courseLogo' src={booklogo} alt="logo" />;
var gitLogo=<img class="icons" src={github} alt="GitHub"/>;
var instaLogo= <img class="icons" src={instagram} alt="Instagram" />;
var linkedinLogo=<img class="icons" src={linkedIn} alt="Linkedin" /> ;
export default function App() {
  const [selectedGenre, setGenre] = useState("WEBDEVELOPER");
  function genreClickHandler(genre) {
    setGenre(genre);
  }

  return (
    <div className="App">
      <h1>{logoimg}COURSEPEDIA</h1>
      <h3>
        Here are some of my recommended courses, please select as per your
        interest..
      </h3>
      <div>
        {Object.keys(courseDb).map((genre) => (
          <button
            style={{
             
            }}
            onClick={() => genreClickHandler(genre)}
          >
            {" "}
            {genre}{" "}
          </button>
        ))}
      </div>
      <div class="listCourses" >
        <ul class='list' >
          {courseDb[selectedGenre].map((book) => (
            <li key={book.name}>
              <div> {book.course} </div>
            </li>
          ))}
        </ul>
      </div>


 <div class="footer">
        <div class="footer-header"><h2>FOLLOW</h2></div>
        <ul class="social-links">
         <li class="item" ><a class="link" href="https://github.com/imshubham-mishra">{gitLogo} </a></li>
            <li class="item"><a class="link" href="https://www.instagram.com/i_s.h.u.b.h.a.m/">{instaLogo} </a></li>
            <li class="item"><a class="link" href="https://www.linkedin.com/in/shubham-mishra-aa0a19151/">{linkedinLogo} </a></li>


        </ul>

    </div>



    </div>
  );
}
