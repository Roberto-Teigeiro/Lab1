import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
const Spotify = () => {

    
    
    return (
        <div class="center-align">
            
            <br/><br/><br/><br/>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Spotify_logo_without_text.svg/2048px-Spotify_logo_without_text.svg.png" width="5%"/>
            <h1 class="green-text text-darken-2">API de Spotify</h1>
            <div class="divider"></div>
            <h3>Como se consume la API de Spotify usando NodeJS</h3>
            <SyntaxHighlighter language="javascript" style={atomOneDark}>
            "hola", buenas tardes
            function = hola
            </SyntaxHighlighter>
        
        
        </div>
    )

}

export default Spotify