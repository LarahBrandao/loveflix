import config from '../config';

const URL_CATEGORIES = `${config.URL_BACKEND}/categorias`;

function getAll() {

    return fetch(`${URL_CATEGORIES}`).then(async (respostaDoServidor) => {
         //return await respostaDoServidor.json();
         if (respostaDoServidor.ok) {
             const resposta =  await respostaDoServidor.json();
             return resposta
         }
 
         throw new Error('Não foi possível pegar os dados :(')
     } );
 }

function getAllWithVideos() {

   return fetch(`${URL_CATEGORIES}?_embed=videos`).then(async (respostaDoServidor) => {
        //return await respostaDoServidor.json();
        if (respostaDoServidor.ok) {
            const resposta =  await respostaDoServidor.json();
            return resposta
        }

        throw new Error('Não foi possível pegar os dados :(')
    } );
}

export default{
    getAllWithVideos,
    getAll
}