import React, {useState} from 'react'
import styled from '@emotion/styled';
import {obtenerMenores,obtenerMayores} from '../components/helper';



const Formulario = ({guardarResumen}) =>{
    const [datos, guardarDatos] = useState({
        adultos: '',
        menores: '',
        fechaInicio: '',
        fechaFin: ''
    });


    const { adultos,menores,fechaInicio,fechaFin} = datos;
    const [ error, guardarError ] = useState(false);
    const [ error2, guardarError2 ] = useState(false);


    const obtenerInformacion = e => {
        guardarDatos({
            ...datos,
            [e.target.name] : e.target.value
        })
    }

    const cotizarHotel = e => {
        e.preventDefault();
        
        let fecha1 = new Date(fechaInicio);
        let fecha2 = new Date(fechaFin)
        let resta = fecha2.getTime() - fecha1.getTime()
        let dias = Math.round(resta/ (1000*60*60*24))

        if(adultos.trim() === '' || menores.trim() === '' || fechaInicio.trim() === ''  || fechaFin.trim() === '' ) {
            guardarError(true);
            return;
        }

        if(dias  <=  0){
            guardarError2(true);
            return;
        }
        
        let preciomenores = obtenerMenores(menores);
        let precioadultos = obtenerMayores(adultos);
        console.log(preciomenores);
        console.log(precioadultos);

        let precioestimado = ((preciomenores+precioadultos)*dias);

        console.log(precioestimado);
        guardarResumen({
            cotizacion: precioestimado,
            datos
        });
        guardarError(false);
        guardarError2(false);


    }



    const Campo = styled.div`
    display: flex;
    margin-bottom: 1rem;
    align-items: center;
`;
const Label = styled.label`
    flex: 0 0 100px;
`;
const Select = styled.select`
    display: block;
    width: 100%;
    padding: 1rem;
    border: 1px solid #e1e1e1;
    -webkit-appearance: none;
`;
const Input = styled.input`
    display: block;
    width: 100%;
    padding: 1rem;
    border: 1px solid #e1e1e1;
    -webkit-appearance: none;
`;

const Boton = styled.button`
    background-color: #00838F;
    font-size: 16px;
    width: 100%;
    padding: 1rem;
    color: #fff;
    text-transform: uppercase;
    font-weight: bold;
    border: none;
    transition: background-color .3s ease;
    margin-top: 2rem;
    &:hover {
        background-color: #26C6DA;
        cursor: pointer;
    }
`;

const Error = styled.div`
    background-color: red;
    color: white;
    padding: 1rem;
    width:100%;
    text-align: center;
    margin-bottom: 2rem;
`;


    return(    

        <div class="input-field col s6">
           <form 
                onSubmit={cotizarHotel}
            >
                { error ? <Error>Todos los campos son obligatorios</Error>  : null }    
                { error2 ? <Error>La fecha final debe ser mayor que la inicial</Error>  : null }  
                    <Campo>
                        <Label  >Numero de Adultos: </Label>
                        <Select name="adultos" value={adultos} onChange={obtenerInformacion} >
                            <option value="">
                                --- Seleccione ---
                            </option>
                            <option value="0">
                                0
                            </option>
                            <option value="1">
                                1
                            </option>
                            <option value="2">
                                2
                            </option>
                            <option value="3">
                            3
                            </option>
                        </Select>
                    </Campo>
                    <Campo>
                        <Label>Numero de Menores: </Label>
                        <Select  name="menores" value={menores}  onChange={obtenerInformacion}>
                            <option value="">
                                --- Seleccione ---
                            </option>
                            <option value="0">
                                0
                            </option>
                            <option value="1">
                                1
                            </option>
                            <option value="2">
                                2
                            </option>
                            <option value="3">
                            3
                            </option>
                        </Select>
                    </Campo>
                    <Campo>   <Label>Fecha de Inicio</Label>
                            <Input name="fechaInicio" onChange={obtenerInformacion} value={fechaInicio}  type="date"></Input>
                            
                    </Campo>
                    <Campo>
                            <Label>Fecha de Termino</Label>
                            <Input name="fechaFin" onChange={obtenerInformacion} value={fechaFin}  type="date"></Input>
                    </Campo>

                    <div><Boton type="submit">Cotizar</Boton></div>
                   
                </form>
        </div>
   
        )
   }
   
   export default Formulario;