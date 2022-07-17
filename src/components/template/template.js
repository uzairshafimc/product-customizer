import React, {useState, useEffect} from "react";
import DragableInput from "../dragableInput/dragableInput";
import '../template/template.css';
import ImageUpload from 'image-upload-react';
//important for getting nice style.
import 'image-upload-react/dist/index.css';

const Template = ({inputsData}) => {
    const [inputsArr, setInputArr] = useState()
    const [imageSrc, setImageSrc] = useState()

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

    const handleImageSelect = (e) => {
      setImageSrc(URL.createObjectURL(e.target.files[0]))
    }

    return (
        <div className="card-section">
            <h5>Design Your Card</h5>
            
            <div className="main-card">
                
                <div className="logo-img">
                    <ImageUpload
                            handleImageSelect={handleImageSelect}
                            imageSrc={imageSrc}
                            setImageSrc={setImageSrc}
                            style={{
                                width: 150,
                                height: 150,
                            }}
                        />
                </div>
                {
                    inputsArr?.map((e) => {
                        return (
                            <div className="dragable-element" key = {e.id}>
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
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Template