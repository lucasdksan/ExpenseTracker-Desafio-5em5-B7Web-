import React from "react";
import * as Component from "../styles/components/TableArea";

import { Item } from "../types/Item";
import TableItem from "./TableItem";

type Prop = {
    list: Item[];
}

const TableArea = ({ list }: Prop)=>{
    return(
        <Component.Container>
            <thead>
                <tr>
                    <Component.TableHeadColumn widthColumn={100}>Data</Component.TableHeadColumn>
                    <Component.TableHeadColumn widthColumn={130}>Categoria</Component.TableHeadColumn>
                    <Component.TableHeadColumn>Título</Component.TableHeadColumn>
                    <Component.TableHeadColumn widthColumn={150}>Valor</Component.TableHeadColumn>
                </tr>
            </thead>
            <tbody>
                {
                    list.map((item, index)=>(
                        <TableItem key={index} item={item}/>
                    ))
                }
            </tbody>
        </Component.Container>
    );
}

export default TableArea;