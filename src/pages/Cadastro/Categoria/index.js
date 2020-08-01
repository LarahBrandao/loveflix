import React, { useState, useEffect } from 'react';
import { FiTrash2 } from 'react-icons/fi';
import PageDefault from '../../../components/PageDefault';
import { useHistory } from 'react-router-dom';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import useForm from '../../../hooks/useForm';
import categoriasRepository from '../../../repositories/categorias';
import './styles.css';


function CadastroCategoria() {
  const URL = window.location.hostname.includes('localhost')
  ? "http://localhost:8080/categorias"
  : "https://loveflix-server.herokuapp.com/categorias"
  
  const valoresIniciais = {
    titulo: '',
    descricao: '',
    cor: '#141414',
  }

  const { handleChange, values, clearForm } =  useForm(valoresIniciais);
  const [categorias, setCategorias] = useState([]);
  const history = useHistory();

  useEffect( () => {
    fetch(URL).then(async(respostaDoServer) => {
      if(respostaDoServer.ok) {
        const resposta = await respostaDoServer.json();
        setCategorias(resposta);
        return;
      }
    } );
  },[] );
  
  async function handleDeleteCategoria(id) {
      try {
       await fetch(`${URL}/${id}`, {
         method: 'DELETE',
       });
       console.log("------------" + id);
       setCategorias(categorias.filter(categoria => categoria.id !== id));
     } catch (err) {
       alert('Erro ao deletar caso, tente novamente')
     } 
     alert('Categoria deletada com sucesso!')
   }
  


  return (
  
  <PageDefault>
        
    <h1>Cadastro de Categoria: {values.titulo} </h1>

  <form onSubmit={function handleSubmit(infosDoEvento) {
          infosDoEvento.preventDefault();
          setCategorias([
            ...categorias,
            values
          ]);
          clearForm();

          categoriasRepository.create({
            titulo: values.titulo,
            descricao: values.descricao,
            cor: '#141414'
          })
          .then( () => {
            console.log('Cadastrou com sucesso')
            history.push('/');
          });
        }}>

    <FormField
        label="Nome da Categoria"
        name="titulo"
        value={values.titulo}
        onChange={handleChange}
    />

    <FormField
      label="Descrição"
      type="textarea"
      name="descricao"
      value={values.descricao}
      onChange={handleChange}
    />   

{/*     <FormField 
      label="Cor:"
      type="color"
      name="cor"
      value={values.cor}
      onChange={handleChange}
    /> */}

          <Button>
            Cadastrar
          </Button>

        </form>

{/*         <ul>
          {categorias.map((categoria) => {
            return(
              <li key={`${categoria.titulo}`}>  
              {categoria.titulo}
              </li>
             );
          })}
        </ul> */}

<div className="container">


<h1>Categorias Cadastradas</h1>

<ul>
  {categorias.map(categoria => (
    <li key={categoria.titulo}>
      <strong>Titulo</strong>
      <p>{categoria.titulo}</p>

      <strong>Descrição</strong>
      <p>{categoria.descricao}</p>

{/*       <strong>Cor</strong>
      <p>{categoria.cor}</p> */}


      <button onClick={() => handleDeleteCategoria(categoria.id)}>

        <FiTrash2 size={20} />
      </button>
    </li>
  ))}

</ul>
</div>


      </PageDefault>
    );
  }

export default CadastroCategoria;