import styled from 'styled-components';
import { colors } from '../themes/colors';

export const Container = styled.aside`
    background-color: ${colors.main_white};
    box-shadow: 0px 0px 5px ${colors.main_sub_gray};
    border-radius: 10px;
    padding: 20px;
    margin-top: -40px;
    display: flex;
    align-items: center;
`;
export const MonthArea = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`;
export const MonthTitle = styled.h1`
    flex: 1;
    text-align: center;

`;
export const MonthArrow = styled.p`
    width: 40px;
    text-align: center;
    font-size: 25px;
    cursor: pointer;
`;
export const ResumeArea = styled.div`
    flex: 2;
    display: flex;
`;
