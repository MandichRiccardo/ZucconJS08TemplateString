let nome="Rario";
let cognome="Rossi";
let citta="Venezia";
console.log(`Ciao, mi chiamo ${nome} ${cognome} e abito a ${citta}.`);

class Prenotazione {
    constructor(nome, cognome, indirizzo, citta, dataInizio, dataFine, numPersone, numStanzeSingole, numStanzeMatrimoniali, colazione) {
        this.nome = nome;
        this.cognome = cognome;
        this.indirizzo = indirizzo;
        this.citta = citta;
        this.dataInizio = dataInizio;
        this.dataFine = dataFine;
        this.numPersone = numPersone;
        this.numStanzeSingole = numStanzeSingole;
        this.numStanzeMatrimoniali = numStanzeMatrimoniali;
        this.colazione = colazione;
    }
}

const costi = {
    colazione: 5,
    stanzaSingola: 50,
    stanzaMatrimoniale: 80
};

function calcolaPreventivo(prenotazione) {
    const giorni = (new Date(prenotazione.dataFine) - new Date(prenotazione.dataInizio)) / (1000 * 60 * 60 * 24);
    const costoStanzeSingole = prenotazione.numStanzeSingole * costi.stanzaSingola * giorni;
    const costoStanzeMatrimoniali = prenotazione.numStanzeMatrimoniali * costi.stanzaMatrimoniale * giorni;
    const costoColazione = prenotazione.colazione ? prenotazione.numPersone * costi.colazione * giorni : 0;
    const costoTotale = costoStanzeSingole + costoStanzeMatrimoniali + costoColazione;

    console.log(`Riepilogo prenotazione:
    Nome: ${prenotazione.nome} ${prenotazione.cognome}
    Indirizzo: ${prenotazione.indirizzo}, ${prenotazione.citta}
    Data inizio: ${prenotazione.dataInizio}
    Data fine: ${prenotazione.dataFine}
    Numero persone: ${prenotazione.numPersone}
    Stanze singole: ${prenotazione.numStanzeSingole}
    Stanze matrimoniali: ${prenotazione.numStanzeMatrimoniali}
    Colazione inclusa: ${prenotazione.colazione ? 'Sì' : 'No'}
    Costo totale: €${costoTotale.toFixed(2)}`);
}

// Esempio di utilizzo
const prenotazione = new Prenotazione("Mario", "Rossi", "Via Roma 1", "Venezia", "2023-12-01", "2023-12-10", 2, 1, 1, true);
calcolaPreventivo(prenotazione);