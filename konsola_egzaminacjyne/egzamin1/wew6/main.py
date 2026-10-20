import datetime
import random as rd


class Daty:
    def __init__(self, dataPoczatkowa, dataKoncowa, liczbaDat):
        self.dataPoczatkowa = dataPoczatkowa
        self.dataKoncowa = dataKoncowa
        self.liczbaDat = liczbaDat
        self.listaDat = []

    def generator(self):

        self.listaDat = []

        while len(self.listaDat) < self.liczbaDat:
            przesuniecie = rd.randint(1,(self.dataKoncowa - self.dataPoczatkowa).days - 1)

            nowaData = self.dataPoczatkowa + datetime.timedelta(days=przesuniecie)

            if nowaData not in self.listaDat:
                self.listaDat.append(nowaData)

        self.listaDat.sort()
        return self.listaDat

    def zapis_do_pliku(self):
        liczbaDniWWeekend = 0

        liczbaPoszczegolnychDniTygodnia = {
            "Poniedziałek": 0,
            "Wtorek": 0,
            "Środa": 0,
            "Czwartek": 0,
            "Piątek": 0,
            "Sobota": 0,
            "Niedziela": 0
        }

        nazwyDni = list(liczbaPoszczegolnychDniTygodnia.keys())

        with open("daty.txt", "w", encoding="utf-8") as plik:
            for data in self.listaDat:
                plik.write(f"{data},")

                dzienTygodnia = data.weekday()
                liczbaPoszczegolnychDniTygodnia[nazwyDni[dzienTygodnia]] += 1

                if dzienTygodnia in [5, 6]:
                    liczbaDniWWeekend += 1

            plik.write(f"\nwWeekend: {liczbaDniWWeekend}")
            plik.write(f"\ndniTygodnia: {liczbaPoszczegolnychDniTygodnia}")

        print(f"wWeekend: {liczbaDniWWeekend}")
        print(f"dniTygodnia: {liczbaPoszczegolnychDniTygodnia}")
        


def main():
    daty = Daty(datetime.date(2000, 1, 1),datetime.date(2026, 10, 13),1000)

    print(daty.generator())
    daty.zapis_do_pliku()


if __name__ == "__main__":
    main()