import React, { Component } from 'react';
import Profiles from './Profiles';
import Projects from './Projects';
import './index.css';
import profile from '../src/assets/profile.png';
import Title from './Title';

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
                <img src={profile} alt="profile image" className="profile" />
                <p>My name is Animesh.</p>
                <Title />
                <p>I always try to learn new technologies.</p>
                {bio}

                <hr />
                <Projects />

                <hr />
                <Profiles />
            </div>
        );
    }
}

export default App;