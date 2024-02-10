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
      "Na automatické prideľovanie konfigurácii zariadeniam v sieti",
      "Rozdelenie správy na menšie časti, pri chybe v prenose prepošleme lenpoškodený paket",
    ],
    answer:
      "Identifikuje odosielateľa a požadovaného príjemcu správy pomocou definovanej adresnej schémy",
  },
  {
    question: "Prečo sa použiva segmentácia na transportnej vrstve ?",
    options: [
      "aby mohli súčasne komunikovať cez sieť viacero aplikácii",
      "Kvôli bezpečnosti",
      "Lebo sa tak správa ľahšie prenáša",
      "Lebo identifikuje zdrojové aplikácie pomocou čísla portu",
    ],
    answer: "Lebo sa tak správa ľahšie prenáša",
  },

  {
    question: "Na obrázku je protokol transportnej vrstvy:",
    options: ["UDP", "TCP"],
    image: "obr2",
    answer: "TCP",
  },
  {
    question: "Na obrázku je protokol transportnej vrstvy:",
    options: ["UDP", "TCP"],
    image: "obr1",
    answer: "UDP",
  },
  {
    question: "Spoľahlivosť a flow control sú:",
    options: [
      "Hlavné funkcie transportnej vrstvy",
      "Voliteľné funkcie transportnej vrstvy",
    ],
    answer: "Voliteľné funkcie transportnej vrstvy",
  },
  {
    question: "Segmentácia a Multitasking sú:",
    options: [
      "Hlavné funkcie transportnej vrstvy",
      "Voliteľné funkcie transportnej vrstvy",
    ],
    answer: "Hlavné funkcie transportnej vrstvy",
  },
  {
    question: "Na čo slúži chrbticová vrstva LAN modelu ?",
    options: [
      "pripája koncové zariadenia, riadi kto môže komunikovať cez sieť",
      "agreguje dáta z prístupovej vrstvy, definuje subsiete a smerovanie medzi nimi, riadi tok dát, definuje Broadcast L2 domény",
      "zabezpečuje pripojenie do internetu cez ISP a agreguje dáta od distribučných prepínačov",
    ],
    answer:
      "zabezpečuje pripojenie do internetu cez ISP a agreguje dáta od distribučných prepínačov",
  },
  {
    question: "Na čo slúži distribučná vrstva LAN modelu ?",
    options: [
      "pripája koncové zariadenia, riadi kto môže komunikovať cez sieť",
      "agreguje dáta z prístupovej vrstvy, definuje subsiete a smerovanie medzi nimi, riadi tok dát, definuje Broadcast L2 domény",
      "zabezpečuje pripojenie do internetu cez ISP a agreguje dáta od distribučných prepínačov",
    ],
    answer:
      "agreguje dáta z prístupovej vrstvy, definuje subsiete a smerovanie medzi nimi, riadi tok dát, definuje Broadcast L2 domény",
  },
  {
    question: "Na čo slúži prístupová vrstva LAN modelu ?",
    options: [
      "pripája koncové zariadenia, riadi kto môže komunikovať cez sieť",
      "agreguje dáta z prístupovej vrstvy, definuje subsiete a smerovanie medzi nimi, riadi tok dát, definuje Broadcast L2 domény",
      "zabezpečuje pripojenie do internetu cez ISP a agreguje dáta od distribučných prepínačov",
    ],
    answer: "pripája koncové zariadenia, riadi kto môže komunikovať cez sieť",
  },

  {
    question: "Pri spoľahlivých sieťach, odolnosť voči chybám znamená že:",
    options: [
      "keď pridáme väčšie množstvo koncových zariadení, neovplivní to výkonosť siete",
      "je odolná voči bezpečnostným chybám",
      "pri výpadku switcha, sieť funguje ďalej",
      "dokáže preniesť dáta rôznych služieb",
    ],
    answer: "pri výpadku switcha, sieť funguje ďalej",
  },
  {
    question: "Pri spoľahlivých sieťach, rozšíriteľnosť znamená že:",
    options: [
      "keď pridáme väčšie množstvo koncových zariadení, neovplivní to výkonosť siete",
      "je odolná voči bezpečnostným chybám",
      "pri výpadku switcha, sieť funguje ďalej",
      "dokáže preniesť dáta rôznych služieb",
    ],
    answer:
      "keď pridáme väčšie množstvo koncových zariadení, neovplivní to výkonosť siete",
  },
  {
    question:
      "Pri spoľahlivých sieťach, ak je sieť konvergovaná znamená to že:",
    options: [
      "keď pridáme väčšie množstvo koncových zariadení, neovplivní to výkonosť siete",
      "je odolná voči bezpečnostným chybám",
      "pri výpadku switcha, sieť funguje ďalej",
      "dokáže preniesť dáta rôznych služieb",
    ],
    answer: "dokáže preniesť dáta rôznych služieb",
  },
  {
    question: "Pri spoľahlivých sieťach, bezpečnosť znamená že:",
    options: [
      "keď pridáme väčšie množstvo koncových zariadení, neovplivní to výkonosť siete",
      "je odolná voči bezpečnostným chybám",
      "pri výpadku switcha, sieť funguje ďalej",
      "dokáže preniesť dáta rôznych služieb",
    ],
    answer: "je odolná voči bezpečnostným chybám",
  },
  {
    question: "Aká je riadená metóda prístupu k médiu ?",
    options: [
      "keď uzol potrebuje, pokúsi sa vyslať informácie",
      "uzol pred vysielaním zasníma, či je médium voľné",
      "každý má pridelený čas na vysielanie",
    ],
    answer: "každý má pridelený čas na vysielanie",
  },
  {
    question: "Metóda prístupu k médiu založená na obsahu je:",
    options: [
      "keď uzol potrebuje, pokúsi sa vyslať informácie",
      "uzol pred vysielaním zasníma, či je médium voľné",
      "každý má pridelený čas na vysielanie",
    ],
    answer: "keď uzol potrebuje, pokúsi sa vyslať informácie",
  },
  {
    question: "Aká je CSMA/CD metóda prístupu k médiu ?",
    options: [
      "keď uzol potrebuje, pokúsi sa vyslať informácie",
      "uzol pred vysielaním zasníma, či je médium voľné",
      "každý má pridelený čas na vysielanie",
    ],
    answer: "uzol pred vysielaním zasníma, či je médium voľné",
  },
  {
    question: "Čo je trunk ?",
    options: [
      "pole záhlavia rámca prenášaného na trunku, ktorý slúži na určenie príslušnosti rámca k určitej VLAN",
      "siet pomocou ktorej môžeme fyzický switch rozdeliť na viacero logických switchov, ktoré sú logicky oddelené",
      "prepojenie najčastejšie medzi switchmi chopné prenášať komunikáciu viacerých VLAN",
      "Uzol, ktorý detekuje kolíziu",
    ],
    answer:
      "prepojenie najčastejšie medzi switchmi chopné prenášať komunikáciu viacerých VLAN",
  },
  {
    question: "Na čo slúži VTP ?",
    options: [
      "na automatickú konfiguráciu VLAN databáz v sieti cez trunky",
      "na určenie príslušnosti rámca k určitej VLAN",
      "na zníženie Broadcastu",
      "na automatické vytvortenie trunku medzi switchmi",
    ],
    answer: "na automatickú konfiguráciu VLAN databáz v sieti cez trunky",
  },
  {
    question: "Na čo slúži DTP ?",
    options: [
      "na automatickú konfiguráciu VLAN databáz v sieti cez trunky",
      "na určenie príslušnosti rámca k určitej VLAN",
      "na zníženie Broadcastu",
      "na automatické vytvortenie trunku medzi switchmi",
    ],
    answer: "na automatické vytvortenie trunku medzi switchmi",
  },
  {
    question: "Aký typ útoku je na obrázku ?",
    options: ["DOS", "Man in the middle"],
    image: "obr3",
    answer: "DOS",
  },
  {
    question: "Aký typ útoku je na obrázku ?",
    options: ["DOS", "Man in the middle"],
    image: "obr4",
    answer: "Man in the middle",
  },
  {
    question: "Aký typ statickej cesty je na obrázku ?",
    options: [
      "Štandartná statická cesta",
      "Základná statická cesta",
      "Sumerizačná statická cesta",
      "Záložná statická cesta",
    ],
    image: "obr5",
    answer: "Základná statická cesta",
  },
  {
    question: "Aký typ statickej cesty je na obrázku ?",
    options: [
      "Štandartná statická cesta",
      "Základná statická cesta",
      "Sumerizačná statická cesta",
      "Záložná statická cesta",
    ],
    image: "obr6",
    answer: "Sumerizačná statická cesta",
  },
  {
    question: "Aký typ statickej cesty je na obrázku ?",
    options: [
      "Štandartná statická cesta",
      "Základná statická cesta",
      "Sumerizačná statická cesta",
      "Záložná statická cesta",
    ],
    image: "obr7",
    answer: "Záložná statická cesta",
  },
];
/*
{
    question: "",
    options: ["", "", "", ""],
    answer: "",
},
*/
