import React, { Component } from 'react';
import SocialProfiles from '../data/socialProfiles';
import Profile from '../data/Profile';

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
