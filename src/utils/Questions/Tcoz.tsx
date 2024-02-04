export const tcozQuestions = [
  //elektrotechnika
  {
    question: "Aká je značka elektrického odporu ?",
    options: ["U", "I", "Q", "R"],
    answer: "R",
  },
  {
    question: "Ako znie ohmov zákon ?",
    options: ["R = U * I", "W = F * t", "I = U / R", "R = I / U"],
    answer: "I = U / R",
  },
  {
    question: "Ktorá súčiastka ukladá elektrickú energiu ?",
    options: ["Rezistor", "Kondenzátor", "Cievka", "Dióda"],
    answer: "Kondenzátor",
  },
  {
    question: "Prvý kirchhoffov zákon hovorí, že:",
    options: [
      "Odpor sa rovná podielu napätia a prúdu",
      "Keď sú cievka a kondenzátor spolu zapojené, elektrický prúd medzi nimi kmitá pri frekvencii",
      "V slučke sa algebrický súčet všetkých napätí rovná nule",
      "Súčet prúdov vtekajúceho do uzla sa rovná súčtu prúdov vytekajúceho z uzla",
    ],
    answer:
      "Súčet prúdov vtekajúceho do uzla sa rovná súčtu prúdov vytekajúceho z uzla",
  },
  {
    question: "Druhý kirchhoffov zákon hovorí, že:",
    options: [
      "V slučke sa algebrický súčet všetkých napätí rovná nule",
      "Súčet prúdov vtekajúceho do uzla sa rovná súčtu prúdov vytekajúceho z uzla",
      "Odpor nemôže byť záporný",
      "Merný odpor je odpor vodiča jednotkovej dĺžky a jednotkového prierezu",
    ],
    answer: "V slučke sa algebrický súčet všetkých napätí rovná nule",
  },
  {
    question: "Má teplota vplyv na odpor vodiča ?",
    options: ["Áno", "Nie"],
    answer: "Áno",
  },
  {
    question: "Čo je zložený obvod ?",
    options: [
      "Obvod s viac ako jednou slučkou",
      "Obvod s viac ako jedným zdrojom",
      "Obvod, ktorým tečie striedavý prúd",
      "Obvod s nebezpečne vysokým napätím",
    ],
    answer: "Obvod s viac ako jedným zdrojom",
  },
  {
    question: "Čo je jednoduchý obvod ?",
    options: [
      "Obvod, ktorým tečie jednosmerný prúd",
      "Obvod bez batérie",
      "Obvod s jedným zdrojom",
      "Obvod bez záťaže",
    ],
    answer: "Obvod s jedným zdrojom",
  },
  {
    question: "Aká je štandardná frekvencia striedavého prúdu v Európe ?",
    options: ["40 Hz", "60 Hz", "50 Hz", "100 Hz"],
    answer: "50 Hz",
  },
  {
    question: "Ako sa označuje ochranný vodič ?",
    options: ["L", "N", "F", "PE"],
    answer: "PE",
  },
  {
    question: "Ako sa označuje fázový vodič ?",
    options: ["L", "N", "F", "PE"],
    answer: "L",
  },
  {
    question: "Ako sa označuje neutrálny vodič ?",
    options: ["L", "N", "F", "PE"],
    answer: "N",
  },
  {
    question: "Čo je magnetické pole ?",
    options: [
      "Tok magnetického poľa vodičom",
      "Priestorová oblasť okolo magnetu alebo prúdu",
      "Elektrické pole generované elektrickým prúdom",
      "Záporný náboj magnetu",
    ],
    answer: "Priestorová oblasť okolo magnetu alebo prúdu",
  },
  {
    question: "Čo sú obvodové veličiny ?",
    options: [
      "Všetky napätia, prúdy a odpory",
      "Celkové napätie, prúd a odpor",
      "Všetky napätia a prúdy",
      "Odpor, kapacita, indukčnosť a vodivosť",
    ],
    answer: "Všetky napätia a prúdy",
  },
  //sietove
  {
    question: "Ktorá je 4. vrstva OSI modelu ?",
    options: ["Fyzická", "Transportná", "Prezentačná", "Data-link"],
    answer: "Transportná",
  },
  {
    question: "Ktoré vrstvy OSI modelu patria do aplikačného TCP/IP modelu ?",
    options: [
      "Aplikačná, prezentačná a relačná",
      "Fyzická, linková a sieťová",
      "Relačná, transportná a sieťová",
      "Prezentačná a transportná",
    ],
    answer: "Aplikačná, prezentačná a relačná",
  },
  {
    question: "Aká je funkcia linkovej vrstvy OSI modelu ?",
    options: [
      "Preniesť rámec po jednom sieťovom segmente",
      "Dopraviť packet do cieľovej siete",
      "Kódovanie, kompresia, kryptovanie",
      "Preniesť bity po médiu",
    ],
    answer: "Preniesť rámec po jednom sieťovom segmente",
  },
  {
    question: "Na ktorej vrstve OSI modelu sa vytvorí Packet ?",
    options: ["Transportnej", "Aplikačnej", "Sieťovej", "Relačnej"],
    answer: "Sieťovej",
  },
  {
    question:
      "Vyber správne tvrdenie, ktoré platí pre sieťové protokoly TCP a UDP.",
    options: [
      "TCP je rýchlejší a spoľahlivejší ako UDP",
      "TCP je rýchlejší, ale menej spoľahlivý než UTP protokol",
      "UDP je rýchlejší a spoľahlivejší ako TCP",
      "UDP je rýchlejší, ale menej spoľahlivý než TCP",
    ],
    answer: "UDP je rýchlejší, ale menej spoľahlivý než TCP",
  },
  {
    question: "Ktorá z nasledujúcich IP adries patrí medzi súkromné adresy ?",
    options: ["168.182.4.2", "192.168.2.4", "80.12.2.4", "126.80.4.2"],
    answer: "192.168.2.4",
  },
  {
    question: "Na čo slúži DHCP ?",
    options: [
      "Na preklad textových adries na IP adresy",
      "Na automatické prideľovanie konfigurácii zariadeniam v sieti",
      "Na automatické prideľovanie MAC adries",
      "Na určenie príslušnosti rámca k určitej VLAN",
    ],
    answer: "Na automatické prideľovanie konfigurácii zariadeniam v sieti",
  },
  {
    question: "Ktorá komunikácia posiela správu najviac jednému zariadeniu ?",
    options: ["Anycast", "Unicast a broadcast", "Anycast a unicast", "Unicast"],
    answer: "Anycast a unicast",
  },
  {
    question:
      "Pri ktorej komunikácii odpovedá prvé zariadenie, ktoré pozná odpoveď ?",
    options: ["Unicast", "Multicast", "Broadcast", "Anycast"],
    answer: "Anycast",
  },
  {
    question: "Aký je význam adresovania ?",
    options: [
      "Identifikuje odosielateľa a požadovaného príjemcu správy pomocou definovanej adresnej schémy",
    ],
    answer:
      "Identifikuje odosielateľa a požadovaného príjemcu správy pomocou definovanej adresnej schémy",
  },
  {
    question: "Prečo sa použiva segmentácia na transportnej vrstve ?",
    options: ["a", "b", "Lebo sa tak správa ľahšie prenáša"],
    answer: "Lebo sa tak správa ľahšie prenáša",
  },
  {
    question: "Čo robí segmentácia ako funkcia transportnej vrstvy ?",
    options: [
      "a",
      "Rozdelenie správy na menšie časti, pri chybe v prenose prepošleme lenpoškodený paket",
    ],
    answer:
      "Rozdelenie správy na menšie časti, pri chybe v prenose prepošleme lenpoškodený paket",
  },
];
/*
{
    question: "",
    options: ["", "", "", ""],
    answer: "",
},
*/
