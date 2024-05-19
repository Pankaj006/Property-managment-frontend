import React, { useState } from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import logo from './img/logo.png';
import './css/placeAd.css';

import PageOne from './pageOne/PageOne';
import PageTwo from './pageTwo/PageTwo';
import PageThree from './pageThree/PageThree';
import PageFour from './pageFour/PageFour';
import PageFive from './pageFive/PageFive';

const placeAd = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [steps, setSteps] = useState([1, 2, 3, 4, 5]);

  const handleNextStep = () => {
    if (currentStep < 5) {
      setSteps(steps.map((step, index) => (index < currentStep ? <i className="bi bi-check"></i> : index + 1)));
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePreviousStep = () => {
    if (currentStep > 1) {
      setSteps(steps.map((step, index) => (index < currentStep - 1 ? <i className="bi bi-check"></i> : index + 1)));
      setCurrentStep(currentStep - 1);
    }
  };

  const renderCurrentStep = () => {
    switch (currentStep) {
      case 1:
        return <PageOne />;
      case 2:
        return <PageTwo />;
      case 3:
        return <PageThree />;
      case 4:
        return <PageFour />;
      case 5:
        return <PageFive />;
      default:
        return <PageOne />;
    }
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-6 col-md-6 d-none d-md-block infinity-image-container-place-ad"></div>
        <div className="col-lg-6 col-md-6 infinity-form-container">
          <div className="col-lg-9 col-md-12 col-sm-8 col-xs-12 infinity-form">
            <div className="text-center mb-3 mt-5">
              <img src={logo} width="150px" alt="Logo" />
            </div>
            <div className="text-center mb-4">
              <h4>Submit Your Prop</h4>
            </div>
            <form className="px-3">
              <div className="container text-center">
                <div className="row">
                  <div className="col-sm-12">
                    <div className="progresses">
                      {steps.map((step, index) => (
                        <React.Fragment key={index}>
                          <div className={`steps ${currentStep === index + 1 ? 'current-step' : ''}`}>
                            <span className={step === <i className="bi bi-check"></i> ? step : ''}>
                              {step !== <i className="bi bi-check"></i> && step}
                            </span>
                          </div>
                          {index < steps.length - 1 && (
                            <span className={`line ${currentStep > index + 1 ? 'completed-line' : ''}`}></span>
                          )}
                        </React.Fragment>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-12">
                    {renderCurrentStep()}
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-6">
                    <button
                      type="button"
                      className="btn btn-danger previous-step"
                      onClick={handlePreviousStep}
                      disabled={currentStep === 1}
                    >
                      Previous
                    </button>
                  </div>
                  <div className="col-sm-6">
                    <button
                      type="button"
                      className={`btn ${currentStep === 5 ? 'btn-success' : 'btn-warning'} next-step`}
                      onClick={handleNextStep}
                      disabled={currentStep === 5}
                      style={{ color: '#fff' }}
                    >
                      {currentStep === 5 ? 'Submit' : 'Next'}
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default placeAd;
