# Métodos HTTP

HTTP define un conjunto de métodos de petición para indicar la acción que se desea realizar para un recurso determinado.

Entre los principales tenemos: GET, POST, PUT, DELETE, HEAD, OPTIONS, TRACE.

Los dos primeros, lo hemos utilizado y definido en la etiqueta de un form. Con esto le estamos indicando como vamos a gestionar el envío de la información.

Con el método GET, los datos que se envían al servidor se escriben en la misma dirección URL. En la barra de direcciones lo veremos asi:

https://www.manalava.com/index.php?estudiante=Alava&carrera=AppsWebs&profesor=Munoz

Toda la información introducida por el usuario (los llamados “parámetros URL”) se transmiten tan abiertamente como el URL en sí mismo


## Método POST

Ahora ahondaremos en el método POST. Este método introduce los parámetros en la solicitud HTTP para el servidor. Por ello, no quedan visibles para el usuario. Además, la capacidad del método POST es ilimitada.
> El método POST es aconsejable cuando el usuario debe enviar datos o archivos al servidor, como, por ejemplo, cuando se rellenan formularios o se suben fotos.

### Ventajas del método POST:
En lo relativo a los datos, como, por ejemplo, al rellenar formularios con nombres de usuario y contraseñas, el método POST ofrece mucha discreción. Los datos no se muestran en el caché ni tampoco en el historial de navegación. La flexibilidad del método POST también resulta muy útil: no solo se pueden enviar textos cortos, sino también otros tipos de información, como fotos o vídeos.

### Desventajas del método POST:
Cuando una página web que contiene un formulario se actualiza (por ejemplo, cuando se retrocede a la página anterior) los datos del formulario deben transferirse de nuevo (puede que alguna vez hayas recibido una de estas advertencias). Por este motivo, existe el riesgo de que los datos se envíen varias veces por error, lo que, en el caso de una tienda online, puede dar lugar a pedidos duplicados. Pero esto es solucionable, pero es un aspecto que hay que tener supremamente en cuenta.

## Método PUT
El metodo PUT, crea un nuevo elemento o reemplaza una representación del elemento de destino con los datos de la petición.

**Ejemplos**

Cambiar los detalles de un PlayList

Endpoint https://api.spotify.com/v1/playlists/{playlist_id}

HTTP Method PUT

OAuth Required

```
{

"name": "Updated Playlist Name",

"description": "Updated playlist description",

"public": false

}
```

## Método DELETE
Como su nombre lo indica, nos permite la eliminación de un recurso específico.

API Reference 	Remover los Items de una PlayList

Endpoint 			https://api.spotify.com/v1/playlists/{playlist_id}/tracks

HTTP Method 	DELETE

OAuth Required


# Headers y Body en la función FETCH()
>La API Fetch, proporciona una interfaz JavaScript para acceder y manipular partes del canal HTTP, tales como peticiones y respuestas. También provee un método global `fetch()`que proporciona una forma fácil y lógica de obtener recursos de forma asíncrona por la red.

## Headers
La interfaz Headers te permite crear tus propios objetos de headers mediante el constructor Headers(). Un objeto headers es un simple multi-mapa de nombres y valores.

En mi aplicacion de Spotify, los utilice ya que sin estos no nos permite realizar la conexion a la API.
```
let myHeaders = new Headers();

myHeaders.append("Authorization", "Bearer "+ data.access_token+"")
```

>Todos los métodosde de headers lanzan un TypeError si un nombre de cabecera no es un nombre de cabecera HTTP válido. Las operaciones de mutación lanzarán un TypeError si hay un guarda inmutable

## Body
Tanto las peticiones como las respuestas pueden contener datos body. Body es una instancia de cualquiera de los siguientes tipos:

 - ArrayBuffer 
 - ArrayBufferView
 - Blob/File
 -  string
 - URLSearchParams
 - FormData
 
El mixin de Body define los siguientes metodos para extraer un body (implementado por Request and Response). Todas ellas devuelven una promesa que es eventualmente resuelta con el contenido actual.

En mi aplicacion de Spotify tenia que enviar el BODY con el header incrustado para poder realizar la autorizacion y autentificacion respectiva.

```
const optionsLogin = {
	method: 'POST',\
	headers: {	
		'Authorization': 'Basic ' + (Buffer.from(client_id + ':' + 
		client_secret).toString('base64')),
		'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
	},
	body: 'grant_type=client_credentials'
}
```
