

  //EJERCICIO 4

  const users = [
    {name: 'Nymphadora Tonks', time: 9},
    {name: 'Cedric Diggory', time: 28},
    {name: 'Cho Chang', time: 35},
    {name: 'Luna Lovegood', time: 45},
    {name: 'Gregory Goyle', time: 56}
  ];

const [winner] = users; //seleccionas la primera posición del array y la guardas en winner

const winnerInfo = {...winner, win: 1}; //agragas en el objeto winner otro atributo
  
console.log(winner);
console.log(winnerInfo);


