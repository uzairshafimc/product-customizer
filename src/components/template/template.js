import React, {useState, useEffect} from "react";
import DragableInput from "../dragableInput/dragableInput";
import '../template/template.css';

const Template = ({inputsData, selectElement, selectedElement, logoImg, bgImg}) => {
    const [inputsArr, setInputArr] = useState()

    useEffect(()=> {
        if(inputsData){
            setInputArr([...inputsData])
        }else {}
    }, [inputsData])

    const changeStyle = (inputId, name, value) => {
        if(value < 80){
            const temp = inputsArr.map((e)=> {
                if(e.id === inputId){
                    e[name] = value
                }
                return e
            })
            setInputArr([...temp])
        }
    }

    const changeTxt = (inputId, value) => {
        console.log(inputId, value)
        const temp = inputsArr.map((e)=> {
            if(e.id === inputId){
                e.value = value
            }
            return e
        })
        console.log(temp)
        setInputArr([...temp])
    }

    return (
        <div className="card-section">
            <h5>Design Your Card</h5>
            <div className={`main-card backgroud-img ${selectedElement === "bg" ? "border-selected" : "black-border"}`} style={{
                backgroundImage: `url(${bgImg})`}} >
                <div className="layer" onClick={()=> {selectElement("bg")}}></div>
                {
                    logoImg && 
                    <div className={`logo-img ${selectedElement === "logo" ? "border-selected" : ""}`} onClick={()=> {selectElement("logo")}} >
                            <img src={logoImg} />
                    </div>
                }
                {
                    inputsArr?.map((e) => {
                        return (
                            <div className={`dragable-element ${selectedElement === e.id ? "active" : "inactive"}`} key = {e.id} onClick={()=> {selectElement(e.id)}}>
                                <div className="input-div">
                                    {/* {
                                        selectedElement === e.id ? <input type="text" name={e.name} defaultValue={e.value} onChange={(x)=>{changeTxt(e.id, x.target.value)}} />: ""
                                    } */}
                                    <DragableInput
                                        top={e.top}
                                        left={e.left}
                                        width={e.width}
                                        height={e.height}
                                        rotateAngle={e.rotateAngle}
                                        changeStyle={changeStyle}
                                        inputId = {e.id}
                                    >
                                        <div><p style={{fontSize: `${e.fontSize-3}px`}}>{e.value}</p></div>
                                    </DragableInput>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Template