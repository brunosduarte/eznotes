import { styled } from "styled-components";

export const Container = styled.button`
width: 100%;
background-color: ${({theme}) => theme.COLORS.BACKGROUND_700};

border: none;
border-radius: 10px;

padding: 22px;
margin-bottom: 16px;



> h1 {
        flex: 1;
        text-align: left;
        font-weight: 700;
        font-size: 24px;
        color: ${({theme}) => theme.COLORS.WHITE};
    }

    > div {
        display: flex;
    }
    
    > p {
        flex: 1;
        text-align: left;
        font-weight: 400;
        font-size: 16px;
        color: ${({theme}) => theme.COLORS.WHITE};

        margin-top: 16px;

        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2; /* number of lines to show */
        -webkit-box-orient: vertical;
    }

    > footer {
        width: 100%;
        display: flex;
        margin-top: 24px;
    }

`;