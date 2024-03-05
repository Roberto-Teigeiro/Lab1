import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

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


    const customStyle = {

      fontSize: '1rem',
      

    };
    return (




		<div class="center-align">
            <h3 class="materialize-green-text">Tutorial como consumir el api de openAI usando nodejs: </h3>
            
            <p> Primordialmente para utilizar la API de OpenAI tenemos que definir la URL del endpoint de la API.<br/> 
				Posteriormente realizamos la función en la cual configuraremos las opción para la solicitud HTTP,<br/>
				incluiremos la clave API y el objeto. 
			</p>
			
            
            <p></p>


        <div className="container"> 
            <div className="left-align"> 
                    
            </div>
            
            
    <div class="row">
      
      <div class="col s8"><SyntaxHighlighter 
                      
                        language="javascript" 
                        style={atomOneDark} 
                        customStyle={customStyle}
                    >
                        {codeString}
        </SyntaxHighlighter>
        </div>
      <div class="col s4">Texto Aqui</div>
    </div>
          
        </div>




        </div>







	);
};
export default Openai