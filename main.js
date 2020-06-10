// array di oggetti contnenti le vendite del disco thriller nei maggiori paesi
var vendite = [
	{
		'nazione': 'Regno Unito',
		'continente': 'Europa',
		'dischi_venduti': 4.2
	},
	{
		'nazione': 'Germania',
		'continente': 'Europa',
		'dischi_venduti': 1.5
	},
	{
		'nazione': 'Stati Uniti',
		'continente': 'America',
		'dischi_venduti': 33
	},
	{
		'nazione': 'Italia',
		'continente': 'Europa',
		'dischi_venduti': 0.1
	},
	{
		'nazione': 'Giappone',
		'continente': 'Asia',
		'dischi_venduti': 0.1
	},
	{
		'nazione': 'Francia',
		'continente': 'Europa',
		'dischi_venduti': 1
	},
	{
		'nazione': 'Canada',
		'continente': 'America',
		'dischi_venduti': 2
	},
	{
		'nazione': 'Argentina',
		'continente': 'America',
		'dischi_venduti': 0.5
	}
];

// oggetto che conterrà il totale di vendite raggruppate per continente
var continenti = {};

// scorro tutti gli elementi dell'array delle vendite
for (var i = 0; i < vendite.length; i++) {
    // recupero l'elemento corrente, che corrisponde ad un oggetto
    // questo oggetto rappresenta il numero di dischi venduti in un determinato paese
    var vendita_paese = vendite[i];

    // recupero il numero di dischi venduti in questo paese
    var numero_vendita_corrente = vendita_paese.dischi_venduti;

    // recupero il continente in cui si trova questo paese
    var continente_corrente = vendita_paese.continente;

    // verifico se l'oggetto dei continenti contiene già la chiave del continente corrente
    if(!continenti.hasOwnProperty(continente_corrente)) {
        // il continente corrente NON è presente nell'oggetto dei continenti
        // creo una nuova chiave con il continente corrente
        // e assegno il valore con il numero di vendite del paese corrente
        continenti[continente_corrente] = numero_vendita_corrente;
    } else {
        // la chiave corrispondente a questo continente esiste già!
        // il continente corrente è già stato incontrato in qualche iterazione precedente
        // incremento il totale salvato per il continente corrente con il numero di vendite corrente
        continenti[continente_corrente] += numero_vendita_corrente;
    }
}

// estraggo le chiavi dell'oggetto continenti
// queste corrispondono ai nomi dei continenti
var chiavi = Object.keys(continenti);

// estraggo i valori dell'oggetto continenti
// questi corrispondono al totale dei dischi venduti per continente
var valori = Object.values(continenti);

var ctx = $('#myChart')[0].getContext('2d');

var myChart = new Chart(ctx, {
    type: 'pie',
    data: {
        labels: chiavi,
        datasets: [{
            data: valori,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
            ],
            borderWidth: 1,
        }]
    },
    options: {
        title: {
            display: true,
            text: 'Ripartizione delle vendite del disco "Thriller" tra i vari continenti (espresse in milioni di dischi venduti)'
        }
    }
});
