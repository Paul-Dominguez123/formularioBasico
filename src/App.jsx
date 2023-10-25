import styled, { keyframes } from 'styled-components'
import './App.css'
import { useState , useEffect} from 'react';
import { Formulario } from './componentes/Formulario';

export function App() {
  const[showModal,setShowModal]=useState(false);
  const[showModal2,setShowModal2]=useState(false);

  function openModal2(){
    setShowModal2(true);
    setTimeout(()=>{
      setShowModal2(false)
    },3000)
  }

  const closeModal=()=>{
    setShowModal(false);
  }
  //puedes reducir codigo con:
  function displayModal(){
    setShowModal(!showModal);
  }
  return (
    <>
    
      <PrincipalConteiner>
        
        <Button1 onClick={displayModal}>Abrir Formulario</Button1>
        {showModal && <Modal>
          <Formulario/>
          <OtroDiv>
          <Button1 onClick={openModal2}>Guardar</Button1>
          {showModal2 && <Modal2>
              guardanding
            </Modal2>}
          <Button1 onClick={displayModal}>
            cerrar Formulario
          </Button1>
          </OtroDiv>
          </Modal>}
          
      </PrincipalConteiner>
      
    </>
  )
}

const slideIn=keyframes`
  from{
    transform:translateY(-100%);
  }
  to{
    transform:tranlateY(0);
  }
`;

const PrincipalConteiner = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column-reverse;
  justify-content: center;
  align-items: center;
`;

const Button1 = styled.button`
  height: 57px;
  width: 300px;
  background-color: #a4cba1;
  
  border: 0px;
  margin-bottom: 10px; 
  cursor:pointer;
  transition:background-color 0.5s ease;

  &:hover{
    background-color:blue;
    color:white;
  }
`;

const Modal = styled.div`
  background-color:rgb(118, 211, 28);
  
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  border-radius: 10px;
  border: 0px;
  animation:${slideIn} 1.5s ease-in-out;
  @media(max-width:700px){
    width:100vw;
    background-color:rgb(118, 211, 28);
  
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  border-radius: 10px;
  border: 0px;
  
  }
`;
const Modal2 = styled.div`
  background-color:rgb(118, 211, 28);
  width:40vw;
  height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed; 
  top: 50%;
  left: 50%; 
  transform: translate(-50%, -50%); 
  border-radius: 10px;
  border: 0px;
  @media(max-width:768px){
    width:70vw;
    height:30vh;
  }

`;

const OtroDiv=styled.div`
  width:100%;
  display:flex;
  flex-direction:row;
  justify-content:center;
  align-items:center
`;


