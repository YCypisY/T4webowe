// funkcja showinfo

function showiInfo(informacja : string): void{
    console.log("Info: "+ informacja)
}

showiInfo("Zaraz dzwonek")

// function imiona(listaImion : string[]): void{

//     let ddd = [...listaImion]
//     console.log(ddd) 

// }


// let lista:string[] = ["Ewa", "Piotr", "Maciej"]

// imiona(lista)


function sumowanie(x:number, y:number): number{
    return x+y
}

console.log(`Suma liczb to ${sumowanie(10,20)}`)

const suma = function(x:number, y:number=10, z?:number): number{
    return x+y
}

console.log(suma(30,40, 3))

