import styled from "styled-components"

export const CardArea = styled.div`
    width: 15vw;
    height: 35vh;
    border:7px solid rgb(177,80,12);
    box-shadow:7px 7px rgba(43,124,42, 0.7);
    background-image: url('https://i.pinimg.com/736x/9c/c5/34/9cc53484ef3d0440cff42e2ef7ed1f33.jpg');
    background-size: cover;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    @media screen and (max-device-width : 480px){
        width: 85%;
        height: 33vh;
    }

    @media screen and (min-device-width : 481px) and (max-device-width : 800px){
        width: 20vw;
        height: 40vh;
    }
`
export const ImgContainer = styled.div`
    width: 100%;
    overflow: hidden;
    
    img{
        width: 100%;
    }
`

export const ImageButtonArea = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    img{
        width: 50%;
        cursor: pointer;
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

    @media screen and (max-device-width : 480px){
        height: 27%;
    }

    @media screen and (min-device-width : 481px) and (max-device-width : 800px){
        padding: 1vw;
    }
`
