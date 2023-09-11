import React from 'react';

const ReadCounter = (props) => {
    return (
        <div>
            <h4>Time spent on reading: {props.handleCount()}</h4>
        </div>
    );
};

export default ReadCounter;