import React from 'react';
import { PlyrComponent } from 'plyr-react';

function Video({sources}) {
    return (
        <div>
            <PlyrComponent sources={sources}/>
        </div>
    );
}

export default Video;