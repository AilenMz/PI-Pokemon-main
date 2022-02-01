const filtered=(type)=>{

let obj = [
    {
        name: "Ailen",
        types: [
          {
            name: "bug"
          },
          {
            name: "steel"
          }
        ]
      },
      {
        name: "wigglytuff",
        type: [
          "bug",
          "fairy"
        ],
      },
]

// const typeFilter =
//         type === "all"
//           ? obj
//           : obj.filter((el) =>
//               el.type
//                 ? el.type[0] === type || el.type[1] === type
//                 : el.types[0].name === type || el.types[1].name === type
//             );

// console.log(typeFilter)
console.log(obj[0].types[0].name)
}

filtered('bug')
