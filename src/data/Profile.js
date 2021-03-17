import React, { Component } from 'react'

export default class Profile extends Component {
    render() {

        const { link, image } = this.props.profile;

        return (
            <span>
                <a href={link}>
                    <img src={image} alt="profile" style={{ width: 35, height: 35, margin: 10 }} />
                </a>
            </span>
        )
    }
}
