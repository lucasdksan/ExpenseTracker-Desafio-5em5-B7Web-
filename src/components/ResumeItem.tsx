import React from "react";

import * as Component from "../styles/components/ResumeItem";

type ResumeItemProps = {
    title: string;
    value: number;
    color?: string;
}

const ResumeItem = ({ title, value, color }: ResumeItemProps)=>{
    return(
        <Component.Container>
            <Component.Title>{title}</Component.Title>
            <Component.Info colorValue={color}>R$ {value}</Component.Info>
        </Component.Container>
    );
}

export default ResumeItem;