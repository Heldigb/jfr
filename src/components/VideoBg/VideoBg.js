import {BaseLayout} from "@/components/Layout/styles";
import React from "react";
import {Video} from './styles'
export const VideoBg = () => {
    return (
        <Video>
            <video
                autoPlay={true}
                width="100%"
                height="100%"
                loop
            >
                <source src={'video1.mp4'}/>
            </video>
        </Video>
    );
};

