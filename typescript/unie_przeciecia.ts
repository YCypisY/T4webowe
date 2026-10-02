let wartosc: number | string;
wartosc = 'Krowa';
wartosc = 666;

interface Osoba {
    imie:string;
}

interface Pracownik{
    latapracy: number;
}

let czlowiek:Osoba&Pracownik = {imie: "Jan", latapracy:20};