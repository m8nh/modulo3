let arr=  [
    {
        name: "Ha",
        gender: 'female',
        poin: 8
    },
    {
        name: "Huy",
        gender: 'male',
        poin: 9
    },
    {
        name: "Hung",
        gender: 'male',
        poin: 7
    },
    {
        name: "Phuong",
        gender: 'female',
        poin: 6
    },
    {
        name: "Huyen",
        gender: 'female',
        poin: 10
    },
    {
        name: "Long",
        gender: 'male',
        poin: 5
    },
    {
        name: "Luan",
        gender: 'male',
        poin: 10
    },
    {
        name: "Linh",
        gender: 'female',
        poin: 8
    }

];
let sum1=0;
let sum2 = 0
let male = [];
let female = []
  for (let i = 0; i < arr.length; i++) {
      if (arr[i].gender==='male'){
          sum1+=arr[i].poin
          male.push(sum1)
      }

  }
  console.log(sum1/male.length)

  for (let i = 0; i < arr.length; i++) {
      if (arr[i].gender==='female'){
          sum2+=arr[i].poin
          female.push(sum2)
      }

  }
  console.log(sum2/female.length)