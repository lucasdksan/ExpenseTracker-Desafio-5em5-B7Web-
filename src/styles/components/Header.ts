import styled from 'styled-components';
import { colors } from '../themes/colors';

export const Container = styled.header`
    background-color: ${colors.main_dark_blue};
    height: 150px;
    width: 100%;
    text-align: center;
`;
export const TitleHeader = styled.h1`
    margin: 0;
    padding: 0;
    color: ${colors.main_white};
    padding-top: 30px;
`;
