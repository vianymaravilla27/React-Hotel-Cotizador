import React  from 'react'
import styled from '@emotion/styled';


const ContenedorResumen = styled.div`
    padding: 1rem;
    
    background-color: #00838F;
    color: #FFF;
    margin-top: 1rem;
`;
const Resumen = ({datos}) =>{
   
    const { adultos,menores,fechaInicio,fechaFin} = datos;

    if(adultos.trim() === '' || menores.trim() === '' || fechaInicio.trim() === ''  || fechaFin.trim() === '' ) return null;
    return(<ContenedorResumen>
        <h2>Resumen de cotizacion</h2>
            <ul>
                <li>Numero de Adultos: {adultos} </li>
                <li>Numero de Menores: {menores} </li>
                <li>Fecha Inicial: {fechaInicio} </li>
                <li>Fecha Final: {fechaFin} </li>
            </ul>
    </ContenedorResumen>
        );
}

export default Resumen;