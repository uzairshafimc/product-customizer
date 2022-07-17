import React, { useRef } from "react";

const InputField = ({ data, removeInput, onChangeInputField }) => {
    const { id, name, value, placeholder } = data
    const inputElement = useRef();

    return (
        <div>
            <input type="text" name={name} ref={inputElement} defaultValue={value} placeholder={placeholder} onChange={(e)=>{onChangeInputField(id, e.target.value)}}/>
            <span onClick={() => removeInput(id)}>X</span>
        </div>
    )
}

export default InputField