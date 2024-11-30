import React, { useEffect, useState } from "react";
import ResumList from "../includes/resumPage/ResumList";
import api from "../api/axios";
import styled from "styled-components";

function ResumPage() {
    const [resume, setResume] = useState([]);

    useEffect(() => {
        getResume();
    }, []);

    const getResume = async () => {
        try {
            const response = await api.get("resume/index");
            setResume(response.data);
            console.log(response.data);
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <Wrapper>
            <BackgroundVideo autoPlay loop muted playsInline>
                <source src="/videos/video2.mp4" type="video/mp4" />
            </BackgroundVideo>
            <ResumList data={resume} />
        </Wrapper>
    );
}

const Wrapper = styled.div`
    position: relative;
    padding: 50px 150px;
    background-color: #d9d9d9;
    z-index: 1; /* Ensure content appears above video */
`;

const BackgroundVideo = styled.video`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover; /* Ensure video covers the full screen */
    z-index: -1; /* Video stays behind other content */
`;

export default ResumPage;
