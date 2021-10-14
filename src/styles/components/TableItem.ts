import styled from 'styled-components';
import { colors } from '../themes/colors';

interface ColorProp {
    colorArea?: string;
}

export const Container = styled.tr`
    
`;
export const TableLine = styled.td`
    padding: 10px 0px;
`;
export const Category = styled.div<ColorProp>`
    display: inline-block;
    padding: 5px 10px;
    border-radius: 5px;
    color: ${colors.main_white};
    background-color: ${props => props.colorArea};
`;
export const Value = styled.div<ColorProp>`
    color: ${props => props.colorArea}
`;