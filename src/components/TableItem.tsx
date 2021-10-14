import React from "react";

import * as Component from "../styles/components/TableItem";

import { Item } from "../types/Item";
import { categories } from "../data/index";
import { formatDate } from "../hooks/UseDate";
import { colors } from "../styles/themes/colors";

type Prop = {
    item: Item;
}

const TableItem = ({item}: Prop)=>{
    return(
        <Component.Container>
            <Component.TableLine>{formatDate(item.date)}</Component.TableLine>
            <Component.Category colorArea={categories[item.category].color}>
                <Component.TableLine>
                    {categories[item.category].title}
                </Component.TableLine>
            </Component.Category>
            <Component.TableLine>{item.title}</Component.TableLine>
            <Component.Value colorArea={categories[item.category].expense ? colors.main_red : colors.main_green}>
                <Component.TableLine>R$ {item.value}</Component.TableLine>
            </Component.Value>
        </Component.Container>
    );
}

export default TableItem;