import styled from "styled-components";

export const HomeContainer = styled.section`
    background-repeat: no-repeat;
    background-size: cover;
    padding:70px;
    min-height: 100vh;
    a{
        cursor: pointer;
        color: black;
        font-weight: 700;

        &:hover{
            font-size: 20px;
        }
    }

    @media screen and (max-device-width : 480px){
        font-size: 1.5rem;

        a{
            margin: 0 5px;

            &:hover{
                font-size: 2rem;
            }
        }
    }

`

export const CardPokemonArea = styled.div`
    max-height: 78vh;
    display: grid;
    grid-template-columns: repeat(4, 25%);
    align-items: center;
    justify-items: center;
    gap: 2vh;
    overflow-x: hidden;

    @media screen and (max-device-width : 480px){
        grid-template-columns: 1fr;
    }

    @media screen and (min-device-width : 481px) and (max-device-width : 800px){
        grid-template-columns: repeat(3, 1fr);
    }

`

export const PaginationArea = styled.div`
    display: grid;
    grid-template-columns: repeat(28, 1fr);
    justify-content: space-around;
    width: 100%;

    @media screen and (max-device-width : 480px){
        display: grid;
        grid-template-columns: repeat(6, 1fr);
    }

    @media screen and (min-device-width : 481px) and (max-device-width : 800px){
        display: grid;
        grid-template-columns: repeat(15, 1fr);
        align-items: center;
        justify-items: center;
    }
`

export const ButtonArea = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-top: 2vh;
    
    img{
        width: 3%;
        cursor: pointer;
    }

    @media screen and (max-device-width : 480px){
        width: 92vw;
        margin-left: -48px;
        
        img{
            width: 10%;
        }
    }

    @media screen and (min-device-width : 481px) and (max-device-width : 800px){
        width: 89vw;
        margin-left: -24px;
        
        img{
            width: 5%;
        }
    }
`