import styled from 'styled-components'

export const Cats = styled.div`

height: 35rem;
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%,-50%);
display: flex;
align-items: center;
flex-direction: column-reverse;
justify-content: space-around;

button{
  background-color: crimson;
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

