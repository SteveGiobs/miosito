/* ==========================================================
   LOGHI SQUADRE
========================================================== */
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

/* ==========================================================
   PARTITE DEL CAMPIONATO
========================================================== */
const partite = [
  { casa: "Genova", trasf: "Cogoleto", sc1: 17, sc2: 5 , pt1: 4, pt2: 0},
  { casa: "Imperia", trasf: "Amatori", sc1: 3, sc2: 37 , pt1: 0, pt2: 5},
  { casa: "Province", trasf: "Recco", sc1: 23, sc2: 15 , pt1: 4, pt2: 0},
  { casa: "Spezia", trasf: "Savona", sc1: 0, sc2: 29 , pt1: 0, pt2: 5},
  
  { casa: "Cogoleto", trasf: "Spezia", sc1: 31, sc2: 20 , pt1: 5, pt2: 0},
  { casa: "Savona", trasf: "Genova", sc1: 36, sc2: 7 , pt1: 5, pt2: 0},
  { casa: "Recco", trasf: "Imperia", sc1: 46, sc2: 5 , pt1: 5, pt2: 0},
  { casa: "Amatori", trasf: "Province", sc1: 3, sc2: 20 , pt1: 0, pt2: 4},
  
  { casa: "Recco", trasf: "Cogoleto", sc1: 19, sc2: 10 , pt1: 4, pt2: 0},
  { casa: "Spezia", trasf: "Imperia", sc1: null, sc2: null , pt1: 0, pt2: 0},
  { casa: "Savona", trasf: "Amatori", sc1: 36, sc2: 17 , pt1: 5, pt2: 0},
  { casa: "Genova", trasf: "Province", sc1: 22, sc2: 8 , pt1: 5, pt2: 0},
  
  { casa: "Genova", trasf: "Cogoleto", sc1: null, sc2: null , pt1: 0, pt2: 0},
  { casa: "Imperia", trasf: "Amatori", sc1: null, sc2: null , pt1: 0, pt2: 0},
  { casa: "Province", trasf: "Recco", sc1: null, sc2: null , pt1: 0, pt2: 0},
  { casa: "Spezia", trasf: "Savona", sc1: null, sc2: null , pt1: 0, pt2: 0},
  
  { casa: "Genova", trasf: "Cogoleto", sc1: null, sc2: null , pt1: 0, pt2: 0},
  { casa: "Imperia", trasf: "Amatori", sc1: null, sc2: null , pt1: 0, pt2: 0},
  { casa: "Province", trasf: "Recco", sc1: null, sc2: null , pt1: 0, pt2: 0},
  { casa: "Spezia", trasf: "Savona", sc1: null, sc2: null , pt1: 0, pt2: 0},
  
  { casa: "Genova", trasf: "Cogoleto", sc1: null, sc2: null , pt1: 0, pt2: 0},
  { casa: "Imperia", trasf: "Amatori", sc1: null, sc2: null , pt1: 0, pt2: 0},
  { casa: "Province", trasf: "Recco", sc1: null, sc2: null , pt1: 0, pt2: 0},
  { casa: "Spezia", trasf: "Savona", sc1: null, sc2: null , pt1: 0, pt2: 0},
  
  { casa: "Genova", trasf: "Cogoleto", sc1: null, sc2: null , pt1: 0, pt2: 0},
  { casa: "Imperia", trasf: "Amatori", sc1: null, sc2: null , pt1: 0, pt2: 0},
  { casa: "Province", trasf: "Recco", sc1: null, sc2: null , pt1: 0, pt2: 0},
  { casa: "Spezia", trasf: "Savona", sc1: null, sc2: null , pt1: 0, pt2: 0},
  
  { casa: "Genova", trasf: "Cogoleto", sc1: null, sc2: null , pt1: 0, pt2: 0},
  { casa: "Imperia", trasf: "Amatori", sc1: null, sc2: null , pt1: 0, pt2: 0},
  { casa: "Province", trasf: "Recco", sc1: null, sc2: null , pt1: 0, pt2: 0},
  { casa: "Spezia", trasf: "Savona", sc1: null, sc2: null , pt1: 0, pt2: 0},
  
  { casa: "Genova", trasf: "Cogoleto", sc1: null, sc2: null , pt1: 0, pt2: 0},
  { casa: "Imperia", trasf: "Amatori", sc1: null, sc2: null , pt1: 0, pt2: 0},
  { casa: "Province", trasf: "Recco", sc1: null, sc2: null , pt1: 0, pt2: 0},
  { casa: "Spezia", trasf: "Savona", sc1: null, sc2: null , pt1: 0, pt2: 0},
  
  { casa: "Genova", trasf: "Cogoleto", sc1: null, sc2: null , pt1: 0, pt2: 0},
  { casa: "Imperia", trasf: "Amatori", sc1: null, sc2: null , pt1: 0, pt2: 0},
  { casa: "Province", trasf: "Recco", sc1: null, sc2: null , pt1: 0, pt2: 0},
  { casa: "Spezia", trasf: "Savona", sc1: null, sc2: null , pt1: 0, pt2: 0},
  
  
  { casa: "Genova", trasf: "Cogoleto", sc1: null, sc2: null , pt1: 0, pt2: 0},
  { casa: "Imperia", trasf: "Amatori", sc1: null, sc2: null , pt1: 0, pt2: 0},
  { casa: "Province", trasf: "Recco", sc1: null, sc2: null , pt1: 0, pt2: 0},
  { casa: "Spezia", trasf: "Savona", sc1: null, sc2: null , pt1: 0, pt2: 0},
  
  { casa: "Genova", trasf: "Cogoleto", sc1: null, sc2: null , pt1: 0, pt2: 0},
  { casa: "Imperia", trasf: "Amatori", sc1: null, sc2: null , pt1: 0, pt2: 0},
  { casa: "Province", trasf: "Recco", sc1: null, sc2: null , pt1: 0, pt2: 0},
  { casa: "Spezia", trasf: "Savona", sc1: null, sc2: null , pt1: 0, pt2: 0},
  
  { casa: "Genova", trasf: "Cogoleto", sc1: null, sc2: null , pt1: 0, pt2: 0},
  { casa: "Imperia", trasf: "Amatori", sc1: null, sc2: null , pt1: 0, pt2: 0},
  { casa: "Province", trasf: "Recco", sc1: null, sc2: null , pt1: 0, pt2: 0},
  { casa: "Spezia", trasf: "Savona", sc1: null, sc2: null , pt1: 0, pt2: 0},
  
  { casa: "Genova", trasf: "Cogoleto", sc1: null, sc2: null , pt1: 0, pt2: 0},
  { casa: "Imperia", trasf: "Amatori", sc1: null, sc2: null , pt1: 0, pt2: 0},
  { casa: "Province", trasf: "Recco", sc1: null, sc2: null , pt1: 0, pt2: 0},
  { casa: "Spezia", trasf: "Savona", sc1: null, sc2: null , pt1: 0, pt2: 0},
  
  
];

