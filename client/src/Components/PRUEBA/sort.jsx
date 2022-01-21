function orden (string){
  let obj = [
    {
        id: 1,
        name: "bulbasaur",
        attack: 49,
    },
    {
        id: 2,
        name: "ivysaur",
        attack: 62,
    },
    {
        id: 3,
        name: "venusaur",
        attack: 82,
    },
    {
        id: 4,
        name: "charmander",
        attack: 52,
    }
  ]

  let sortSTR = string === 'asc' ? 
  obj.sort((a, b) => a.attack - b.attack) 
  : obj.sort((a, b) => b.attack -a.attack)

  // let sortSTR2 = string === 'asc' ? 
  // obj.sort(function (a, b) {
  //   if (a.name > b.name) {
  //     return 1;
  //   }
  //   if (a.name < b.name) {
  //     return -1;
  //   }
  //   // a must be equal to b
  //   return 0;
  // }) :
  // obj.sort(function (a, b) {
  //   if (a.name > b.name) {
  //     return -1;
  //   }
  //   if (a.name < b.name) {
  //     return 1;
  //   }
  //   // a must be equal to b
  //   return 0;
  // }) 

  console.log(sortSTR)
}

orden('desc')

