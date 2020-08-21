import React from 'react';

import { Field } from '@progress/kendo-react-form';
import { CardSelector } from './card-selector.jsx'

import {
    FormInput, FormMaskedTextBox, FormDateInput, FormUpload, FormDateRangePicker
} from './form-components.jsx';

import {
    requiredValidator, cardValidator, emailValidator
} from './validators.jsx'

export const Final = (
    <div>
        <div style={{display: 'flex', justifyContent: 'space-between'}}>
            <div style={{ width: '75%', marginRight: '25px'}}>
                <Field
                    key={'cardNumber'}
                    id={'cardNumber'}
                    name={'cardNumber'}
                    label={'Enter the JID or username'}
                    hint={''}
                    mask={''}
                    component={FormMaskedTextBox}
                />
            </div>
        </div>
        <div>
            <Field
            key={'email'}
            id={'email'}
            name={'email'}
            label={'User\'s Registration E-mail Address'}
            hint={''}
            type={'email'}
            component={FormInput}
            validator={emailValidator}
        />
        </div>
              <Field
                  key={'StartDate'}
                  id={'StartDate'}
                  name={'StartDate'}
                  label={'Enter Dates for requested data:'}
                  component={FormDateRangePicker}
                  validator={requiredValidator}
              />
        <Field
                  key={'DueDate'}
                  id={'DueDate'}
                  name={'DueDate'}
                  label={'Due Date for requested data'}
                  component={FormDateInput}
                  validator={requiredValidator}
        />
        <Field
            key={'YourName'}
            id={'YourName'}
            name={'YourName'}
            label={'Your Name'}
            component={FormInput}
            validator={requiredValidator}
        />
        <Field
            key={'AgencyName'}
            id={'AgencyName'}
            name={'AgencyName'}
            label={'Agency Name'}
            component={FormInput}
            validator={requiredValidator}
        />
        <Field
            key={'youremail'}
            id={'youremail'}
            name={'youremail'}
            label={'Your E-mail'}
            hint={''}
            type={'email'}
            component={FormInput}
            validator={emailValidator}
        />
        <Field
            key={'requestUpload'}
            id={'requestUpload'}
            name={'requestUpload'}
            label={'Upload valid US Legal Order'}
            component={FormUpload}
            validator={requiredValidator}
        />
    </div>
);
