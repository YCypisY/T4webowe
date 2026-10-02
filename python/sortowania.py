

def bumblesort(lista):
    n = len(lista)

    for i in range(n):
        for j in range(0, n - i - 1):
            if lista[j] > lista[j+1]:
                lista[j], lista[j+1] = lista[j+1], lista[j]

    return lista

def selectionsor(lista): #przez wybieranie
    pass



def quicksort(lista):
    if len(lista) <= 1:
        return lista

    p = lista[len(lista) // 2]

    lewa = [x for x in lista if x < p]
    srodek = [x for x in lista if x == p]
    prawa = [x for x in lista if x > p]

    return quicksort(lewa) + srodek + quicksort(prawa)