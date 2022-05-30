import React from 'react';
import '../../assets/styles/Resume.css';

export default function Resume() {
  return (
    <section className="resume">
    <div className="container">
        <div className="row">
            <div className="col-lg-10 mx-auto mb-4">
                <h1 className="text-center">Resume</h1>
                <hr className="light my-4" />
                <h3>Front-end Proficiencies</h3>
                <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>jQuery</li>
                    <li>Git</li>
                    <li>React</li>
                    <li>Bootstrap</li>
                    <li>SASS</li>
                </ul>
                <h3>Back-end Proficiencies</h3>
                <ul>
                    <li>APIs</li>
                    <li>Node</li>
                    <li>Express</li>
                    <li>MySQL, Sequelize</li>
                    <li>MongoDB, Mongoose</li>
                    <li>REST</li>
                    <li>MERN Stack</li>
                </ul>
                <h3>Additional Skills</h3>
                <ul>
                    <li>LMS Admin</li>
                    <li>SIS Specialist</li>
                    <li>Operations Coordinator</li>
                    <li>Teacher</li>
                    <li>Data Analyst</li>
                </ul>
                <p className="text-center">
                   <a href="https://docs.google.com/document/d/e/2PACX-1vQqsF7ClSuiWvfPqgCGqnMBdkXtqgcTjCcAoqNiZH1_cz0Ofqx9ziNcAL-xaFymbg/pub" className="text-faded white-link">View Resume</a>
                </p>
            </div>
        </div>
    </div>
</section>
  );
}
