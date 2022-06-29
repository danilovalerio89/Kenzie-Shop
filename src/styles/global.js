import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
* {
    margin: 0;
    padding:0;
    box-sizing: border-box;
    outline:0;    
    font-family: 'Inter', sans-serif;
}
:root{
    --black: #000000;
    --grey: #727272;
    --white: #ffffff;
    --blue-light: #0063CB;
    --blue-dark:#002D5D;
    --grey-background: #F0F0F0;
   
}
body{
    background-color: var(--grey-background)
}
h1{
    font-size: 1.8rem;
}
h2{
    font-size: 1.5rem;
}
h3{
    font-size: 1.1rem;
}
h4{
    font-size: 1rem;
}
p{
    font-size: 0.8rem;
}
button{
    cursor: pointer;
}
`;
