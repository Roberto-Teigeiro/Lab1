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
  }
  `;
  const codeString2 = `
    const http = require('node:http');
    const querystring = require('node:querystring');
    const url = require('node:url');
  `;
  const codeString3 = `
    const server = http.createServer(function(sol, res) {
    });
  `;

  const codeString5= `
    server.listen('Puerto', 'IP', function() {
      console.log("Servidor escuchando");
    });
  
  `; 


  const customStyle = {

    fontSize: '1rem',
    

  };
  return (




  <div className="left-align">
    <h3 className="materialize-blue-text center-align" color = "blue">Como consumir el api de openAI usando nodejs: </h3>
          
    <p > Primordialmente para utilizar la API de OpenAI tenemos que definir la URL del endpoint de la API.
      Posteriormente realizamos la función en la cual configuraremos las opción para la solicitud HTTP,
      incluiremos la clave API y el objeto. 
    </p>
    
          
    <p>
      Luego realizaremos el fetch para pedir la solicitud y poder manejar el objeto con funciones en modo promesa.
    </p>

  
    <div className="container">     
      <div className="row">
        <div className="col s8 left-align" > 
          <SyntaxHighlighter language="javascript" style={atomOneDark} customStyle={customStyle} >
            {codeString}
          </SyntaxHighlighter>
        </div>

        <div className="col s9"> 
          Ejemplo de código utilizando la API de ChatGPT para mandarle un mensaje al chatbot y obtener la respuesta.
        </div>
      </div>
    </div>

      <h3> Usar un servidor HTTP utilizando Node.js </h3>
      <p>
        Para manejar las solucitudes HTTP, cadenas de consulta y analizar cadenas URL importamos los modulos "http", "querystring" y "url" del Node
      </p>
      <div className="container">  
        <div className="row">
          <div className="col s8 left-align" > 
            <SyntaxHighlighter language="javascript" style={atomOneDark} customStyle={customStyle} >
              {codeString2}
            </SyntaxHighlighter>
          </div>
        </div>
      </div>

      <p>
        Creamos el servidor HTTP utilizando createServer que se encuentra en el módulo http que importamos. 
        Dentro de la función pondremos lo que deseemos que aparezca en pantalla
      </p>
      <div className="container">  
        <div className="row">
          <div className="col s8 left-align" > 
            <SyntaxHighlighter language="javascript" style={atomOneDark} customStyle={customStyle} >
              {codeString3}
            </SyntaxHighlighter>
          </div>
        </div>
      </div>

      <p>
        Por ultimo configuramos el servidor para que escuche en el puerto e IP que necesitemos. 
        En el código de ejemplo se imprimira un mensaje en la consola para verificar que el código este escuchando 
      </p>
      <div className="container">  
        <div className="row">
          <div className="col s8 left-align" > 
            <SyntaxHighlighter language="javascript" style={atomOneDark} customStyle={customStyle} >
              {codeString5}
            </SyntaxHighlighter>
          </div>
        </div>
      </div>

  </div>
	);
};
export default Openai