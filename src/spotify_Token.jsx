import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { useState, useCallback } from 'react';



const SpotifyToken = () =>{
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [clientID, setClientID] = useState(""); 
    const [clientSecret, setClientSecret] = useState(""); 
    const [respondeCode, setRespondeCode] = useState(null); 



    const customStyle = {
        fontSize: '1rem',
      };

   
    const fetchData = useCallback(
        async (e, clientID,clientSecret) => {
        e.preventDefault();
        setIsLoading(true);
            let json;
        
        try {
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                body: `grant_type=client_credentials&client_id=${clientID}&client_secret=${clientSecret}`
              };
              
          
          const endpoint_spotify = "https://accounts.spotify.com/api/token";
          const response = await fetch(endpoint_spotify, requestOptions);
          if (!response.ok) {
            throw new Error('Something went wrong...');
          }
          console.log("imprimiendo!")
          json = await response.json();
          setRespondeCode(JSON.stringify(json))
          const token = json.access_token
          console.log("imprimiendo!")
          console.log(JSON.stringify(json))
          setData(token);
          setError("")           
        } catch (error) {
          setError(error);
        } finally {
          setIsLoading(false);
                   
        }
      }, []); 

   
    return(
    <div>
        <form onSubmit={(e) => fetchData(e, clientID,clientSecret)}>
        <input
          style={{ borderRadius: 15, textAlign: "center" }}
          className="token col s3 card-panel white"
          placeholder='Enter client ID'
          value={clientID}
          onChange={e => setClientID(e.target.value)}
        />
        <input
          style={{ borderRadius: 15, textAlign: "center" }}
          className="client_id col s3 card-panel white"
          placeholder='Enter client secret'
          value={clientSecret}
          onChange={e => setClientSecret(e.target.value)}
        />
        <button  className="btn waves-effect waves-light" type="submit">Obtener Token!</button>
      </form>

      
      {isLoading && <p>Cargando...</p>}
      {data && <p>Tu token es: {data}</p>}
      {error && <p>Error: {error.message}</p>}
      {respondeCode && <p>El resultado que nos dio spotify es:</p> && <SyntaxHighlighter language="javascript" style={atomOneDark} customStyle={customStyle}>
                      {respondeCode}
       </SyntaxHighlighter>}
    </div>
    )
}

export default SpotifyToken