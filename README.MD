El porqué de cada carpeta de manera desmenuzada:

📁 controllers/

Aquí van las funciones que responden a las peticiones HTTP.
Ejemplo: alguien hace un GET /books, entonces el controller decide qué hacer: llamar a un servicio, manejar errores y devolver la respuesta.
👉 Piensa en el controller como el mesero que recibe tu orden, la lleva a la cocina (service/modelo) y luego trae el plato al cliente (respuesta).

📁 models/

Normalmente aquí se manejan los datos y la comunicación con la base de datos.
En tu caso, como aún no tienes DB, usas un archivo .json (getBooks.json) que hace el papel de base de datos “falsa”.

📁 service/

Aquí pones la lógica de negocio.
El service decide cómo traer los libros (desde el JSON, o mañana desde Mongo o SQL).
👉 Así, si mañana cambias de JSON a MySQL, solo actualizas el service, no el controller.

📁 routes/

Aquí defines los endpoints.
Ejemplo: GET /books, POST /books, etc.
El router lo único que hace es decir: cuando llegue esta ruta, llama a este controller.

📁 interfaces/

Aquí defines contratos en TypeScript.
Ejemplo: cómo debe lucir un Book (id, title, author, etc).
👉 Esto te protege contra errores porque si intentas usar un libro sin title, TypeScript se queja.

📁 types/

Aquí defines tipos más generales, que no están ligados a un solo archivo, pero ayudan a mantener el proyecto más tipado y claro.

🔗 Conexión en el flujo

El cliente pide /books.

routes/books.ts detecta que esa ruta existe y llama al controller.

controllers/books.ts recibe la petición, y pide al service los datos.

service/getBooks.services.ts consulta los datos (desde el JSON).

controller recibe los datos del service, los empaqueta y responde al cliente.

Nota: La función uuid() genera un identificador único universal (UUID).
En este contexto, se usa para crear un valor único para el campo id de cada libro nuevo, asegurando que cada libro tenga un identificador distinto y no se repita.

npm install uuid -> dependencia
import { v4 as uuid } from 'uuid'; -> importacion
id: uuid() -> la manera de usarla


para correr proyecto: npm run listen