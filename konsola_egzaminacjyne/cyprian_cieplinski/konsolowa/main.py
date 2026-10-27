import random as rd
import math


"""
    nazwa funkcji: wypelnienieTablicy
    parametry wejściowe: tablica_liczb - przechowuje pusta tablice do wypełnienia wartosciami true albo false
    wartość zwracana: funkcja nie zwraca nic
    informacje: funkcja wypełnia tablice wartosciami true w ilosci 100 a nastepnie pierwsze z nich zamienia na false
    autor: Cyprian Ciepliński
"""

def wypelnienieTablicy(tablica_liczb):
    for i in range(100):
        tablica_liczb.append(True)

    tablica_liczb[0] = False
    tablica_liczb[1] = False


def sito_erastotenesa(tablica_liczb):
    n = len(tablica_liczb) - 1

    i = 2
    while i <= math.sqrt(n):
        if tablica_liczb[i]:
            j = 2 * i
            while j <= n:
                tablica_liczb[j] = False
                j += i
        i += 1

    for i in range(2, n):
        if tablica_liczb[i]:
            print(i, end=", ")


def main():
    tablica_liczb = []
    wypelnienieTablicy(tablica_liczb)
    sito_erastotenesa(tablica_liczb)


if __name__ == "__main__":
    main()




def main():
    tablica_liczb = []
    wypelnienieTablicy(tablica_liczb)
    sito_erastotenesa(tablica_liczb)



if __name__ == "__main__":
    main()