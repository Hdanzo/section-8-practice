## App para Agregar Usuarios

Dentro de este repositorio encontran un archivo (index.css) donde estan todos los estilos que necesitaran.

Criterios a tener en cuenta

1. Crear un form con los siguientes elementos:

a) Un campo para el `Nombre de usuario`

b) Un campo para la `Edad`

c) Un boton de `Submit`

2. Al hacer `Submit` del `form`:

a) Agregar a una lista los valores y desplegarlos bajo el formulario con el formato `"Nombre" ("Edad" años)`. La lista se debe actualizar con el nuevo usuario agregado.

b) Limpiar los campos.

3. Al hacer click en el boton de `Submit`, se debe `validar`:

a) Que ambos campos no esten vacios, agregar solament espacios a los campos debe de ser considerado como input vacio tambien.

b) Que la edad no sea menor a 1

Mostrar un mensaje de error en caso de no pasar la validacion.

4. Estilizar la aplicacion con las clases que se encuentran en el index.css proveido.

a) Dado el ejemplo de como se tiene que ver la aplicacion, utilizar las clases proveidas en el index.css para que se vea como en el ejemplo. 

b) Separar los estilos en modulos css.

c) Se pueden crear componentes reutilizables que encapsulen los estilos?

5. Agregar un modal que despliegue mensajes de error en caso de validaciones fallidas.