
import React from 'react';

import { Field } from '@progress/kendo-react-form';

import {
    FormInput, FormAutoComplete, FormRadioGroup,
    FormTextArea
} from './form-components.jsx';

import {
    nameValidator, requiredValidator, cardValidator
} from './validators.jsx'

import {
    countries, genders
} from './data.jsx'

import { CardSelector } from './card-selector.jsx'

export const PersonalDetails = (
    <div>
        <Field
            key={'cardType'}
            name={'cardType'}
            component={CardSelector}
            validator={requiredValidator}
        />
    </div>
);
