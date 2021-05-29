import {ContentWrapper, SpaceHolder} from "./styles";
import {Scrollbars} from "react-custom-scrollbars";
import {CustomRenderThumb} from "@/components/ContentList/styles";
import React from "react";


export const Content = ({children}) => {
    return (
        <ContentWrapper>
                  {children}
        </ContentWrapper>
    );
};

