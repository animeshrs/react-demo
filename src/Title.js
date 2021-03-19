import React, { Component } from 'react'

const TITLES = [
    "a software engineer",
    "a music lover",
    "a chef",
    "an enthusiastic hiker"
];


class Title extends Component {
    state = {
        titleIndex: 0
    }

    componentDidMount() {
        setInterval(() => {
            const titleIndex = (this.state.titleIndex + 1) % TITLES.length;
            this.setState({ titleIndex });
        }, 4000);
    }

    render() {
        const title = TITLES[this.state.titleIndex];

        return (
            <p>
                I am  {title}.
            </p>
        )
    }
}

export default Title;