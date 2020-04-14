import React from 'react';
import SurveyDesign from '../img/SurveyDesign.png'

const Landing = () => {
    return (
        <div className="container">
            <div style={{ textAlign: "left" }}>
                <h1>Echomail</h1>
                <h4>Collect feedback from your users</h4>
            </div>
            <img src={SurveyDesign} alt=""></img>
        </div>
    );
};

export default Landing;