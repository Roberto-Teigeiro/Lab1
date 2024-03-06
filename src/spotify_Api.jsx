import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { useState, useCallback } from 'react';

const SpotifyApi = (client_secret, client_id) =>{
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
  
    const fetchData = useCallback(async ( e) => {
        e.preventDefault();
        setIsLoading(true);
        try {
          const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: `grant_type=client_credentials&client_id=df4b93c96a5a4bf6b9b8a03bc8fa79b7&client_secret=574e275747a24d2a80471b85e2af29d9`
          };
          
          const endpoint_spotify = "https://accounts.spotify.com/api/token";
          const response = await fetch(endpoint_spotify, requestOptions);
          console.log(response)
          if (!response.ok) {
            throw new Error('Something went wrong...');
          }
          const json = await response.json();
          const token = json.access_token
          console.log(token)
          setData(json); 
        } catch (error) {
          setError(error);
        } finally {
          setIsLoading(false);
        }
      }, []); 

      const handleSubmit = () =>{
            
      }

    return(
    <div>
        <form onSubmit={fetchData}>
        <input style={{ borderRadius: "15px" }} className="col s3 card-panel white " placeholder='Escribe la cancion que quieres bucar por medio de la api'></input>
        <input style={{ borderRadius: "15px" }} className="col s3 card-panel white " placeholder='Escribe la cancion que quieres bucar por medio de la api'></input>
        <button type="submit">Fetch Data</button>
        </form>


      
      {isLoading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
    </div>
    )
}

export default SpotifyApi