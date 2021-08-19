import React from 'react';

const Textarea = React.forwardRef((props,ref) =>{
    return (
        <textarea 
            placeholder={props.placeholder}
            className={props.classname}
            onChange={props.change}
            value={props.value}
            ref={ref}
        />
    );
});
export default Textarea;