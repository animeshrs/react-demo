import React, { Component } from 'react';
import SocialProfiles from '../src/data/socialProfiles';
import Profile from './data/Profile';

export default class Profiles extends Component {
    render() {
        return (
            <div>
                {
                    SocialProfiles.map(sp => {
                        return (
                            <Profile key={sp.id} profile={sp} />
                        );
                    })
                }
            </div>
        )
    }
}
