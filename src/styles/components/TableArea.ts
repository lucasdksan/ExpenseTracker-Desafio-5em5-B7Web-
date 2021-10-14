import styled from 'styled-components';
import { colors } from '../themes/colors';

interface ColumnProp {
    widthColumn?: number;
}

export const Container = styled.table`
    width: 100%;
    background-color: ${colors.main_white};
    padding: 20px;
    box-shadow: 0px 0px 5px ${colors.main_sub_gray};
    border-radius: 10px;
    margin-top: 20px;
`;
export const TableHeadColumn = styled.th<ColumnProp>`
    width: ${props => props.widthColumn ? `${props.widthColumn}px` : "auto"};
    padding: 10px 0px;
    text-align: left;
`;
