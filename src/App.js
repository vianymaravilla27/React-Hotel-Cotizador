import React, {useState} from 'react'
import Header from './components/Header';
import Footer from './components/Footer';
import Formulario from './components/Formulario';
import Resumen from './components/Resumen';
import Resultado from './components/Resultado';

import styled from '@emotion/styled';

const Contenedor = styled.div `
    max-width: 600px;
    margin: 0 auto;
`;

const COntenedorFormulario = styled.div`
  background-color: white;
  padding: 3rem;
`
;
function App() {
  const [resumen, guardarResumen] = useState({
    cotizacion:0,
    datos: {
      adultos: '',
      menores: '',
      fechaInicio: '',
      fechaFin:''
    }
  });

//extraer datis

const {datos,cotizacion} = resumen;

  return (
    <Contenedor>
   <Header titulo='Cotizador Hoteles'/>
  <COntenedorFormulario>
    <Formulario
      guardarResumen={guardarResumen}
    />
    <Resumen datos={datos}/> 
    <Resultado cotizacion={cotizacion} />
  </COntenedorFormulario>
   <Footer titulo2='Copyright '/>
   </Contenedor>
  );
}

export default App;
