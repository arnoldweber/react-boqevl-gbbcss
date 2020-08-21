
import React from 'react';

import { Field } from '@progress/kendo-react-form';

import {
    FormInput, FormUpload, FormRadioGroup
} from './form-components.jsx';

import {
    requiredValidator, usaValidator
} from './validators.jsx'

import {
   genders
} from './data.jsx'

export const AccountDetails = (
    <div>
    <Field
            key={'gender'}
            id={'gender'}
            name={'gender'}
            label={'Is your agency in the United States?'}
            layout={'horizontal'}
            component={FormRadioGroup}
            data={genders}
            validator={usaValidator}
        />
    </div>
    
);
