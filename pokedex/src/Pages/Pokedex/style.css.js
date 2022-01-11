import styled from "styled-components";

export const PokedexContainer = styled.section`
    // background-image: url("https://thumbs.gfycat.com/ScrawnyUnsungAmoeba-size_restricted.gif");
    background-repeat: no-repeat;
    background-size: cover;
    padding:70px;
    min-height: 100vh;
`

export const PokedexCardArea = styled.div`
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
        overflow-x: visible;
        gap: 4vh;
    }

`