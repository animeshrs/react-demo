import React, { Component } from 'react'

class Project extends Component {
    render() {
        const { title, description, image, link } = this.props.project;

        return (
            <div style={{ display: 'inline-block', width: 300, margin: 10 }}>
                <h3>{title}</h3>
                <img src={image} alt="project" style={{ width: 200, height: 120 }} />
                <div>
                    <a href={link} target='_blank'>{link}</a>
                </div>
                <p>{description}</p>
            </div>
        )
    }
}

export default Project;
