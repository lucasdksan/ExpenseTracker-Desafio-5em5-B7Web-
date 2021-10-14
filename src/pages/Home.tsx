import React, { useState, useEffect } from "react";
import * as Component from "../styles/pages/Home";

import { Category } from "../types/Category";
import { Item } from "../types/Item";
import { categories, items } from "../data/index";
import { getCurrentMonth, filterListByMouth } from "../hooks/UseDate";

import Header from "../components/Header";
import TableArea from "../components/TableArea";
import InfoArea from "../components/InfoArea";

const Home = ()=>{
    const [ list, setList ] = useState(items);
    const [ filteredList, setFilteredList ] = useState<Item[]>([]);
    const [ currentMonth, setCurrentMonth ] = useState(getCurrentMonth());
    const [ income, setIncome ] = useState(0);
    const [ expense, setExpense ] = useState(0);

    useEffect(()=>{
        setFilteredList(filterListByMouth(list, currentMonth));
    },[list,currentMonth]);
    useEffect(()=>{
        let incomeCount = 0;
        let expenseCount = 0;
        for(let i in filteredList){
            if(categories[filteredList[i].category].expense){
                expenseCount += filteredList[i].value;
            } else {
                incomeCount += filteredList[i].value;
            }
        }
        setIncome(incomeCount);
        setExpense(expenseCount);
    }, [filteredList]);

    function handleMonthChange(newMonth: string){
        setCurrentMonth(newMonth);
    }

    return(
        <>
            <Header />
            <Component.Main>
                <InfoArea 
                    onMonthChange={handleMonthChange}
                    currentMonth={currentMonth}
                    income={income}
                    expense={expense}
                />
                <TableArea list={filteredList}/>
            </Component.Main>
        </>
    );
}

export default Home;