import { useState, useCallback } from 'react';



const SpotifyApi = () =>{
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [cancion, setCancion] = useState(""); 
    const [bearerToken, setBearerToken] = useState(""); 
    const [responseData, setResponseData] = useState(null);
    


   
    const fetchData = useCallback(
        async (e, cancion, bearerToken) => {
        e.preventDefault();
        setIsLoading(true);
            let json;
          try {
           
            const endpoint_spotify = `https://api.spotify.com/v1/search?q=${cancion}&type=track`;
            const requestOptions = {
              method: 'GET',
              headers: {
                'Authorization': `Bearer ${bearerToken}` 
              }
            };
        
          const response = await fetch(endpoint_spotify, requestOptions); 
          
          if (!response.ok) {
            throw new Error('Something went wrong...');
          }
          json = await response.json();
          console.log(json)
          const formattedJSON = JSON.stringify(json, null, '\t'); 
          setResponseData(formattedJSON); 
           console.log('Setting responseData'); // Check if this happens on hot save
          const token = json.access_token
          
          setData(token);
          setError("")           
        } catch (error) {
          setError(error);
        } finally {
          setIsLoading(false);
        }
      }, []); 



      const openJSONInNewTab = () => {
        const dataBlob = new Blob([responseData], { type : 'application/json' });
        const dataURI = window.URL.createObjectURL(dataBlob);
        window.open(dataURI, '_blank');
      };
   
    return(
    <div>
        <form onSubmit={(e) => fetchData(e,cancion, bearerToken)}>
        
        <span style={{ display: 'flex', alignItems: 'center', justifyContent:'center'}}>
        <span style={{ whiteSpace: 'nowrap' }}>https://api.spotify.com/v1/search?q=</span>  
        <input
    style={{ borderRadius: 15, textAlign: "center", marginLeft: 5 }}
    className="token card-panel white"
    placeholder='Busca una canción!'
    value={cancion}
    onChange={e => setCancion(e.target.value)}
  />
  <div style={{ display: 'flex', alignItems: 'center', justifyContent:'center'}}>&type=track</div>
</span>

        <input
          style={{ borderRadius: 15, textAlign: "center" }}
          className="client_id card-panel white"
          placeholder='Enter user token'
          value={bearerToken}
          onChange={e => setBearerToken(e.target.value)}
        />
        <br/><button  className="btn waves-effect waves-light" type="submit">Realizar llamada de api!</button>
      </form>

      
      {isLoading && <p>Cargando...</p>}
      {data && <p>Tu token es: {data}</p>}
      {error && <p>Error: {error.message}</p>}
      {responseData && <br/> && (
  <button  className="btn waves-effect waves-light" onClick={() => openJSONInNewTab()}>Ver la respuesta JSON!</button>
)}
    </div>
    )
}

export default SpotifyApi