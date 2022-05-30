import React, { useState } from 'react';
import Project from "./Project";
import { capitalizeFirstLetter } from '../../utils/helpers';

function Portfolio() {
    const [pages] = useState([
        {
            name: "portfolio"
        }
    ]);
    const [currentPage] = useState(pages[0]);
    const [projects] = useState([
        {
            name: 'Git-There',
            link: "https://mblackwellgca.github.io/git-there/",
            repo: "https://github.com/mblackwellgca/git-there"
        },
        {
            name: 'Easter-Egg',
            link: "https://shrouded-anchorage-72534.herokuapp.com/",
            repo: "https://github.com/ChristopherPonzio/Easter-Egg"
        },
        {
            name: 'Tech-Blog',
            link: "https://serene-savannah-01208.herokuapp.com/",
            repo: "https://github.com/mblackwellgca/Tech-Blog"
        },
        {
            name: 'Note-Taker',
            link: "https://sleepy-eyrie-70027.herokuapp.com/",
            repo: "https://github.com/mblackwellgca/noteTaker"
        },
        {
            name: 'Work-Day-Scheduler',
            link: "https://mblackwellgca.github.io/work-day-scheduler/",
            repo: "https://github.com/mblackwellgca/Work-Day-Scheduler"
        },
        {
            name: 'Password-Generator',
            link: "https://mblackwellgca.github.io/password-generator/",
            repo: "https://github.com/mblackwellgca/password-generator"
        },
    ]);

    return (
        <section className="p-0">
            <div className="container-fluid p-0">
                <h1 className="text-center margin-top">{capitalizeFirstLetter(currentPage.name)}</h1>
                <hr className="my-4" />
                <div className="row no-gutters popup-gallery">
                   
                        {projects.map((project, idx) => (
                            <Project
                                project={project}
                                key={"project" + idx}
                            />
                        ))}
                </div>   
            </div>
        </section>
    );
};

export default Portfolio;