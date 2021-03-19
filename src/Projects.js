import React from 'react';
import PROJECTS from '../src/data/projects'
import Project from './components/Project';

const Projects = () => {
    return (
        <div>
            {
                PROJECTS.map((p) => {
                    return (
                        <Project key={p.id} project={p} />
                    );
                })
            }
        </div>
    )
}

export default Projects;
