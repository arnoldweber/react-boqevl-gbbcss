
import React from 'react';

import { Field } from '@progress/kendo-react-form';
import { CardSelector } from './card-selector.jsx'

import {
    FormInput, FormMaskedTextBox, FormDateInput, FormRadioGroup
} from './form-components.jsx';

import {
    requiredValidator, cardValidator, cvcValidator
} from './validators.jsx'

import {
   legalOrders
} from './data.jsx'

export const PaymentDetails = (
    <div>
        <Field
            key={'legalOrders'}
            id={'legalOrders'}
            name={'legalOrders'}
            label={'Type of Legal Order:'}
            layout={'vertical'}
            component={FormRadioGroup}
            data={legalOrders}
            validator={requiredValidator}
        />
    </div>
);
