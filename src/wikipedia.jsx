import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const Wikipedia = () => {
    const serverC = `
    const http = require('node:http');
    const server = http.createServer( );
    server.listen(3000, '127.0.0.1', function() {
        console.log("Servidor corriendo");
      });
    `;
    const serverA = `
    async function wikiData() {
        let today = new Date();
        let year = today.getFullYear();
        let month = String(today.getMonth() + 1).padStart(2, '0');
        let day = String(today.getDate()).padStart(2, '0');
        let url ="https://api.wikimedia.org/feed/v1/wikipedia/en/featured/{year}/{month}/{day}?query={queryParameter}";
    
    
        try {
            let response = await fetch(url, {
                headers: {
                    'Authorization': 'Bearer APIkey',
                    'Api-User-Agent': 'Conecta'
                }
            });
            let data = await response.json();
            //console.log(data)
            respuestaWiki = JSON.stringify(data.onthisday[0].pages[0].description, null, 2);
            res.writeHead(200, {'Content-Type': 'text/plain'});       
            res.end(respuestaWiki)
            
        } catch (error) {
            console.error('Error fetching Wikimedia data:', error);
            res.writeHead(500, {'Content-Type': 'text/plain'});
            res.end('Error fetching Wikimedia data');
        }
        
    }
    `;const serverB = `
    async function (req, res){
        async function wikiData(queryParameter){
            //el contenido de nuestra función previa
        }    
            if (req.url === '/wiki') {
            wikiData(); 
            } else {
            res.writeHead(404, {'Content-Type': 'text/plain'});
            res.end('Not Found');
            }
        }
    `;
   

const customStyle = {
    fontSize: '1rem',
    textAlign: 'left'
    };
    
    
    return (


        <div className="center-align">
            <h2>Conectar otra API a Node.js </h2>
            <h4> - Wikimedia - </h4>
            <p> Primero necesitamos crear el servidor, como muestra el código de abajo.
            Se inicializa una constante HTTP, que es donde correrá nuestra página; paso siguiente, una constante que inicialice el servidor en la dirección que le pasaremos a continuación.
            Normalmente, para casos de prueba se le da la dirección del localhost y una función que nos indique que está corriendo nuestra página</p>

            <SyntaxHighlighter language="javascript" style={atomOneDark} customStyle={customStyle}>
                      {serverC}
            </SyntaxHighlighter>
            
            <div className="row">
      
                <div className="col s8"><SyntaxHighlighter 
                                
                                    language="javascript" 
                                    style={atomOneDark} 
                                    customStyle={customStyle}
                                >
                                    {serverA}
                    </SyntaxHighlighter>
                </div>
                <div className="col s4">Como segundo paso, se hace la conexión con la API de Wikimedia, que es conectar para que te dé la respuesta en un JSON y así poder descomprimirlo para entregarle la respuesta al usuario cuando haga un query; mediante el parametro wiki
                y le das el título de la noticia del día. </div>
            </div>

            <p>Para saber si el usuario nos esta enviando el parámetro que necesitamos para llamar a la función, por lo que la encapulamos en otra función que nos servira en caso que nos envie wiki o por si no encuentra lo indicado. Esta función queda dentro del servidor que creamos previamente, dentro de http.createServer()</p>
          
            <SyntaxHighlighter language="javascript" style={atomOneDark} customStyle={customStyle}>
                        {serverB}
            </SyntaxHighlighter>
            
            
        
        </div>
            
            
            




    )

}

export default Wikipedia