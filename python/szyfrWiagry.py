





tekst = "pies"
szyfr = "kulaa"


def zaszyfruj(tekst, szyfr):
    literki = list(tekst)
    literki_szyfru = list(szyfr)

    wynik = ""
    j = 0

    for i in literki:
        if ord(i) > 96 and ord(i) < 123:
            baza = ord("a")
        elif ord(i) > 64 and ord(i) < 91:
            baza = ord("A")
        else:
            wynik +=i
            continue

        k = ord(literki_szyfru[j % len(literki_szyfru)].upper()) - ord("A")
        wynik+= chr(baza + (ord(i) - baza + k) % 26)
        j+=1
    return wynik





def main():
    print(zaszyfruj(tekst,szyfr))
        

if __name__ == "__main__":
    main()



