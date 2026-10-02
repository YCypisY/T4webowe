let osoby = ['K', "M"]
console.log(osoby)

for (let i = 0; i<osoby.length; i++){
    console.log(osoby[i]);
}

for (let os of osoby){
    console.log(os)
}

osoby.forEach((os)=> {
    console.log(os);
})