import styled from "styled-components";

export const HomeContainer = styled.section`
    /* background-image: url("https://thumbs.gfycat.com/ScrawnyUnsungAmoeba-size_restricted.gif"); */
    background-repeat: no-repeat;
    background-size: cover;
    padding:70px;
    min-height: 100vh;
    a{
        cursor: pointer;
        color: #fff;
        font-weight: 700;

        & :target, :hover{
            font-size: 20px;
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

`

export const PaginationArea = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 100%;
`