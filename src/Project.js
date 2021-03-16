import React from 'react';
import PROJECTS from '../src/data/projects'


const Project = () => {
    return (
        <div>
            {PROJECTS.map((p) => {
                return <div key={p.id}>{p.title}</div>
            })}
        </div>
    )
}

export default Project;
