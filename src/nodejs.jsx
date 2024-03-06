
const Nodejs = () => {

    
    
    return (
        <div className="center-align">
            <h1 className="materialize-blue-text"> Tutorial Node.js y uso de APIs  </h1>
            <img src="https://kinsta.com/wp-content/uploads/2021/09/nodejs-official-logo.jpg" className="responsive-img" width="40%" alt="" /><br/>
            <h5>Para comenzar a utilizar NodeJS, primero descargalo!</h5>
            <a className="waves-effect waves-light btn" href="https://nodejs.org/en/download">Descarga nodeJS!</a>
            <blockquote>
                Para comenzar a utilizar NodeJS, asegurate que la instalacion haya terminado correctamente.
            </blockquote>

            <div className="card-panel black-text text-darken-2">Primero, Que es Node.js?</div>
            <p className="flow-text">Node.js es un entorno de ejecución para JavaScript. Antes, JavaScript solo funcionaba dentro de los navegadores web, pero con Node.js, puede ejecutarse en las computadoras directamente, no limitándose a la web.

                Node.js fue creado por los desarrolladores originales de JavaScript para ampliar sus capacidades. Ahora, JavaScript puede hacer más que solo cosas en una página web. Con Node.js, puedes usar JavaScript para construir programas de computadora reales, como aplicaciones independientes. </p>
            <div className="card-panel #dcedc8 light-green lighten-4 black-text text-darken-5">Y que es una API?</div>
            <p className="flow-text">Una API, o interfaz de programación de aplicaciones, funciona como un conjunto de reglas establecidas que permiten que diversas aplicaciones se comuniquen de manera efectiva a través de <span className="red-text">solicitudes</span>. Es como un mediador que facilita la transferencia de datos entre sistemas diferentes mediante el intercambio de solicitudes y respuestas. Esto resulta útil para las empresas, ya que les permite compartir sus datos y funciones de aplicaciones con desarrolladores externos, socios comerciales y diferentes departamentos internos.</p>
            <div className="card-panel #80cbc4 teal lighten-3 lighten-4 black-text text-darken-5">Solicitudes, Que es eso?</div>
            <p>Existen distintos tipos de solicituted HTTP y funcionan para distintas cosas</p>
            <table className="highlight centered">
        <thead>
            <tr>
                <th>Metodo HTTP</th>
                <th>Descripción</th>
            </tr>
        </thead>

        <tbody>
            <tr>
                <td>POST</td>
                <td>Crea un recurso nuevo.</td>
            </tr>
            <tr>
                <td>GET</td>
                <td>Recupera un recurso.</td>
            </tr>
            <tr>
                <td>PUT</td>
                <td>Actualiza un recurso existente.</td>
            </tr>
            <tr>
                <td>DELETE</td>
                <td>Suprime un recurso.</td>
            </tr>
        </tbody>
    </table>
            <p> En este tutorial veremos dos tipos de solicitudes HTTP utilizadas para las APIs:</p>
            <div className="row">
            <div className="col s6">
                <div className="card-panel green black-text">GET</div>
                <p>El método HTTP GET solicita una representación del recurso especificado. Las solicitudes GET solo deben utilizarse para solicitar datos (no deben incluir datos).<br/><span className="green-text">Uso principal:</span> Se utiliza para solicitar datos del servidor.</p>
            </div>
            <div className="col s6">
            <div className="card-panel blue black-text">POST</div>
            <p>El método HTTP POST envía datos al servidor. <br/><span className="blue-text">Uso principal:</span> Se utiliza para enviar datos al servidor para crear o actualizar recursos.</p>
            </div>
            </div>


            
            
            
            
            
            
        </div>
    )

}

export default Nodejs