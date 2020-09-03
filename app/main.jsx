import React from 'react';
import ReactDOM from 'react-dom';
import { Dialog, DialogActionsBar } from '@progress/kendo-react-dialogs';

import { Form, FormElement } from '@progress/kendo-react-form';
import { Button } from '@progress/kendo-react-buttons';
import { Stepper } from '@progress/kendo-react-layout';

import { AccountDetails } from './account-details.jsx';
import { PersonalDetails } from './personal-details.jsx';
import { PaymentDetails } from './payment-details.jsx';
import { Final } from './final.jsx';
import { Confirm } from './confirm.jsx';
import {v4 as uuid} from 'uuid';

const stepPages = [
    AccountDetails,
    PersonalDetails,
    PaymentDetails,
    Final,
    Confirm
];

export const App = () => {
    const [step, setStep] = React.useState(0);
    const [formState, setFormState] = React.useState({});
    const [steps, setSteps] = React.useState([
        { label: 'Agency Location', isValid: undefined },
        { label: 'Brand', isValid: undefined },
        { label: 'Legal Order Type', isValid: undefined },
        { label: 'Final', isValid: undefined },
        { label: 'Confirm', isValid: undefined },
    ]);

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: true
        };
        this.toggleDialog = this.toggleDialog.bind(this);
    }

    toggleDialog() {
        this.setState({
            visible: !this.state.visible
        });
    }

    render() {
        return (
            <div>
                <button className="k-button" onClick={this.toggleDialog}>Open Dialog</button>
                {this.state.visible && <Dialog title={"Submitted"} onClose={this.toggleDialog}>
                    <p style={{ margin: "25px", textAlign: "center" }}>Your request has been submitted. Your reference number is:</p>
                    <p style={{ margin: "25px", textAlign: "center" }}><b class="boop">5a78a076-79a1-4473-9a33-0639fcf64cd4</b></p>
                    <p style={{ margin: "25px", textAlign: "center" }}>You will receive a response by the due date listed on your legal order to the email addresses provided. Please do not submit duplicate requests as this will affect your queue placement.</p>
                    <DialogActionsBar>
                        <button className="k-button" onClick={this.toggleDialog}>OK</button>
                    </DialogActionsBar>
                </Dialog>}
            </div>
        );
    }
}

    const lastStepIndex = steps.length - 1;
    const isLastStep = lastStepIndex === step;
    const isPreviousStepsValid = steps
        .slice(0, step)
        .findIndex(currentStep => currentStep.isValid === false) === -1;

    const onStepSubmit = React.useCallback(
        (event) => {
            const { isValid, values } = event;

            const currentSteps = steps.map((currentStep, index) => ({
                ...currentStep,
                isValid: index === step ? isValid : currentStep.isValid
            }));

            setSteps(currentSteps);
            setStep(() => Math.min(step + 1, lastStepIndex));
            setFormState(values);



            if (isLastStep && isPreviousStepsValid && isValid) {
                ReactDOM.render(
    <App />,
    document.querySelector('my-app')
);
            }
        },
        [step, steps, setSteps, setStep, setFormState, isLastStep, isPreviousStepsValid]
    );

    const onPrevClick = React.useCallback(
        (event) => {
            event.preventDefault();
            setStep(() => Math.max(step - 1, 0));
        },
        [step, setStep]
    );

    return (
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <Stepper value={step} items={steps} />
            <Form
                initialValues={formState}
                onSubmitClick={onStepSubmit}
                render={(formRenderProps) => (
                    <div style={{ alignSelf: 'center' }}>
                        <FormElement style={{ width: 480 }}>
                            {stepPages[step]}
                            <span style={{ marginTop: '40px' }} className={'k-form-separator'} />
                            <div
                                style={{ justifyContent: 'space-between', alignContent: 'center' }}
                                className={'k-form-buttons k-buttons-end'}
                            >
                                <span style={{ alignSelf: 'center' }}>Step {step + 1} of 5</span>
                                <div>
                                    {
                                        step !== 0 ? (
                                            <Button style={{ marginRight: '16px' }} onClick={onPrevClick}>
                                                Previous
                                            </Button>
                                        ) : undefined
                                    }
                                    <Button
                                        primary={true}
                                        disabled={isLastStep ? !isPreviousStepsValid : false}
                                        onClick={formRenderProps.onSubmit}
                                    >
                                        {isLastStep ? 'Submit' : 'Next'}
                                    </Button>
                                </div>
                            </div>
                        </FormElement>
                    </div>
                )}
            />
        </div>
    );
};
ReactDOM.render(
    <App />,
    document.querySelector('my-app')
);
