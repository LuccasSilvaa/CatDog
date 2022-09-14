import styled from 'styled-components'

export const Dogs = styled.div`


height: 30rem;
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%,-50%);
display: flex;
align-items: center;
flex-direction: column-reverse;
justify-content: space-around;

button{
  background-color: cornflowerblue;
 border: 1px solid black;
 color: white; 
 width: 7rem;
 height: 3rem;
 border-radius: 5px;
 box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25);
}

img{
  border: 1px solid black;
  border-radius: 5px;
 box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25);
  width: 20rem;
  height: 20rem;
}
`