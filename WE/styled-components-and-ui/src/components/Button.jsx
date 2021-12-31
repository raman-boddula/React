import styled from "styled-components";

import 'antd/dist/antd.css';

export const Button = styled.button`
color:${(props)=>(props.theme==="light"?"#fe7e6d":"#feece9")};
background-color:${(props)=>(props.theme==="light"?"#feece9":"#fe7e6d")};
padding:10px 20px;
font-weight:bold;
border-radius:5px;
`;

export const Div = styled.div`
display:grid;
width:100%;
grid-template-columns: repeat(5,19%);
grid-gap:2%;
background:coral;

&>h5{
    color:black;
    font-family:nanospace;;
}`;

export const Input = styled.input`
padding:20px;


`;
export const contentStyle={
  height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
}