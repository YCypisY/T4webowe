

function wartoscBezwzgledna(liczba: number): number{
    if(liczba < 0){
        return liczba*-1
    }
    else{
        return liczba
    }

}


function BMI(waga:number, wzrost:number):void{
    let bmi:number = waga / (wzrost * wzrost)
    if( bmi < 18.5){
        console.log("za mało!")
        return
    }
    else if(bmi < 25){
        console.log("OK!")
        return
    }
    else{
        console.log("za duzo!")
        return
    }
}

function filteryyy(tablica:number[]):void{
    const numery=[2,4,7,11,14,19,21,100]
    console.log(numery.filter(l => l%2 == 0))
    console.log(numery.filter(l => l%2 == 1))

}


function potega(liczba:number, potega:number):number{
    return liczba**potega
}

(liczba:number, potega:number):number => liczba**potega


let pi:number = 3.14

function zad5(): void {
    let r: number = 10
    let h: number = 12

    let l: number = Math.sqrt(r * r + h * h)

    let polePodstawy: number = pi * r * r
    let poleBoczne: number = pi * r * l

    console.log("Pole podstawy: " + polePodstawy)
    console.log("Pole powierzchni bocznej: " + poleBoczne)
}