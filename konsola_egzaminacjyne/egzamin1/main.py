def wczytaj():
    listanr = []
    listatr = []

    with open('dane.txt', 'rt', encoding='utf-8') as f1:
        tresc = f1.readlines()

        for linia in tresc:
            x, y = linia.split()
            listanr.append(int(x))
            listatr.append(y)

    return listanr, listatr


def pary(listaNr, listaTr):
    pary = []

    for i in range(len(listaNr)):
        if listaNr[i] == len(listaTr[i]):
            pary.append(f"{listaNr[i]} : {listaTr[i]}")

    for element in pary:
        print(element)


def quicksort(lista):
    if len(lista) <= 1:
        return lista

    p = lista[len(lista) // 2]

    lewa = [x for x in lista if x < p]
    srodek = [x for x in lista if x == p]
    prawa = [x for x in lista if x > p]

    return quicksort(lewa) + srodek + quicksort(prawa)


def blizniaki(listaWyrazow):
    posortowane = []

    for wyraz in listaWyrazow:
        posortowane.append(quicksort(list(wyraz)))

    blizniaki = []

    for i in range(len(posortowane)):
        for j in range(i + 1, len(posortowane)):
            if posortowane[i] == posortowane[j]:
                blizniaki.append((listaWyrazow[i], listaWyrazow[j]))

    print(blizniaki)



from collections import defaultdict
from itertools import combinations

#dodatkowy
def sposob2blizniaki():
    wyrazy = ['kot', 'tok', 'lis', 'sil', 'pies']

    grupy = defaultdict(list)
    for w in wyrazy:
        grupy["".join(sorted(w.lower()))].append(w)

    for grupa in grupy.values():
        for a,b in combinations(grupa, 2):
            print(a, b)


def main():
    listaNr, listaTr = wczytaj()

    pary(listaNr, listaTr)
    blizniaki(listaTr)


if __name__ == "__main__":
    main()
