let cokolwiek:any = 44444;
cokolwiek = "xxxxx - teraz jestem tekstem";

let zzz:unknown = 444;
if(typeof zzz === "number"){
    let fff:number = zzz
}

function jakasfunkcja():void {
    console.log("Nic nie zwraca")
}


function innafunkcja(str: string):never{
    throw new Error('str');
}