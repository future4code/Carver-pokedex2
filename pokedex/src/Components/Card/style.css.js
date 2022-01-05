import styled from "styled-components"

export const CardArea = styled.div`
    width: 15vw;
    height: 35vh;
    border:7px solid rgb(177,80,12);
    box-shadow:7px 7px rgba(43,124,42, 0.7);
    background-color: #fff;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`
export const ImgContainer = styled.div`
    width: 100%;
    overflow: hidden;
    
    img{
        width: 100%;
    }
`

export const ButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: stretch;
    justify-content: space-between;
    width: 100%;
    
    button{
        width: 50%;
        padding: 3%;
    }
`
