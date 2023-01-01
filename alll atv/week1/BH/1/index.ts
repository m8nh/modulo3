let money = 10000
const buyACar = (car:any) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (money >= 10000){
                resolve("can buy " + car);
            } else {
                reject("can't buy " + car);
            }
        },100);
    })
}

money = 100001;
const promise = buyACar("Mercedes"). then(value => {
    console.log(value);
}, error => {
    console.log(error);
})