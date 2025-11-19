/* ================================
   Carico i loghi
================================ */
const LOGHI = {
	savona: "Logo_SavonaBianco.jpg",
	spezia:"Logo_Spezia.jpg",
	genova:"Logo_CusGenovaRosso.png",
	province:"Logo_Province.jpg",
	recco:"Logo_Recco.png",
	imperia:"Logo_Imperia.png",
	cogoleto:"Logo_Cogoleto.png",
	amatori:"Logo_Amatori.png"
};

const nomiSquadre = {
  savona: "Savona",
	spezia: "RFC Spezia",
	genova: "Cus Genova",
	province: "Province dell'Ovest",
	recco: "Pro Recco",
	imperia: "Imperia",
	cogoleto: "CFFS Vespe Cogoleto",
	amatori: "Amatori Genova"
  
};

/* ================================
   Elenco Partite
================================ */
const partite = [
  { casa: "Spezia", trasf: "Savona", sc1: 0, sc2: 29, data: "2025-10-19", ora: "15:30" , luogo: "La Spezia"},
  { casa: "Savona", trasf: "Genova", sc1: 36, sc2: 7, data: "2025-10-26", ora: "14:30" , luogo: "Stadio Fontanassa, Savona"},
  { casa: "Savona", trasf: "Amatori", sc1: 36, sc2: 17, data: "2025-11-02", ora: "14:30" , luogo: "Stadio Fontanassa, Savona"},
  { casa: "Province", trasf: "Savona", sc1: null, sc2: null, data: "2025-11-30", ora: "14:30" , luogo: "Campo Carlo Androne, Recco"},
  { casa: "Savona", trasf: "Recco", sc1: null, sc2: null, data: "2025-12-14", ora: "14:30" , luogo: "Stadio Fontanassa, Savona"},
  { casa: "Imperia", trasf: "Savona", sc1: null, sc2: null, data: "2026-01-18", ora: "14:30" , luogo: "Imperia"},
  { casa: "Savona", trasf: "Cogoleto", sc1: null, sc2: null, data: "2026-01-25", ora: "14:30" , luogo: "Stadio Fontanassa, Savona"},
  { casa: "Savona", trasf: "Spezia", sc1: null, sc2: null, data: "2026-02-01", ora: "14:30" , luogo: "Stadio Fontanassa, Savona"},
  { casa: "Genova", trasf: "Savona", sc1: null, sc2: null, data: "2026-02-22", ora: "14:30" , luogo: "Stadio Carlini Bollesan, Genova"},
  { casa: "Amatori", trasf: "Savona", sc1: null, sc2: null, data: "2026-03-01", ora: "14:30" , luogo: "Stadio Carlini Bollesan, Genova"},
  { casa: "Savona", trasf: "Province", sc1: null, sc2: null, data: "2026-03-15", ora: "14:30" , luogo: "Stadio Fontanassa, Savona"},
  { casa: "Recco", trasf: "Savona", sc1: null, sc2: null, data: "2026-03-22", ora: "14:30" , luogo: "Campo Carlo Androne, Recco"},
  { casa: "Savona", trasf: "Imperia", sc1: null, sc2: null, data: "2026-04-12", ora: "15:30" , luogo: "Stadio Fontanassa, Savona"},
  { casa: "Cogoleto", trasf: "Savona", sc1: null, sc2: null, data: "2026-04-19", ora: "15:30" , luogo: "Cogoleto"}
];


/* ================================
   GENERAZIONE CARD
================================ */
const container = document.getElementById("matches");
let nextFound = false;

partite.forEach(p => {

  const nonGiocata =
    p.sc1 === null || p.sc1 === "" || p.sc1 === -1 ||
    p.sc2 === null || p.sc2 === "" || p.sc2 === -1;

  let scoreHTML = nonGiocata ?
  `<div class='score'>
		<span class='versus'>VS</span>
	</div>` :
  `<div class='score'>
		<span>${p.sc1}</span>
			<span class='dash'>–</span>
		<span>${p.sc2}</span>
	</div>`;

  const home = p.casa.toLowerCase();
  const away = p.trasf.toLowerCase();
  const logoHome = LOGHI[home] || "";
  const logoAway = LOGHI[away] || "";
  const nomeHome = nomiSquadre[home];
  const nomeAway = nomiSquadre[away];

  const resHome = nonGiocata ? "" :
    (p.sc1 > p.sc2 ? "VINCENTE" : (p.sc1 < p.sc2 ? "PREDENTE" : "PAREGGIO"));
  const resAway = nonGiocata ? "" :
    (p.sc2 > p.sc1 ? "VINCENTE" : (p.sc2 < p.sc1 ? "PERDENTE" : "PAREGGIO"));

  let badge = "";
  if (nonGiocata && !nextFound) {
    badge = `<span class='future-badge'>Prossima partita</span>`;
    nextFound = true;
  }

  container.innerHTML += `
    <div class="match-card ${nonGiocata ? "future-match" : ""}">
      <div class="match-main">
        <div class="team home">
          <span class="name">${nomeHome.toUpperCase()} </span>
          <img src="${logoHome}">
          ${!nonGiocata ? `<span class='result ${resHome}'>${resHome.toUpperCase()}</span>` : ""}
        </div>

       
		<div class="center-block">
			${badge}
			${scoreHTML}
		</div>

        <div class="team away">
          <span class="name">${nomeAway.toUpperCase()}</span>
          <img src="${logoAway}">
          ${!nonGiocata ? `<span class='result ${resAway}'>${resAway.toUpperCase()}</span>` : ""}
        </div>
      </div>

      <div class="match-footer">
        <div class="item">📅 ${new Date(p.data).toLocaleDateString("it-IT")}</div>
        <div class="item">🕒 ${p.ora}</div>
        <div class="item">📍 ${p.luogo}</div>
      </div>
    </div>
  `;
});
