import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import SpotifyToken from './spotify_Token';

import SpotifyApi from './spotify_Api'

const Spotify = () => {
    
    const codeString = `
    const requestOptions = {
        method: 'POST', //Fijate aqui que estamos utilizando el metodo POST
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: 'grant_type=client_credentials&client_id=CLIENTID&client_secret=CLIENTSECRET'
    
    };
      const endpoint_spotify="https://accounts.spotify.com/api/token";
      const response = await fetch(endpoint_spotify, requestOptions);
    `;
    const customStyle = {
        fontSize: '1rem',
      };
      const codeString2 = `
       const endpoint_spotify = 'https://api.spotify.com/v1/search?q={cancion}&type=track';
      const requestOptions = {
       method: 'GET',
       headers: {
       'Authorization': \`Bearer {bearerToken}\` 
       }
       };
       
       const response = await fetch(endpoint_spotify, requestOptions); 
       `;
      
      
    return (
        <div className="center-align">
            
            <br/><br/><br/><br/>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Spotify_logo_without_text.svg/2048px-Spotify_logo_without_text.svg.png" width="15%" alt=""/>
            <h1 className="green-text text-darken-2">API de Spotify</h1>
            <div className="divider">
            

            </div>
            <h3>Como se consume la API de Spotify usando NodeJS</h3>
            <h4>Este es un ejemplo de el codigo para obtener tu token de spotify:</h4>
            <h3>primero crea una app desde spotify para obtener tus parametros que te pedire</h3>
            <a className="waves-effect waves-light btn" href="https://developer.spotify.com/dashboard" target="_blank" rel="noreferrer">Crea tu app de spotify!</a>
            <SyntaxHighlighter language="javascript" style={atomOneDark} customStyle={customStyle}>
                      {codeString}
            </SyntaxHighlighter>
            <p>Si lo quieres correr en nodeJS, asegurate de cambiar en el endpoint las palabras CLIENTID y CLIENTSECRET por tus valores que conseguiste anteriormente</p>
            <p className='green-text'>Haz una prueba aqui mismo! <br/>Ingresa tus datos:</p>
            <SpotifyToken/>
            <div className='row'>
                <p>Despues, vamos a hacer una busqueda con nuestro token!</p>
            <div class="col s12">
                <SpotifyApi/>
            </div>
            
            <div class="col s8">
            <SyntaxHighlighter language="javascript" style={atomOneDark} customStyle={customStyle}>
                      {codeString2}
            </SyntaxHighlighter>
                    
            </div>
            <div class="col s4 center-align">
            Este es el codigo que estamos utilizando para hacer la llamada api
                    
            </div>

            </div>
        
        
        </div>
    )

}

export default Spotify