import React from 'react';
import Select from 'react-select';
import './Select.css';

const suppliers = [
  {lablel: 'Inicio', value: 'Inicio'},
  {lablel: 'Moneda divisa', value: 'Moneda divisa'},
  {lablel: 'Cripto moneda', value: 'Cripto moneda'},
  {lablel: 'Graficcos', value: 'Graficcos'},
  {lablel: 'Sobre nosotros', value: 'Sobre nosotros'}
]

export default function SelectOption() {

  const handleSelectChange = ({value}) =>{
    console.log(value)
  }

  return (
    <div>
       <Select
          options = {suppliers} /*es unapropiedad que recibe un array de objetos*/
          onChange = {handleSelectChange}
       />
    </div>
  )
}

