// Entrada de usuario para determinar disponibilidad de la ley en la pagina//

  let EntradaUsuario = prompt ('Ingrese la ley buscada');

// Array//
const normativaDisponible = [
    { id: 1, ley: "26485", nombreDeLey: "Ley de Protección Integral para la Mujer", 
    añoDeSanción: 2008 },
    { id: 2, ley: "24417", nombreDeLey: "Ley de Protección contra la Violencia Familiar", añoDeSanción: 1994 },
    { id: 3, ley: "26061", nombreDeLey: "Ley de Protección Integral de los Niños, Niñas y Adolescentes", 
    añoDeSanción: 2005 },
    { id: 4, ley: "26657", nombreDeLey: "Ley Nacional de Salud Mental", añoDeSanción: 2010 },
    { id: 5, ley: "27610", nombreDeLey: "Ley de Interrupción Voluntaria del Embarazo", añoDeSanción: 2021 },
    { id: 6, ley: "26529", nombreDeLey: "Ley de Derechos del Paciente en su Relación con los Profesionales e Instituciones de la Salud", 
    añoDeSanción: 2009 },
  ];
  // Respuesta en alert sobre ley disponible (filtrado)//

const disponibilidad = normativaDisponible.find (item => item.ley === EntradaUsuario);

let mensaje = `
Ley: ${disponibilidad.ley}
Nombre: ${disponibilidad.nombreDeLey}
Año: ${disponibilidad.añoDeSanción}
`;

alert (mensaje);







