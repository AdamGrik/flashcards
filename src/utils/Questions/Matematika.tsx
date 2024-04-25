export const matQuestions = [
	{
		subject: "Teória",
		questions: [
			{
				question: "Ako sa nazýva spojenie výrokov pomocou logickej spojky ∨?",
				options: ["disjunkcia", "ekvivalencia", "implikácia", "konjunkcia"],
				answer: "disjunkcia",
			},
			{
				question: "Ako sa nazýva spojenie výrokov pomocou logickej spojky ⇒?",
				options: ["konjunkcia", "implikácia", "disjunkcia", "ekvivalencia"],
				answer: "implikácia",
			},
			{
				question: "Ako sa nazýva spojenie výrokov pomocou logickej spojky ⇔?",
				options: ["konjunkcia", "disjunkcia", "ekvivalencia", "implikácia"],
				answer: "ekvivalencia",
			},
			{
				question: "Ako sa nazýva spojenie výrokov pomocou logickej spojky ∧?",
				options: ["implikácia", "ekvivalencia", "konjunkcia", "disjunkcia"],
				answer: "konjunkcia",
			},
			{
				question:
					"Ako sa nazýva zložený výrok, výroková formula, ktorý je vždy pravdivý/nepravdivý, bez ohľadu na pravdivostné hodnoty jednotlivých výrokov, z ktorých je zložená?",
				options: [
					"tantalógia/negácia",
					"tautológia/negácia",
					"tautológia/kontradikcia",
					"tantalógia/kontradikcia",
				],
				answer: "tautológia/negácia",
			},
			{
				question:
					"Ktoré dva matematické symboly označujú všeobecný kvantifikátor a existenčný kvantifikátor, ktoré sa používajú na určenie množstva pri kvantifikovaných výrokoch?",
				options: ["∀, ∈", "∀, ∃", "Ø, ∈", "Ø, ∃"],
				answer: "∀, ∃",
			},
			{
				question: "Obmena implikácie výroku A ⇒ B je výrok:",
				options: ["¬B ⇒ A", "B ⇒ ¬A", "¬A ⇒ ¬B", "¬B ⇒ ¬A"],
				answer: "¬B ⇒ A",
			},
			{
				question: "Negácia implikácie výroku A ⇒ B je výrok:",
				options: ["¬A ∨ ¬B", "¬A ∧ ¬B", "¬A ∨ B", "A ∧ ¬B"],
				answer: "¬A ∨ ¬B",
			},
			{
				question: "Obrátená implikácia výroku A ⇒ B je výrok:",
				options: ["B ⇒ A", "¬B ⇒ ¬A", "¬A ⇒ B", "A ⇒ ¬B"],
				answer: "B ⇒ A",
			},
			{
				question: "Ako sa nazýva nasledujúca základná množinová operácia?",
				options: [
					"rovnosť množín",
					"ostrá inklúzia množín",
					"prienik množín",
					"inklúzia množín",
				],
				answer: "ostrá inklúzia množín",
			},
			{
				question: "Ktorý pojem pomenúva túto množinovú operáciu?",
				options: [
					"ostrá inklúzia množín",
					"inklúzia množín",
					"zjednotenie množín",
					"prienik množín",
				],
				answer: "prienik množín",
			},
			{
				question: "Ktoré tvrdenie naisto platí pre toto označenie množín?",
				options: [
					"prvky v množine A aj B sú rovnako usporiadané",
					"množiny A aj B obsahujú rovnaký počet prvkov",
					"množina A môže obsahovať viac prvkov ako množina B",
					"množina B môže obsahovať viac prvkov ako množina A",
				],
				answer: "množina A môže obsahovať viac prvkov ako množina B",
			},
			{
				question: "Ako sa nazýva nasledujúca množinová operácia?",
				options: [
					"inklúzia množín",
					"zjednotenie množín",
					"prienik množín",
					"rozdiel množín",
				],
				answer: "zjednotenie množín",
			},
			{
				question: "Ako sa nazýva nasledujúca množinová operácia?",
				options: [
					"prienik množín",
					"ostrá inklúzia množín",
					"zjednotenie množín",
					"inklúzia množín",
				],
				answer: "inklúzia množín",
			},
			{
				question:
					"Ktorý pojem označuje množiny, ktorých prienik je prázdna množina?",
				options: ["asociatívne", "disociatívne", "konjunktné", "disjunktné"],
				answer: "disjunktné",
			},
			{
				question: "Koľko celočíselných riešení má nerovnica 12 – 4x >= x2 ?",
				options: ["3", "7", "8", "9"],
				answer: "7",
			},
			{
				question:
					"Juraj, Filip, Karol a Milan si plánovali jarné prázdniny. Každý z chlapcov vyslovil svoje želanie. Juraj: Chcem ísť do Vysokých Tatier alebo bývať v hoteli.  Filip: Chcem ísť do Vysokých Tatier a bývať v chate.  Karol: Ak nepôjdeme do Vysokých Tatier, tak chcem bývať v hoteli.  Milan: Ak pôjdeme do Vysokých Tatier, tak chcem bývať v chate alebo chcem, aby sme mali v cene ubytovania aj raňajky. Nakoniec všetci išli na jar do Vysokých Tatier, bývali v hoteli a v cene ubytovania mali raňajky. Vyberte možnosť, v ktorej sú všetci chlapci so splneným želaním.",
				options: [
					"Juraj, Karol a Milan",
					"Karol, Filip a Milan",
					"Karol a Milan",
					"Juraj, Filip a Karol",
				],
				answer: "Karol, Filip a Milan",
			},
			{
				question: "V ovocnom sade sú stromy vysadené v rade...",
				options: ["k 13.", "k 14.", "k 15.", "k 16."],
				answer: "k 15.",
			},
			{
				question:
					"Koľko sedemciferných čísel sa dá napísať číslicami 5, 7, 8, 8, 0, 0, 0 ?",
				options: ["240", "420", "2 520", "5 040"],
				answer: "5 040",
			},
			{
				question:
					"Obvod a obsah kruhu sú vyjadrené rovnakým číslom x cm a x cm2. Určte v centimetroch priemer kruhu.",
				options: ["4", "2", "π", "4π"],
				answer: "4",
			},
			{
				question:
					"Ak výrok B ∧ C je pravdivý a výrok B ⇒A je nepravdivý, potom pre pravdivostnú hodnotu výrokov A, B, C platí:",
				options: [
					"výrok A je pravdivý, výrok B je pravdivý, výrok C je pravdivý",
					"výrok A je pravdivý, výrok B je pravdivý, výrok C je nepravdivý",
					"výrok A je nepravdivý, výrok B je pravdivý, výrok C je pravdivý",
					"výrok A je pravdivý, výrok B je nepravdivý, výrok C je pravdivý",
				],
				answer:
					"výrok A je pravdivý, výrok B je nepravdivý, výrok C je pravdivý",
			},
			{
				question:
					" Na obrázku je časť grafu funkcie f(x) = (x + c) . (x - 2) . (x + 1)  Určte hodnotu c.",
				options: ["4", "12", "-4", "-2"],
				image: "obr49",
				answer: "-4",
			},
			{
				question: "Vyriešte rovnicu",
				options: ["8", "-4", "6", "64"],
				image: "obr47",
				answer: "8",
			},
			{
				question:
					"Na obrázku je pravidelný osemuholník ABCDEFGH a rovnostranný trojuholník ABX. Zistite v stupňoch veľkosť uhla GAX",
				options: ["35", "50", "45,5", "52,5"],
				image: "obr48",
				answer: "52,5",
			},
			{
				question:
					"Na jednej malej škole na Morave pracuje spolu 10učiteľov. Mesačný plat každéhoz nich je 21 500 CZK alebo 21 800 CZK alebo 22 500 CZK podľa ich vzdelania a veku. Priemerný mesačný plat učiteľa tejto školy je 21 850 CZK. Koľko učiteľov tejto školy zarobí mesačne 22 500 CZK?",
				options: ["4", "10", "2", "0"],
				answer: "2",
			},
			{
				question:
					"Na začiatku každého zo štyroch rokov vložíme na sporiaci účet sumu 500 €. Banka nám na konci každého roka pripíše úroky. Po celý čas sporenia je úroková miera banky 4,5% ročne. Vypočítajte, ktorá suma bude na účte po pripísaní úrokov na konci štvrtého roka, ak neplatíme žiadne ďalšie poplatky ani dane.",
				options: ["590 €", "596,24 €", "1639,10 €", "2235,35 €"],
				answer: "2235,35 €",
			},
			{
				question:
					"Koľko existuje päťciferných čísel utvorených iba z číslic 1, 2, 3, 4, 5, 6, 7 tak, aby číslica na začiatku čísla bola párna a číslica na konci čísla bola nepárna. Číslice vo vytvorenom čísle sa nemôžu opakovať.",
				options: ["720", "360", "2520", "60"],
				answer: "720",
			},
			{
				question:
					"V meteorologickej stanici v Liptovskom Mikuláši namerali za posledných 24hodín celkový úhrn zrážok 1,5 litra vody na meter štvorcový. Ako vysoko siaha voda v meracej nádobe tvaru valca, ktorého podstava má obsah 1 m2 ? Výsledok uveďte v milimetroch.",
				options: ["2", "1,5", "1,8", "1,23"],
				answer: "1,5",
			},
			{
				question:
					"Rovnoramenný lichobežník má obsah 262,5 cm2. Jeho výška má veľkosť 15 cm a rameno 17cm. Vypočítajte v centimetroch dĺžku kratšej základne.",
				options: ["10", "7,25", "9,5", "5,5"],
				answer: "9,5",
			},
			{
				question:
					"Anna mala v zošite napísané 3 rôzne nenulové číslice. Vytvorila si z nich všetky možné trojciferné čísla. V každom čísle použila všetky tri číslice. Všetky vytvorené trojciferné čísla sčítala. Ich súčet bol 1554. Ktoré zo sčítaných čísel je najmenšie?",
				options: ["124", "120", "210", "112"],
				answer: "124",
			},
			{
				question:
					"Hodnota používaného autobusu klesne každý rok o 15,5 % jeho hodnoty z predchádzajúceho roka. Za koľko celých rokov prvýkrát klesne hodnota autobusu pod jednu tretinu jeho pôvodnej hodnoty?",
				options: ["9", "10", "6", "7"],
				answer: "7",
			},
			{
				question:
					"Vypočítajte v decimetroch obvod pravidelného osemuholníka, ktorý má obsah 16 dm2.",
				options: ["17,43", "14,56", "7,07", "23,07"],
				answer: "14,56",
			},
			{
				question:
					"Dané sú útvary: rovnoramenný trojuholník, rovnostranný trojuholník, štvorec, kosoštvorec, rovnoramenný lichobežník, pravidelný päťuholník a pravidelný osemuholník. Vyberte možnosť, v ktorej sú z daných útvarov uvedené len všetky stredovo súmerné útvary",
				options: [
					"rovnostranný trojuholník, štvorec, pravidelný osemuholník",
					"štvorec, kosoštvorec, pravidelný osemuholník",
					"rovnostranný trojuholník, štvorec, kosoštvorec, pravidelný osemuholník",
					"rovnoramenný trojuholník, rovnostranný trojuholník, rovnoramenný lichobežník, pravidelný päťuholník",
				],
				answer: "štvorec, kosoštvorec, pravidelný osemuholník",
			},
			{
				question:
					"Sklo s hrúbkou 1 mm zachytí 5% prechádzajúceho UV žiarenia. Koľko percent prechádzajúceho UV žiarenia zachytí sklo s hrúbkou 1 cm, zostavené z takýchto 1 mm skiel?",
				options: ["36,98", "59,87", "40,13", "63,02"],
				answer: "40,13",
			},
			{
				question:
					"V triede je 20 žiakov. Výška jednotlivých dievčat triedy je 148 cm, 152 cm, 150 cm, 151 cm a 159 cm. Priemerná výška všetkých chlapcov tejto triedy je 172 cm. Určte priemernú výšku všetkých žiakov triedy.",
				options: ["155 cm", "162 cm", "165 cm", "167 cm"],
				answer: "167 cm",
			},
			{
				question:
					"Určte počet všetkých dvojciferných čísel, ktorých druhá mocnina sa končí číslicou 6.",
				options: ["18", "20", "15", "9"],
				answer: "18",
			},
			{
				question:
					"Na začiatku pokusu je vo vzorke 100 baktérií. Po uplynutí 24 hodín sa počet baktérií vo vzorke vždy zdvojnásobí. Pre jednoduchosť predpokladáme, že do konca pokusu ani jedna baktéria nezahynie. Určte, po koľkých dňoch bude vo vzorke 25 600 baktérií.",
				options: ["10", "7", "12", "8"],
				answer: "8",
			},
			{
				question:
					"Predmet na reklamné účely bol vyrobený tak, že z každého vrcholu kocky s hranou dlhou 9 cm sa odrezala malá kocka s hranou dlhou 3 cm (pozrite obrázok). Na záver sa povrch vyrobeného predmetu pozlátil. V dielni bolo vyrobených 25 rovnakých predmetov. Určte, koľko gramov zlata sa spotrebovalo na pozlátenie všetkých vyrobených predmetov, ak 1 g zlata vystačí na pozlátenie plochy s veľkosťou 50 cm2.",
				options: ["273", "250", "243", "257"],
				image: "obr50",
				answer: "243",
			},
			{
				question:
					"Určte hodnoty reálnych čísel a, b v predpise funkcie f : y = ax + b tak, aby graf funkcie f a súradnicové osi x a y určovali rovnoramenný pravouhlý trojuholník (pozrite obrázok) s obsahom 8. Do odpoveďového hárka zapíšte súčet a + b.",
				options: ["3", "4", "5", "6"],
				image: "obr51",
				answer: "3",
			},
			{
				question:
					"Vzdialenosť miest A a C na rovnej ceste je 200 m. Medzi miestami A a C sa nad cestou vznáša balón B. Z miesta A je možné pozorovať balón B pod výškovým uhlom 10°, z miesta C pod výškovým uhlom 20° (pozrite obrázok). Určte zaokrúhlene na celé metre, o koľko je vzdušná vzdialenosť balóna B od miesta C menšia ako od miesta A.",
				options: ["63", "71", "60", "67"],
				image: "obr52",
				answer: "67",
			},
			{
				question:
					"Obsah medzikružia tvorený dvoma kružnicami so spoločným stredom je 100 cm2. Polomer vonkajšej kružnice sa rovná dvojnásobku polomeru vnútornej kružnice. Určte v centimetroch veľkosť polomeru vonkajšej kružnice",
				options: ["6,51", "7,23", "8,12", "6,77"],
				image: "obr53",
				answer: "6,51",
			},
			{
				question:
					"Roztržitá úradníčka posiela tri rôzne listy. Náhodne vloží listy do troch obálok s napísanými adresami. Aká je pravdepodobnosť, že ani jeden list nebude odoslaný na správnu adresu?",
				options: ["0,25", "0,33", "0,5", "0,66"],
				answer: "0,33",
			},
			{
				question:
					"Nasledujúci histogram znázorňuje, koľko z 86 žiakov dosiahlo daný počet bodov z písomnej práce. Určte medián získaných bodov.",
				options: ["11", "12", "13", "14"],
				image: "obr54",
				answer: "11",
			},
			{
				question:
					"Peter zabudol štvorčíselný kód svojho zámku na školskej skrinke. Našťastie si o ňom pamätá zopár informácií. Vie, že prvé dvojčíslie je deliteľné 15 a druhé 7. Peter je však veľký smoliar, a preto musel vyskúšať všetky možnosti (vrátane možnosti 0000). Na koľký pokus Peter otvoril zámok?",
				options: ["205", "68", "105", "32"],
				answer: "105",
			},
			{
				question:
					"Pravdepodobnosť vyklíčenia každej kôstky avokáda je 0,9. Zasadili sme 3 kôstky. Aká je pravdepodobnosť, že vyklíčia práve dve z nich?",
				options: ["0,24", "0,36", "0,27", "0,18"],
				answer: "0,24",
			},
			{
				question:
					"Gotický štvorlístok je ornament, v ktorom sú do väčšej kružnice vpísané štyri rovnaké dotýkajúce sa menšie kružnice, ako vidíte na obrázku. Polomer veľkej kružnice je jeden meter. Vypočítajte v metroch polomer menšej kružnice.",
				options: ["0,41", "0,23", "0,74", "0,5"],
				answer: "0,41",
			},
			{
				question:
					"Koľko sedemciferných čísel sa dá napísať číslicami 5, 7, 8, 8, 0, 0, 0 ?",
				options: ["120", "240", "420", "2520"],
				answer: "240",
			},
			{
				question:
					"Na obrázku je rovnobežník ABCD, body S, X, Y, Z, W sú postupne stredy úsečiek AC, AS, SC, XS a SY. Koľko percent obsahu rovnobežníka ABCD tvorí vyfarbená časť?",
				options: ["10,5", "25", "30,25", "33,33"],
				image: "obr55",
				answer: "25",
			},
			{
				question:
					"Daný je kužeľ s polomerom podstavy 10cm a výškou 12cm. V akej výške nad podstavou ho máme rozdeliť rezom rovnobežným s podstavou, aby objemy oboch vzniknutých telies boli rovnaké? Výsledok uveďte v centimetroch.",

				options: ["3,14", "2,54", "2,48", "3,5"],
				image: "obr56",
				answer: "2,48",
			},
			{
				question:
					"Vypočítajte súčet všetkých párnych celých čísel deliteľných 13, ktoré sú väčšie ako 400 a zároveň menšie ako 600.",
				options: ["3549", "3952", "4056", "8008"],
				answer: "4056",
			},
		],
	},
];
