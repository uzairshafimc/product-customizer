import React, { useState, useEffect } from "react";
import ManageInput from "../components/manageInputs/manageInputs";
import Template from "../components/template/template";

const defaultBg = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEEuSKv1VSK9XoW7PdK-Lpm0TmcW6RfFL9Xw&usqp=CAU"
const defaultLogo = "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aHVtYW58ZW58MHx8MHx8&w=1000&q=80"

const Editor = () => {
    const [inputsData, setInputsData] = useState()
    const [selectedElement, setSelectedElement] = useState() //logo, bg
    const [logoImg, setLogoImg] = useState(defaultLogo)
    const [bgImg, setBgImg] = useState(defaultBg)

    const replaceImg = (e) => {
        const imgUrl = URL.createObjectURL(e.target.files[0])
        if(selectedElement === "logo"){
            setLogoImg(imgUrl)
        }else if(selectedElement === "bg"){
            setBgImg(imgUrl)
        }
    } 

    const removeImg = () => {
        if(selectedElement === "logo"){
            setLogoImg("")
        }else if(selectedElement === "bg"){
            setBgImg("")
        }
    }

    return (
        <div className="main-editor m-5">
            <div className="row">
                <div className="col-md-4">
                    <ManageInput setData={setInputsData}/>
                    <div className="btn-img">
                        <input type="file" className="imgup" id="imgupload" onChange={(e)=> {replaceImg(e)}} />
                        <button className="btn btn-primary ">
                        <label htmlFor='imgupload'><a id="OpenImgUpload">Replace Image</a></label>
                        </button>
                        <button className="btn btn-danger ml-5" onClick={() => {removeImg()}}>Remove Image</button>
                    </div>
                </div>
                <div className="col-md-8">
                    <div>
                        <Template inputsData={inputsData} selectElement={setSelectedElement} selectedElement={selectedElement} logoImg= {logoImg} bgImg={bgImg}/>  
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Editor