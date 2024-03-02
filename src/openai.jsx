import openai_img_api from "./imgs/openai_api_img.png"
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark, style } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const Openai = () => {

    
    const codeString = `
    function miFuncion(mensaje) { 
      const endpoint_ai = "https://api.openai.com/v1/chat/completions"; 
      const opciones = { 
        method: 'POST', 
        headers: { 
          'Content-Type': 'application/json',
          'Authorization': 'Bearer (api key)' 
        }, 
        body: JSON.stringify({ 
          model: 'gpt-3.5-turbo', 
          messages: [{"role": "user", "content": mensaje}] 
        }) 
      }; 
    
      let answerChatGPT = fetch(endpoint_ai, opciones)
        .then(function(respuesta) { 
          return respuesta.json(); 
        })
        .then(function (j) { 
          const answer = document.createElement('div'); 
          answer.textContent = j.choices[0].message.content; 
          respuesta.appendChild(answer); 
        }); 
    }
    `;

    return (




		<div class="center-align">
            <h2 class="materialize-green-text">Tutorial como consumir el api de openAI usando nodejs: </h2>
            
            <p> Primordialmente para utilizar la API de OpenAI tenemos que definir la URL del endpoint de la API. 
				Posteriormente realizamos la función en la cual configuraremos las opción para la solicitud HTTP, 
				incluiremos la clave API y el objeto. 
			</p>
			
            <img/>
            <p></p>


        <div className="container"> 
            <div className="left-align"> 
                    <SyntaxHighlighter 
                        language="javascript" 
                        style={atomOneDark} 
                    >
                        {codeString}
                    </SyntaxHighlighter>
                </div>
        </div>




        </div>







	);
};
export default Openai