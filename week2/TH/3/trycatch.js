async function onMyBirthdayAsync(isKayoSick){
    if(!isKayoSick) return 2
    throw new Error ("I am sad")
}
async function doSomethingAsync(){
    try{
        let result = await onMyBirthdayAsync(true);
        console.log(`I have ${result} cakes`);
    }
    catch(error){
        console.log(error);
    }
    finally{
        console.log("Party");
    }
}
doSomethingAsync();

// onMyBirthday(false)
// .then((result) => {
//     console.log(`I have ${result} cakes`);
// })
// .catch((error) => {
//     console.log(error);
// })
// .finally(() => {
//     console.log("Party");
// })
