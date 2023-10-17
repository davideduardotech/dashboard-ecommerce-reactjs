import React from 'react';



const Checkbox = ({ onChange, label }) => (
    <label>
        <input type='checkbox' onChange={onChange} /> {label}
    </label>
)


export default Checkbox;