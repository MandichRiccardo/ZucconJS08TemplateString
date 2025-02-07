class Prenotazione {
    constructor(cognomeNome, indirizzo, citta, dataInizio, dataFine, numPersone, numStanzeSingole, numStanzeMatrimoniali, colazione) {
        this.cognomeNome = cognomeNome;
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

function calcolaPreventivo() {
    const cognomeNome = document.getElementById('cognomeNome').value;
    const indirizzo = document.getElementById('indirizzo').value;
    const citta = document.getElementById('citta').value;
    const dataInizio = document.getElementById('dataInizio').value;
    const dataFine = document.getElementById('dataFine').value;
    const numPersone = document.getElementById('numPersone').value;
    const numStanzeSingole = document.getElementById('numStanzeSingole').value;
    const numStanzeMatrimoniali = document.getElementById('numStanzeMatrimoniali').value;
    const colazione = document.getElementById('colazione').checked;

    const prenotazione = new Prenotazione(cognomeNome, indirizzo, citta, dataInizio, dataFine, numPersone, numStanzeSingole, numStanzeMatrimoniali, colazione);

    const giorni = (new Date(dataFine) - new Date(dataInizio)) / (1000 * 60 * 60 * 24);
    const costoColazione = colazione ? costi.colazione * numPersone * giorni : 0;
    const costoStanzeSingole = costi.stanzaSingola * numStanzeSingole * giorni;
    const costoStanzeMatrimoniali = costi.stanzaMatrimoniale * numStanzeMatrimoniali * giorni;
    const costoTotale = costoColazione + costoStanzeSingole + costoStanzeMatrimoniali;

    document.getElementById('preventivo').innerHTML = `
        <h2>Riepilogo Prenotazione</h2>
        <p><strong>Cognome e Nome:</strong> ${prenotazione.cognomeNome}</p>
        <p><strong>Indirizzo:</strong> ${prenotazione.indirizzo}</p>
        <p><strong>Città:</strong> ${prenotazione.citta}</p>
        <p><strong>Data Inizio:</strong> ${prenotazione.dataInizio}</p>
        <p><strong>Data Fine:</strong> ${prenotazione.dataFine}</p>
        <p><strong>Numero di Persone:</strong> ${prenotazione.numPersone}</p>
        <p><strong>Numero di Stanze Singole:</strong> ${prenotazione.numStanzeSingole}</p>
        <p><strong>Numero di Stanze Matrimoniali:</strong> ${prenotazione.numStanzeMatrimoniali}</p>
        <p><strong>Colazione Inclusa:</strong> ${prenotazione.colazione ? 'Sì' : 'No'}</p>
        <h3>Costo Totale: €${costoTotale.toFixed(2)}</h3>
    `;
}

document.getElementById('richiediPreventivo').addEventListener('click', calcolaPreventivo);
