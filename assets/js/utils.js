// Función que se encarga de pintar la fecha de publicación de un post
export function getFechaPublicacion(fecha) {
  const fechaActual = new Date();
  const fechaPost = new Date(fecha);
  const diferencia = fechaActual.getTime() - fechaPost.getTime();
  const annos = Math.floor(diferencia / (1000 * 60 * 60 * 24 * 365));
  const meses = Math.floor(diferencia / (1000 * 60 * 60 * 24 * 30));
  const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
  const horas = Math.floor(diferencia / (1000 * 60 * 60));
  const minutos = Math.floor(diferencia / (1000 * 60));
  const segundos = Math.floor(diferencia / 1000);

  if (annos > 0) {
    return `Hace ${annos} años`;
  } else if (meses > 0) {
    return `Hace ${meses} meses`;
  } else if (dias > 0) {
    return `Hace ${dias} días`;
  } else if (horas > 0) {
    return `Hace ${horas} horas`;
  } else if (minutos > 0) {
    return `Hace ${minutos} minutos`;
  } else if (segundos > 0) {
    return `Hace ${segundos} segundos`;
  }
}

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
