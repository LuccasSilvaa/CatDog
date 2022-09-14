import styled from 'styled-components'

export const Home = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  height: 30rem;
  width: 20rem;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  img{
    width: 16rem;
  }

`
export const Text = styled.div`
font-family: 'Alfa Slab One', cursive;
text-align: center;

`
export const Buttons = styled.div`


width: 17rem;
display: flex;
justify-content: space-between;

`
export const ButtonCat = styled.button`
 background-color: crimson;
 border: 1px solid black; 
 color: white; 
 width: 7rem;
 height: 3rem;
 border-radius: 5px;
 box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25);
`
export const ButtonDog = styled.button`
 background-color: cornflowerblue;
 border: 1px solid black;
 color: white; 
 width: 7rem;
 height: 3rem;
 border-radius: 5px;
 box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25);
`