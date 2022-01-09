import styled from "styled-components";

export const ContainerGeral = styled.div`

background-color:red;
width: 100%;
height: 90px;

display: grid;
grid-template-columns: repeat(3,1fr);
flex-direction: row;
justify-content: space-between;
align-items: center;
justify-items: center;

div{
    width: 27%;
}

img{
    cursor: pointer;
}

button{
    width: 20%;
}

`

export const ImgButton = styled.img`
    width: 50%;
    
`

export const Logo = styled.img`
    width: 100%;
`

export const ConteinerButton = styled.div`
      display:flex;  
      flex-direction:row;  
      color:white;   
      font-size: 20px;
`