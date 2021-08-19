import React from 'react';

 const Input = React.forwardRef((props,ref) => {
    return (
        <input 
            type={props.type}
            placeholder={props.placeholder}
            className={props.classname}
            name={props.name}
            onChange={props.change}
            onClick={props.Click}
            ref={ref}
            value={props.value}
            maxLength={props.maxlength}
            max={props.max}
            min={props.min}
            pattern={props.pattern}
        />
    );
});
export default Input;