/* ==========================================================
   INIZIALIZZA SQUADRE
========================================================== */
const squadre = {};

function aggiungiSquadra(nome) {
  if (!squadre[nome]) {
    squadre[nome] = {
      nome: nomiSquadre[nome.toLowerCase()],
      logo: LOGHI[nome.toLowerCase()] || "",
      giocate: 0,
      vinte: 0,
      pareggiate: 0,
      perse: 0,
      punti: 0,
      fatti: 0,
      subiti: 0,
      diff: 0
    };
  }
}

/* ==========================================================
   POPOLA LE SQUADRE DALLE PARTITE
========================================================== */
partite.forEach(p => {
  aggiungiSquadra(p.casa);
  aggiungiSquadra(p.trasf);

  // se la partita non è giocata, salta
  if (p.sc1 === null || p.sc2 === null || p.sc1 === "" || p.sc2 === "") return;

  const home = squadre[p.casa];
  const away = squadre[p.trasf];


  home.giocate++;
  away.giocate++;

  home.fatti += p.sc1;
  home.subiti += p.sc2;
  away.fatti += p.sc2;
  away.subiti += p.sc1;

  if (p.sc1 > p.sc2) {
    home.vinte++;
    away.perse++;
    home.punti += p.pt1;
	away.punti += p.pt2;
  } else if (p.sc1 < p.sc2) {
    away.vinte++;
    home.perse++;
	home.punti += p.pt1;
    away.punti += p.pt2;
  } else {
    home.pareggiate++;
    away.pareggiate++;
    home.punti += 2;
    away.punti += 2;
  }
});

/* ==========================================================
   CALCOLA DIFFERENZE & ORDINA CLASSIFICA
========================================================== */
Object.values(squadre).forEach(s => {
  s.diff = s.fatti - s.subiti;
});

const classifica = Object.values(squadre)
  .sort((a, b) => b.punti - a.punti || b.diff - a.diff || b.fatti - a.fatti);

/* ==========================================================
   GENERA HTML DELLA CLASSIFICA
========================================================== */
const tab = document.getElementById("classifica");

classifica.forEach((s, i) => {


  tab.innerHTML += `
    <div class="classifica-row">
      <div class="posizione">${i + 1}</div>
      <div class="logo"><img src="${s.logo}"></div>
      <div class="squadra">${s.nome.toUpperCase()}</div>
      <div class="dati">${s.punti} pt</div>
      <div class="dati extra">${s.vinte}V / ${s.pareggiate}P / ${s.perse}S</div>
      <div class="dati extra">Diff: ${s.diff}</div>
    </div>
  `;
});
