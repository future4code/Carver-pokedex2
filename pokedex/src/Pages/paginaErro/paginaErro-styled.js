import react from "react"
import styled from "styled-components"


export const ContainerGeral = styled.div`
    background-image: url("https://i2.wp.com/i.imgur.com/lUYsZol.gif");
    background-repeat:no-repeat;
    background-size: 100%;   
    height: 690px;


    .ContainerErro{
    /* display: flex;
    justify-content : center;
    } */
}
    .CardErro{
        
background-color: rgba(172,129,74, 0.5);
width: 520px;
height: 500px;
margin-left: 280px;
border:7px solid green;
border-radius: 50px;



    }

.textoErro{
    font-size: 90px;
    color: white;
    background-color: rgba(186,94,31,0.3);
    border-radius: 50px 50px 0px 0px;
}
.textoErro:hover{
    background-color: rgba(0,255,0,0.5);
}
.piadinha{
    font-size: 10px;
    background-color: rgba(186,94,31,0.3);
    height:192px;
    border-radius: 0px 0px 50px 50px;
}
.piadinha:hover{
    background-color: rgba(186,94,31,0.5);
    margin-left: 15px;
    font-size: 40px;
    color:green;
}
`
