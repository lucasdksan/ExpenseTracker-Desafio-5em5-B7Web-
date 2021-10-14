import React from "react";

import * as Container from "../styles/components/InfoArea";
import ResumeItem from "../components/ResumeItem";
import { formatCurrentMonth } from "../hooks/UseDate";
import { colors } from "../styles/themes/colors";

type InfoAreaProp = { 
    currentMonth: string;
    onMonthChange: (newMonth: string)=> void;
    income: number;
    expense: number;
}

const InfoArea = ({ currentMonth, onMonthChange, expense, income }:InfoAreaProp)=>{
    function handlePrevMonth(){
        let [ year, month ] = currentMonth.split("-");
        let currentDate = new Date(parseInt(year), parseInt(month)-1, 1);
        currentDate.setMonth( currentDate.getMonth() - 1 );
        onMonthChange(`${currentDate.getFullYear()}-${currentDate.getMonth()+1}`);
    }
    function handleNextMonth(){
        let [ year, month ] = currentMonth.split("-");
        let currentDate = new Date(parseInt(year), parseInt(month)-1, 1);
        currentDate.setMonth( currentDate.getMonth() + 1 );
        onMonthChange(`${currentDate.getFullYear()}-${currentDate.getMonth()+1}`);
    }
    return(
        <Container.Container>
            <Container.MonthArea>
                <Container.MonthArrow onClick={handlePrevMonth}>⬅️</Container.MonthArrow>
                <Container.MonthTitle>{formatCurrentMonth(currentMonth)}</Container.MonthTitle>
                <Container.MonthArrow onClick={handleNextMonth}>➡️</Container.MonthArrow>
            </Container.MonthArea>
            <Container.ResumeArea>
                <ResumeItem title="Receitas" value={income}/>
                <ResumeItem title="Despesas" value={expense}/>
                <ResumeItem color={(income - expense) < 0 ? colors.main_red : colors.main_green} title="Balanço" value={income - expense}/>
            </Container.ResumeArea>
        </Container.Container>
    );
}

export default InfoArea;