export interface Szn {
    id: number; // id zadania
    datadodania: string // data dodania;
    opis: string; // opis zadania
    czas: number; // czas w dniach
    iloscDziennie: number; // ilosc razy w dniu
    bezlimitu: boolean; // czy bez limitu, nie będzie określone dniami
    dniTygodnia: number[]; // w jakie dni tygodnia
}
