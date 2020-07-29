import React from 'react';

export const FormField = ({label,type, name, value, onChange}) => {
    return(
    <div>
        <label>
          {label}
          <input type={type} value={value} name={name} onChange={onChange}
          />
        </label>
    </div>
    );
}

export const TextField = ({label,type, name, value, onChange}) => {
    return (
        <div>         
          <label>         
            {label}
            <textarea type={type} value={value} name={name} onChange={onChange}
            />
          </label>
        </div> 
    );
}