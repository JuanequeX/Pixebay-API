import React, {useState, useEffect} from 'react';
import Formulario from './components/Formulario';
import ListadoImagenes from './components/ListadoImagenes';


function App() {
  //States principales
  const [busqueda, guardarBusqueda] = useState('');
  const [imagenes, guardarImagenes] = useState([]);
  const [pagina, guardarPagina] = useState(1);
  const [totalpaginas, guardarTotalPaginas] = useState(1);

  useEffect (() => {
    const consultaAPI = async () => {
      if(busqueda === '') return;
      const imagenesInPage = 32;
      const key = '20168587-1d3af76df69dcb802ebc4e57d';
      const url = `https://pixabay.com/api/?key=${key}&q=${busqueda}&per_page=${imagenesInPage}&page=${pagina}`;
      const respuesta = await fetch(url);
      const resultado = await respuesta.json();
      guardarImagenes(resultado.hits);
      //Calcular el total de paginas
      const calcularPaginas = Math.ceil(resultado.totalHits/imagenesInPage);
      guardarTotalPaginas(calcularPaginas);
      //Volver a la parte superior de la pagina
      const jumbotron = document.querySelector('.jumbotron');
      jumbotron.scrollIntoView({behavior:'smooth'});
    }
    consultaAPI();
  },[busqueda, pagina])

  //Definicion de la pagina anterior
  const paginaAnterior = () => {
    const nuevaPagina = pagina -1;
    if(nuevaPagina === 0) return;
    guardarPagina(nuevaPagina);
  }
  const paginaSiguiente = () => {
    const nuevaPagina = pagina +1;
    if(nuevaPagina > totalpaginas) return;
    guardarPagina(nuevaPagina);
  }

  return (
    <div className='container'>
      <div className='jumbotron'>
        <p className='lead text-center'>Buscador de Imágenes</p>
        <Formulario
          guardarBusqueda={guardarBusqueda}
        />
      </div>
      <div  className='row justify-content-center'>
      <ListadoImagenes
        imagenes={imagenes}
      />
      { (pagina === 1) ? null :
        (
          <button
            type='button'
            className='bbtn btn-info mr-1'
            onClick={paginaAnterior}
          >&laquo; Anterior </button>
        )
      }
      {(pagina === totalpaginas) ? null :
        (
          <button
            type='button'
            className='bbtn btn-info'
            onClick={paginaSiguiente}
          >Siguiente &raquo;</button>
        )
      }
      </div>
    </div>
  );
}

export default App;
