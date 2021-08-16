import styled from "styled-components";
import { Button,Input } from "reactstrap";
export const Container=styled.div`
width:100vw;
height:100vh;
display:flex;
align-items:center;
justify-content:center;
background-color:var(--bg-color);


`
 export const Card=styled.div`
 width:40%;
 height:15rem;
 display:flex;
 flex-direction:column;
 justify-content:center;
 align-items:center;
 margin:auto;
 padding:1rem;
 border-radius:17px;
 overflow:hidden;
 background-color:var(--white-color);
 box-shadow:0 0 20px rgba(0,0,0,.5);
 
 `
export const Title=styled.h2`
color: var(--title-color);
margin-bottom: 1.5rem;

`

export const InputBox=styled(Input)`
width: 20rem;
padding: .8rem;
border: none;
border: 1px solid #495057;
border-radius: 12px;

    &:focus{
        border: 1px solid var(--title-color);
        box-shadow: 0 0 2px rgba(0,0,0,.5)  !important;
        outline: none !important;
    }
`
export const LoginButton=styled(Button)`
background-color: var(--btn-color);
width:20rem;
margin-top: 1.5rem;
box-shadow: 0 10px 10px rgba(0, 0, 0, 0.08);
cursor: pointer;
border-radius: 10px;
transition: all 0.25s cubic-bezier(0.02, 0.01, 0.47, 1);

    &:hover {
    box-shadow: 0 15px 15px rgba(0, 0, 0, 0.16);
    transform: translate(0, -5px);
    background-color: var(--bg-color);
    }
`