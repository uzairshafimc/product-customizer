import React, { useState, useEffect } from "react";
import ManageInput from "../components/manageInputs/manageInputs";
import Template from "../components/template/template";

const Editor = () => {
    const [inputsData, setInputsData] = useState()
    
    return (
        <div className="main-editor">
            <div className="row">
                <div className="col-4">
                    <ManageInput setData={setInputsData}/>
                </div>
                <div className="col-8">
                    <Template inputsData={inputsData}/>
                </div>
            </div>
        </div>
    )
}

export default Editor