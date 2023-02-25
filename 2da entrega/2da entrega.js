

  // Creo class
  let normativaDisponible = class {
    constructor (ley, nombreDeLey, añoDeSanción) {
        this.ley = ley;
        this.nombreDeLey = nombreDeLey;
        this.añoDeSanción = añoDeSanción;
    }
  }

// Creo leyes usando la class
  const ley1 = new normativaDisponible ({
        ley: 26485,
        nombreDeLey:"Ley de Protección Integral para la Mujer",
        añoDeSanción: 2008,
    });
  const ley2 = new normativaDisponible ({
        ley: 24417,
        nombreDeLey: "Ley de Protección contra la Violencia Familiar",
        añoDeSanción: 1994,
    });
  const ley3 = new normativaDisponible ({
        ley: 26061,
        nombreDeLey: "Ley de Protección para NNA",
        añoDeSanción:2005}
    );
  const ley4 = new normativaDisponible ({
        ley: 26657,
        nombreDeLey: "Ley Nacional de Salud Mental",
        añoDeSanción:2010}
    );
  const ley5 = new normativaDisponible ({
        ley: 27610,
        nombreDeLey: "Ley de Interrupción Voluntaria del Embarazo",
        añoDeSanción:2021}
    );
  const ley6 = new normativaDisponible ({
        ley: 26529,
        nombreDeLey:"Ley de Derechos del Paciente",
        añoDeSanción:2009}
    );
  

// Creo array y pusheo las leyes
    const leyes = []
    leyes.push(ley1)
    leyes.push(ley2)
    leyes.push(ley3)
    leyes.push(ley4)
    leyes.push(ley5)
    leyes.push(ley6)
    console.log(leyes);

  // Entrada de usuario para determinar disponibilidad de la ley en la pagina (prompt)
  let EntradaUsuario = prompt ('Ingrese la ley buscada');

  // Respuesta en alert sobre ley disponible (filtrado)
  for(ley in leyes){
    incluido = 0
    if (ley.includes(EntradaUsuario)) {
        incluido = 1
    }
  }
  if(incluido == 1){
    alert ('Su normativa se encuentra disponible')
    } else {
    alert ('Su normativa no se encuentra disponible')};
    



    const leyesTemp = [
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
    

      //Funcion para calcular años de vigencia
      function aniosVigencia(anioSancion){
        anoActual = new Date().getFullYear();
        aniosVig = anoActual - anioSancion;
        aniosVig = 'Los anos de vigencia son ' + aniosVig
        alert(aniosVig);
      }

      aniosVigencia(leyesTemp[0].añoDeSanción)
