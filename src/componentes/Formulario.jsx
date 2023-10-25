import React from 'react'
import styled, { keyframes } from "styled-components";

export const Formulario=()=>{
    return(
        <FormContainer>
          <Titulo>
            Registro de producto
          </Titulo>
      <Form>
        <Input
          type="text"
          placeholder="Código Interno"
          name="codigoInterno"
          
        />
        <Input
          type="text"
          placeholder="Nombre"
          name="nombre"
         
        />
        <Input
          type="text"
          placeholder="Nombre Alternativo"
          name="nombreAlternativo"
          
        />
        <Input
          type="text"
          placeholder="Descripcion"
          name="descripcion"
          
        />
        <Input
          type="text"
          placeholder="Modelo"
          name="modelo"
          
        />
        <Input
          type="text"
          placeholder="Unidade de medida"
          name="unidadMedida"
          
        />
        <Input
          type="text"
          placeholder="¿Posee IGV?"
          name="poseeIgv"
          
        />
        <Input
          type="number"
          placeholder="Categoria Id"
          name="categoriaId"
          
        /><Input
        type="text"
        placeholder="Marca"
        name="marca"
        
      />
      <Input
          type="text"
          placeholder="Precio"
          name="precio"
          
        />
        <Input
          type="date"
          placeholder="Fecha de Vencimiento"
          name="fechaVencimiento"
          
        />
        <Input
          type="number"
          placeholder="Unidades"
          name="unidad"
          
        />
        <Input
          type="text"
          placeholder="Descripcion de venta"
          name="descripcionVenta"
          
        />
        <Input
          type="text"
          placeholder="Factor"
          name="factor"
          
        />
        <Input
          type="text"
          placeholder="Precio 1"
          name="precio1"
          
        />
        <Input
          type="text"
          placeholder="Precio 2"
          name="precio2"
          
        />
        <Input
          type="text"
          placeholder="Precio 3"
          name="precio3"
          
        />
        <Input
          type="text"
          placeholder="Stock"
          name="stock"
          
        />
        <Input
          type="file"
          placeholder="Imagen"
          name="imagen"
          
        />
        <Input
          type="number" min="1" max="100"
          placeholder="En Descuento"
          name="enDescuento"
          
        />
        <Input
          type="number"
          placeholder="Decuento"
          name="descuento"
          
        />



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
margin-top:30px;
  padding-top:600px;
  animation: ${slideIn} 1.5s ease-in-out;

 
`;
const Titulo=styled.h1`
 align-items:center;
 justify-content:center;
 text-align:center;
 padding-bottom:20px;
 text-decoration:aliceblue;
  
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  margin-bottom: 10px;
  padding: 10px;
  font-size: 16px;
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