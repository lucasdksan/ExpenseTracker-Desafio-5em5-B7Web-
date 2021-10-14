import styled from 'styled-components';
import { colors } from '../themes/colors';

interface ColorProp{
    colorValue?: string;
}

export const Container = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    flex-direction: column;
`;
export const Title = styled.span`
    text-align: center;
    font-weight: bold;
    color: ${colors.main_dark_blue};
    margin-bottom: 5px;
`;
export const Info = styled.h3<ColorProp>`
    text-align: center;
    font-weight: bold;
    color: ${props => props.colorValue ?? colors.main_black};
`;