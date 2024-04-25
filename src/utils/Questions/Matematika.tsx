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
		],
	},
];
