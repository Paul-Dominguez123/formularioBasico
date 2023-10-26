import React from 'react'
import styled, { keyframes } from "styled-components";

export const Formulario=()=>{
    return(
        <FormContainer>
          <Titulo>
            Registro de producto
          </Titulo>
      <Form>
        <InputWrapper>  
        <Input
          type="text"
          placeholder="Código Interno"
          name="codigoInterno"
          
        />
        </InputWrapper>
        <InputWrapper>  
        <Input
          type="text"
          placeholder="Nombre"
          name="nombre"
         
        />
        </InputWrapper>
        <InputWrapper>  
        <Input
          type="text"
          placeholder="Nombre Alternativo"
          name="nombreAlternativo"
          
        />
        </InputWrapper>
        <InputWrapper>
        <Input
          type="text"
          placeholder="Descripcion"
          name="descripcion"
          
        />
        </InputWrapper>
        <InputWrapper>
        <Input
          type="text"
          placeholder="Modelo"
          name="modelo"
          
        />
        </InputWrapper>
        <InputWrapper>
        <Input
          type="text"
          placeholder="Unidade de medida"
          name="unidadMedida"
          
        />
        </InputWrapper>
        <InputWrapper>
        <Input
          type="text"
          placeholder="¿Posee IGV?"
          name="poseeIgv"
          
        />
        </InputWrapper>
        <InputWrapper>
        <Input
          type="number"
          placeholder="Categoria Id"
          name="categoriaId"
          
        />
        </InputWrapper>
        <InputWrapper>
        <Input
        type="text"
        placeholder="Marca"
        name="marca"
        
      />
      </InputWrapper>
      <InputWrapper>
      <Input
          type="text"
          placeholder="Precio"
          name="precio"
          
        />
        </InputWrapper>
        <InputWrapper>
        <Input
          type="date"
          placeholder="Fecha de Vencimiento"
          name="fechaVencimiento"
          
        />
        </InputWrapper>
        <InputWrapper>
        <Input
          type="number"
          placeholder="Unidades"
          name="unidad"
          
        />
        </InputWrapper>
        <InputWrapper>
        <Input
          type="text"
          placeholder="Descripcion de venta"
          name="descripcionVenta"
          
        />
        </InputWrapper>
        <InputWrapper>
        <Input
          type="text"
          placeholder="Factor"
          name="factor"
          
        />
        </InputWrapper>
        <InputWrapper>
        <Input
          type="text"
          placeholder="Precio 1"
          name="precio1"
          
        />
        </InputWrapper>
        <InputWrapper>
        <Input
          type="text"
          placeholder="Precio 2"
          name="precio2"
          
        />
        </InputWrapper>
        <InputWrapper>
        <Input
          type="text"
          placeholder="Precio 3"
          name="precio3"
          
        />
        </InputWrapper>
        <InputWrapper>
        <Input
          type="text"
          placeholder="Stock"
          name="stock"
          
        />
        </InputWrapper>
        <InputWrapper>
        <Input
          type="file"
          placeholder="Imagen"
          name="imagen"
          
        />
        </InputWrapper>
        <InputWrapper>
        <Input
          type="number" min="1" max="100"
          placeholder="En Descuento"
          name="enDescuento"
          
        /></InputWrapper>
        <InputWrapper>
        <Input
          type="number"
          placeholder="Decuento"
          name="descuento"
          
        /></InputWrapper>



        </Form>
        </FormContainer>
    )

}
const slideIn=keyframes`
  from {
    transform: translateY(-100%);
  }
  to {
    transform: translateY(0);
  }
`;

const FormContainer = styled.div`
margin-top:30x;
  padding-top:20px;
  animation: ${slideIn} 1.5s ease-in-out;
  justify-content:center;
  align-items:center;
  align-self:center;
 
`;
const Titulo=styled.h1`
 align-items:center;
 justify-content:center;
 text-align:center;
 
 padding-bottom:20px;
 text-decoration:aliceblue;
 @media (max-width: 768px) {
    padding-top: 900px;
  }
  
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  
  transform: translate(53px, 10px);
  @media(max-width:700px){
    transform:translate(0px,10px)
  }
`;
const InputWrapper = styled.div`
  width: calc(30% - 20px);
  margin: 10px;
  @media (max-width: 768px) {
    width: calc(50% - 20px);
  }

  @media (max-width: 480px) {
    width: calc(100% - 20px);
  }
`;

const Input = styled.input`
  margin-bottom: 10px;
  width:100%;
  padding: 10px;
  font-size: 16px;
  border-radius: 10px;
  border: 0px;
  
`;

const Button = styled.button`
  background-color: #4caf50;
  color: white;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #45a049;
  }
`;