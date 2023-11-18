# El problema

Crear un blog con la maqueta proporcionada.

## Descripción del problema

Se debe crear un blog con la maqueta proporcionada, el cual debe tener las siguientes características:

- Se debe hacer un `fetch` usando las url `posts` que se encuentra en el objeto `urls` en el archivo `constant.js` en `assets/js/constant.js` y mostrar los posts en la maqueta.

- Crear una utilidad para mostrar la cantidad de segundos, minutos, horas, días, semanas, meses o años que han pasado desde la fecha de creación del post y formatear los posts del listado2.

- Al hacer click en el enlace de cada post, se debe mostrar el detalle del post y ocultar el listado de posts. Para mostrar el detalle del post, se debe hacer un `fetch` usando el `id` del post para obtener la url correspondiente en el objeto `urls` encontrado en `constant.js`.

- Al hacer click en el botón atras con el icono `<-`, se debe ocultar el detalle del post y mostrar el listado de posts.

- Mostrar / Ocultar el `loader` cuando se haga un `fetch` de los posts y del detalle del post.
