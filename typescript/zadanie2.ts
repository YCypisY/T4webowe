


function BMI(waga:number, wzrost:number):void{
    let bmi:number = waga / (wzrost * wzrost)
    
    console.log(bmi<18.5 ? "za mało!" : bmi<25 ? "OK!" : "za dużo!")
}

BMI(200, 1.80)