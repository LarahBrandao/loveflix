import config from '../config';

const URL_VIDEOS = `${config.URL_BACKEND}/videos`;

function create(objetoDoVideo) {

   return fetch(`${URL_VIDEOS}`, {
       method: 'POST',
       headers: {
           'Content-type': 'application/json',
       },
       body: JSON.stringify(objetoDoVideo),
   })
   .then(async (respostaDoServidor) => {
        //return await respostaDoServidor.json();
        if (respostaDoServidor.ok) {
            const resposta =  await respostaDoServidor.json();
            return resposta
        }

        throw new Error('Não foi possível cadastrar os dados :(')
    } );
}

export default{
    create,
}