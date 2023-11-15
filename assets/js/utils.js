// Función que se encarga de pintar la fecha de publicación de un post

// Función que coge la fecha de publicación de un post y la retorna en formato es-ES
export const formatDate = (date) => {
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const dateFormatted = new Date(date).toLocaleDateString("es-ES", options);
  return dateFormatted;
};
