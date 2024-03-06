import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import SpotifyApi from './spotify_Api';
const Spotify = () => {
    
    const codeString = `
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: 'grant_type=client_credentials&client_id=df4b93c96a5a4bf6b9b8a03bc8fa79b7cc&client_secret=574e275747a24d2a80471b85e2af29d9'
    
    };
      const endpoint_spotify="https://accounts.spotify.com/api/token";
    `;
    const customStyle = {
        fontSize: '1rem',
      };
      
    
    return (
        <div className="center-align">
            
            <br/><br/><br/><br/>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Spotify_logo_without_text.svg/2048px-Spotify_logo_without_text.svg.png" width="15%" alt=""/>
            <h1 className="green-text text-darken-2">API de Spotify</h1>
            <div className="divider">
            

            </div>
            <h3>Como se consume la API de Spotify usando NodeJS</h3>
            <SyntaxHighlighter language="javascript" style={atomOneDark} customStyle={customStyle}>
                      {codeString}
            </SyntaxHighlighter>
            <SpotifyApi/>
            
        
        
        </div>
    )

}

export default Spotify