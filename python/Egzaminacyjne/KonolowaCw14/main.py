class Produkt():
    def __init__(self, nazwa, cena_netto, ilosc):
        self.nazwa = nazwa
        self.cena_netto = cena_netto
        self.ilosc = ilosc
        
    def oblicz_wartosc_brutto(self, vat=23):
        return self.cena_netto * (1 + vat / 100)

    def oblicz_wartosc_magazynu_brutto(self):
        return self.oblicz_wartosc_brutto() * self.ilosc

    def wyswietl_opis(self):
        print("-----------------------------------")
        print(f"Produkt: {self.nazwa}")
        print(f"Ilość na stanie: {self.ilosc} szt.")
        print(f"Cena netto: {self.cena_netto} PLN")
        print(f"Łączna wartość w magazynie: {self.oblicz_wartosc_magazynu_brutto()} PLN")
        print("-----------------------------------")


def main():
    listaObiektow = []

    with open('produkty.txt', 'rt') as f1:
        for line in f1.readlines():
            line = line.strip()

            nazwa, cena, ilosc = line.split(',')

            produkt = Produkt(nazwa, float(cena), int(ilosc))
            listaObiektow.append(produkt)

    for produkt in listaObiektow:
        produkt.wyswietl_opis()

    wartosc_calego = 0
    for produkt in listaObiektow:
        wartosc_calego += produkt.oblicz_wartosc_magazynu_brutto()
    print(f"Łączna wartosc całego maagzynu: {wartosc_calego:.2f}")


if __name__ == "__main__":
    main()