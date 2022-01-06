import react from "react";
import styled from "styled-components";
import { ContainerGeral } from "./header-styled";

const Header = () => {
    return(
        <ContainerGeral>
            <div className="container">
                <div className="item1">
                    <h2>Item 1</h2>
                </div>

                <div className="item2">
                    <h1>Esse é o header</h1>
                </div>

                <div className="item3">
                    <h2>Item 2</h2>
                </div>
            </div>
        </ContainerGeral>
    )
}

export default Header