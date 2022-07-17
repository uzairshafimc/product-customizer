import React, {useState, useEffect} from "react";
import InputField from "../inputField/inputField";

const defaultInputs = [{id: 1, name: "field_1", value: "Job Type", placeholder:"Job Type", fontSize:25, top:15, left:308, width: 200, height:25, rotateAngle:0}, {id: 2, name: "field_2", value: "Phone/ Others", placeholder:"Phone/ Others", fontSize:25, top:307, left:564, width: 200, height:25, rotateAngle:0}, {id: 3, name: "field_3", value: "Email/ Others", placeholder:"Email/ Others", fontSize:25, top:367, left:564, width: 200, height:25, rotateAngle:0}, {id: 4, name: "field_4", value: "Web/ Others", placeholder:"Web/ Others", fontSize:25, top:367, left:15, width: 200, height:25, rotateAngle:0},]

const ManageInput = ({setData}) => {
    const [inputsData, setInputsData] = useState([...defaultInputs])
    const [inputsCount, setInputsCount] = useState(defaultInputs.length)

    useEffect(()=>{
        setData([...inputsData])
    },[inputsData])

    const addInput = () => {
        const arr = inputsData
        let count = inputsCount+1
        arr.push({id: count, name: `field_${count}`, value: "Type Text Here", placeholder: "Type Text Here", fontSize:25, top:15, left:15, width: 200, height:25, rotateAngle:0})
        setInputsData([...arr])
        setInputsCount(prevValue => prevValue+1)
    }

    const removeInput = (id) => {
        const arr = inputsData.filter(e => e.id !== id)
        setInputsData([...arr])
        setInputsCount(prevValue => prevValue-1)
    }

    const onChangeInputField = (id, val) => {
        const arr = inputsData.map((e) => {
            if(e.id === id){
                e.value = val
            }
            return e
        })
        setInputsData([...arr])
        setInputsCount(prevValue => prevValue-1)
    }

    return (
        <div>
            <h5>Text</h5>
            <p>Edit your text below, or click on the field you'd like to edit directly on your design. </p>
            <div>
                {
                    inputsData.map((e)=>{
                        return <InputField key={`index_${e.id}`} data={e} removeInput={removeInput} onChangeInputField={onChangeInputField} />
                    })
                }
            </div>
            <button onClick={()=> {addInput()}}>New Text Field</button>
        </div>
    )
}

export default ManageInput