import React, { useEffect, useState } from "react";
import ResumList from "../includes/resumPage/ResumList";
import api from "../api/axios";

function ResumPage() {

    const [resume, setResume] = useState([]);

    useEffect( () => {
        getResume();
    }, [] );

    const getResume = async() => {
        try {
            const response = await api.get("resume/index");
            setResume(response.data);
            console.log(response.data);
        } catch(err) {
            console.log( err );
        }
    }

    return (
        <div style={{padding: '50px 150px'}}>

            <ResumList
                data={resume}
            />
           
        </div>
    );
}

export default ResumPage;