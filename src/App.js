import React, { Component } from 'react';
import Project from './Project';

class App extends Component {

    state = {
        displayBio: false
    };

    toggleDisplayBio = () => {
        this.setState({
            displayBio: !this.state.displayBio
        });
    }

    // constructor() {
    //     super();
    //     this.state = {
    //         displayBio: false
    //     }
    // }

    render() {
        // const toggleDisplayBio = () => {
        //     this.setState({
        //         displayBio: !this.state.displayBio
        //     });
        // }

        const bio = this.state.displayBio
            ? (
                <div>
                    <p>I live in Dublin, Ireland</p>
                    <p>My fav sport is Cricket</p>
                    <p>Also, I love music</p>
                    <button className="btn" onClick={this.toggleDisplayBio}>Show Less</button>
                </div>

            )
            : (
                <button className="btn" onClick={this.toggleDisplayBio}>Read More</button>
            );

        return (
            <div>
                <h3>Hello World!</h3>
                <p>My name is Animesh. I am a software developer.</p>
                <p>I always try to learn new technologies.</p>
                {bio}

                <hr />

                <Project />
            </div>
        );
    }
}

export default App;