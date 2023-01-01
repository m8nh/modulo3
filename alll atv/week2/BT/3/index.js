// let getTotal = async () =>  {
//   try {
//     let a = await getA();
//     let b = await getB(a);
//     let c = await getC(b);
//     return Promise.resolve(a + b + c);
//   } catch (e) {
//     return Promise.reject(e);
//   }
// }

// getTotal()
// .then(data => console.log(data))
// .catch(err => console.log(err + ''));

// async function getMax(arr) {
//  if (arr instanceof Array){
//  let max=0
//  for (let i = 0; i < arr.length; i++) {
//  max+=arr[i];
//  }
//  return max;
//  }
//  throw new Error("Input data is incorrect")

// }
// async function f() {
//  try{
//  let result = await getMax([3, 4, 5]);
//  console.log(result);
//  }
//  catch(error) {
//  console.log(error);
//  }
// }
// f();

async function largestNumber(arr) {
    if (arr instanceof Array) {
        let sum = arr[0]
        for (let i = 0; i < arr.length; i++) {
            if (sum < arr[i]) {
                sum = arr[i]
            }
        }
        return sum
    }
    throw new Error(`Khong phai 1 mang`)
}

async function f() {
    try {
        let result = await largestNumber([3, 4, 5, 6, 7, 8, 9, 10])
        console.log(result)
    } catch (error) {
        console.log(error)
    }
}

f()


