import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import formFields from './formFields';
import { withRouter } from 'react-router';
import * as actions from '../../actions';

const SurveyFormReview = ({ onGoBack, formValues, submitSurvey, history }) => {
    const reviewFields = _.map(formFields, field => {
        return (
            <div key={field.name}>
                <label>{field.label}</label>
                <div>
                    {formValues[field.name]}
                </div>
            </div>
        );
    });

    return (
        <div>
            <h5>Please confirm your entries</h5>
            {reviewFields}
            <button
                className="yellow darken-3 btn-flat white-text"
                onClick={onGoBack}
            >
                Go Back
            </button>
            <button 
                onClick={() => submitSurvey(formValues, history)}
                className="waves-effect waves-purple btn-large right white-text">
                    Send Survey 
                <i className="material-icons right">email</i>
            </button>
        </div>
    );
};

function mapStateToProps(state) {
    console.log(state);
    return {
        formValues: state.form.surveyForm.values
    };
}

export default connect(mapStateToProps, actions)(withRouter(SurveyFormReview));