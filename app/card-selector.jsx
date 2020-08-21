
import React from 'react';
import { FieldWrapper } from '@progress/kendo-react-form';

export const CardSelector = (props) => {
    const {value, valid} = props;
    const [cardHover, setCardHover] = React.useState('');

    const onMouseEnter = React.useCallback(
        (event) => setCardHover(event.currentTarget.getAttribute('for')),
        [setCardHover]
    );
    const onMouseLeave = React.useCallback(
        () => setCardHover(''),
        [setCardHover]
    );
    const onChange = React.useCallback(
        (event) => props.onChange({ value: event.currentTarget.value }),
        [props.onChange]
    );

    const filter = 'brightness(1.8) grayscale(1) opacity(.7)';
    const filterHover = 'brightness(1.2) grayscale(.5) opacity(.9)';
    const cardStyle = {
        cursor: 'pointer',
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        display: 'inline-block',
        width: 138,
        height: 70,
        border: '1px solid'
    };
    const visaStyle = {
        backgroundImage: 'url(https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Kik_Messenger_logo.svg/1280px-Kik_Messenger_logo.svg.png)',
        filter: value === 'visa' ?
            'none' :
            cardHover ===  'visa' ? filterHover : filter,
        ...cardStyle
    };
    const masterCardStyle = {
        backgroundImage: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS44STz5Q24_0tAqgYl7FHLBUo99Fr3K8Yfig&usqp=CAU)',
        filter: value === 'masterCard' ?
            'none' :
            cardHover ===  'masterCard' ? filterHover : filter,
        ...cardStyle
    };
    const paypalStyle = {
        backgroundImage: 'url(https://officialpsds.com/imageview/r6/kq/r6kq5x_large.png?1521316587)',
        filter: value === 'paypal' ?
            'none' :
            cardHover ===  'paypal' ? filterHover : filter,
        ...cardStyle
    };

    const worldstarStyle = {
        backgroundImage: 'url(data:image/png;base64,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)',
        filter: value === 'worldstar' ?
            'none' :
            cardHover ===  'worldstar' ? filterHover : filter,
        ...cardStyle
    };

    const mangaStyle = {
        backgroundImage: 'url(data:image/png;base64,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)',
        filter: value === 'manga' ?
            'none' :
            cardHover ===  'manga' ? filterHover : filter,
        ...cardStyle
    };

    const cocoStyle = {
        backgroundImage: 'url(data:image/png;base64,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)',
        filter: value === 'coco' ?
            'none' :
            cardHover ===  'coco' ? filterHover : filter,
        ...cardStyle
    };

    const aminoStyle = {
        backgroundImage: 'url(https://upload.wikimedia.org/wikipedia/commons/1/1f/Amino_icon.jpg)',
        filter: value === 'amino' ?
            'none' :
            cardHover ===  'amino' ? filterHover : filter,
        ...cardStyle
    };

    const inputStyles = {
        visibility: 'hidden',
        position: 'absolute'
    };

    return (
        <FieldWrapper>
            <label class={`k-label${valid?'':' k-text-error'}`}>Which brand is your request pertaining to?</label>
            <ul className="k-radio-list k-list-horizontal">
                <li className="k-radio-item">
                    <input
                        onChange={onChange}
                        checked={value === 'visa'}
                        id="visa" type="radio"
                        value="visa"
                        name="paymentType"
                        style={inputStyles}
                    />
                    <label onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} htmlFor="visa" style={visaStyle}></label>
                </li>

                <li className="k-radio-item">
                    <input
                        onChange={onChange}
                        checked={value === 'masterCard'}
                        id="masterCard"
                        type="radio"
                        value="masterCard"
                        name="paymentType"
                        style={inputStyles}
                    />
                    <label onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} htmlFor="masterCard" style={masterCardStyle}></label>
                </li>

                <li className="k-radio-item">
                    <input
                        onChange={onChange}
                        checked={value === 'paypal'}
                        id="paypal"
                        type="radio"
                        value="paypal"
                        name="paymentType"
                        style={inputStyles}
                    />
                    <label onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} htmlFor="paypal" style={paypalStyle}></label>
                </li>
                <li className="k-radio-item">
                    <input
                        onChange={onChange}
                        checked={value === 'worldstar'}
                        id="worldstar"
                        type="radio"
                        value="worldstar"
                        name="paymentType"
                        style={inputStyles}
                    />
                    <label onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} htmlFor="worldstar" style={worldstarStyle}></label>
                </li>
                <li className="k-radio-item">
                    <input
                        onChange={onChange}
                        checked={value === 'manga'}
                        id="manga"
                        type="radio"
                        value="manga"
                        name="paymentType"
                        style={inputStyles}
                    />
                    <label onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} htmlFor="manga" style={mangaStyle}></label>
                </li>
                <li className="k-radio-item">
                    <input
                        onChange={onChange}
                        checked={value === 'coco'}
                        id="coco"
                        type="radio"
                        value="coco"
                        name="paymentType"
                        style={inputStyles}
                    />
                    <label onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} htmlFor="coco" style={cocoStyle}></label>
                </li>
                <li className="k-radio-item">
                    <input
                        onChange={onChange}
                        checked={value === 'amino'}
                        id="amino"
                        type="radio"
                        value="amino"
                        name="paymentType"
                        style={inputStyles}
                    />
                    <label onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} htmlFor="amino" style={aminoStyle}></label>
                </li>
            </ul>
        </FieldWrapper>
    );
};
