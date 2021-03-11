import React, { Component } from 'react';

class App extends Component {
    constructor() {
        super();
        this.state = {
            displayBio: false
        }
    }

    render() {
        const toggleDisplayBio = () => {
            this.setState({
                displayBio: !this.state.displayBio
            });
        }

        const bio = this.state.displayBio
            ? (
                <div>
                    <p>I live in Dublin, Ireland</p>
                    <p>My fav sport is Cricket</p>
                    <p>Also, I love music</p>
                    <button className="btn" onClick={toggleDisplayBio}>Show Less</button>
                </div>

            )
            : (
                <button className="btn" onClick={toggleDisplayBio}>Read More</button>
            );

        return (
            <div>
                <h3>Hello World!</h3>
                <p>My name is Animesh. I am a software developer.</p>
                <p>I always try to learn new technologies.</p>
                {bio}
            </div>
        );
    }
}

export default App;