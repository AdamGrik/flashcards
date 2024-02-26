const text0Question =
  "Read some facts from the life of King Gillette who invented the disposable razor and complete the sentence below.";
const text1Question =
  "Read the text and decide whether the statements are true or false. ";
const text0 =
  "King Camp Gillette was born in 1855 in a small town in central Wisconsin. His parents were innovators, who were always seeking to do things better. His father worked at various inventions and his mother created numerous recipes through experimentation. At the age of 18, King left school to begin working for a living as a traveling salesman. He did this work for years, often trying his hand at various inventions to improve the products he sold. By 1890, he had accumulated four patents, but none of the inventions gathered much interest. Meanwhile, his parents seemed so much more successful than he. At the age of 40, Gillette went back to his roots in Wisconsin, working as a salesman for Crown Cork & Seal Co. The owner of the company had invented the cork-lined bottle cap. He knew Gillette wanted to be a successful inventor, so he told him to invent something people could use and throw away. This thought stuck in the back of Gillette’s mind. Shortly afterwards, as he was getting ready to shave before going to work, King became irritated that his straight-edge razor was dull and would no longer cut. It was so worn out that he could no longer sharpen it. The straight-edge razor was also called the “cut-throat razor” because it was dangerous enough to cut a man’s throat. Salesmen traveling in swaying trains had to be especially careful when trying to shave. Gillette suddenly had a flash of inspiration for a razor that would not need re-sharpening. He had the idea of disposable razor blades that were sharpened by the manufacturer and thrown away when dull. It would also be a razor that was safe to use, as opposed to the dangerous straight-edge razor. Excited by his idea, he went to the Massachusetts Institute of Technology (MIT) and asked their metallurgists if it were possible to make a small piece of steel that would hold its sharp edge and be affordable enough to throw away. They said it was impossible. Still determined, he spent evenings working on his idea. He then partnered with inventor William Emery Nickerson to perfect the method. Ironically, Nickerson had been educated at MIT. It took them 5 years and much of their own money to finally find someone who could provide a machine that would automatically sharpen thin sheets of metal so they could be used to shave. Gillette was now 45 years old. They eventually perfected the double-edged safety razor blade, which fit into a specially designed holder with a handle and an adjustable head. Gillette and Nickerson set up the American Safety Razor Company and got their patent in 1901.";
const text1 =
  "Ancient Greek athletes are known to have used special diets and stimulants to strengthen themselves. Strychnine, caffeine, cocaine, and alcohol were often used by cyclists an other endurance athletes in the 19 century. Thomas Hicks ran to victory in the marathon at the 1904 Olympic Games, in St. Louis, with the help of raw egg, injections of strychnine and doses of brandy administered to him during the race. In 1928 the IAAF (athletics) became the first International Sport Federation (IF) to ban doping, but no tests were performed. Meanwhile the problem was made worse by synthetic hormones, invented in the 1930s and in their growing use for doping purposes from the 1950s. The death of Danish cyclist Knud Enemark Jensen during competition at the Olympic Games in Rome 1960 (the autopsy revealed traces of amphetamine) increased the pressure on sports authorities to introduce drug testing with the purpose of stopping it. In 1966 FIFA (football) was among the first IFs to introduce doping tests in its World Championships. In the next year the International Olympic Committee (IOC) instituted its Medical Commission and set up its first list of prohibited substances. Drug tests were later introduced at the Olympic Games in Grenoble and at the Olympic Games in Mexico in 1968. In the year before, the urgency of anti-doping work had been highlighted by another tragic death, that of cyclist Tom Simpson during the Tour de France. Most IFs had introduced drug testing by the 1970s. However, the use of anabolic steroids was becoming widespread, especially in strength events, as there was no way of detecting them yet. A reliable testing method was finally introduced in 1974 and the IOC added anabolic steroids to its list of prohibited substances in 1976. This resulted in a marked increase in the number of doping-related disqualifications in the late 1970s, notably in strength-related sports such as throwing events and weightlifting. Anti-doping work was made more complicated in the 1970s and 1980s by suspicions of state sponsored doping practices in some countries, which were proven in the case of the former German Democratic Republic. The most famous doping case of the 1980s concerned Ben Johnson, the 100-metre champion who tested positive for stanozolol (an anabolic steroid) at the 1988 Olympic Games in Seoul. Johnson’s case focused the world’s attention on the problem of doping to an unprecedented degree.";
export const anjQuestions = [
  {
    label: "B1",
    items: [
      {
        question: text0Question,
        text: text0,
        subQuestionId: 0,
        textQuestion:
          "Some specialists at MIT were asked about manufacturing a piece of_________suitable for Gillette’s demands.",
        options: ["steel", "blade", "plastic", "wood"],
        answer: "steel",
      },
      {
        question: text0Question,
        text: text0,
        subQuestionId: 0,
        textQuestion:
          "Nickerson and Gillette received _________   _________ at the dawn of the 20th century.",
        options: ["their patent"],
        answer: "their patent",
      },
      {
        question: text0Question,
        text: text0,
        subQuestionId: 0,
        textQuestion: "The new razor blades were made to be _________.",
        options: ["safer"],
        answer: "safer",
      },
      {
        question: text0Question,
        text: text0,
        subQuestionId: 0,
        textQuestion: "Gillette’s mother experimented on new _________.",
        options: ["recipes"],
        answer: "recipes",
      },
      {
        question: text0Question,
        text: text0,
        subQuestionId: 0,
        textQuestion:
          "When he was a/an _________ King often wanted to improve products.",
        options: ["salesman"],
        answer: "salesman",
      },
      {
        question: text0Question,
        text: text0,
        subQuestionId: 0,
        textQuestion:
          "King’s employer in Wisconsin created a special _________ for a bottle.",
        options: ["cap"],
        answer: "cap",
      },
      {
        question: text0Question,
        text: text0,
        subQuestionId: 0,
        textQuestion:
          "Before partnering with Nickerson, Gillette approached for _________ help.",
        options: ["metallurgists"],
        answer: "metallurgists",
      },
      {
        question: text1Question,
        text: text1,
        subQuestionId: 1,
        textQuestion:
          "The public’s attention to doping was greatly raised at the end of the 1980s.",
        options: ["true", "false"],
        answer: "true",
      },
      {
        question: text1Question,
        text: text1,
        subQuestionId: 1,
        textQuestion:
          "Doping tests in a football World Championship started after the IOC created its list of forbidden substances",
        options: ["true", "false"],
        answer: "false",
      },
      {
        question: text1Question,
        text: text1,
        subQuestionId: 1,
        textQuestion:
          "The need to ban doping was emphasised after the invention of synthetic hormones",
        options: ["true", "false"],
        answer: "true",
      },
      {
        question: text1Question,
        text: text1,
        subQuestionId: 1,
        textQuestion:
          "The winner of the marathon at the beginning of the last century was doped before the run.",
        options: ["true", "false"],
        answer: "false",
      },
      {
        question: text1Question,
        text: text1,
        subQuestionId: 1,
        textQuestion:
          "Tests for anabolic steroids were a later addition to the Olympic drug-testing programme.",
        options: ["true", "false"],
        answer: "true",
      },
      {
        question: text1Question,
        text: text1,
        subQuestionId: 1,
        textQuestion:
          "Prohibited substances were first listed for a Tour de France competition.",
        options: ["true", "false"],
        answer: "false",
      },
    ],
  },
  {
    label: "B2",
    items: [
      {
        question: " ________ you come here tomorrow?",
        options: ["dod", "did", "will"],
        answer: "will",
      },
      {
        question: " Where ________ you live two years ago?",
        options: ["will", "does", "did"],
        answer: "did",
      },
      {
        question: " Did she ________ three hours ago?",
        options: ["slept", "sleep", "sleeps"],
        answer: "sleep",
      },
      {
        question: " If I open the window, it ________ be too noisy.",
        options: ["would", "will", "do"],
        answer: "will",
      },
      {
        question: " She saw ________ in the mirror.",
        options: ["themselves", "herself", "himself"],
        answer: "herself",
      },
      {
        question:
          " I wouldn't lend you my book if you ________ to bring yours.",
        options: ["forget", "forgot", "forgotten"],
        answer: "forgot",
      },
      {
        question: " If today ________ a holiday, I would go to the beach.",
        options: ["were", "am", "would be"],
        answer: "were",
      },
      {
        question: " I ________ TV when she came in.",
        options: ["watched", "will watch", "was watching"],
        answer: "was watching",
      },
      {
        question: " This used to ________ a desert island.",
        options: ["being", "been", "be"],
        answer: "be",
      },
      {
        question: " After he had done his homework he ________ to the cinema.",
        options: ["went", "had gone", "will go"],
        answer: "went",
      },
      {
        question:
          " The policeman asked the man if he ________ seen anything strange.",
        options: ["have", "did", "had"],
        answer: "had",
      },
      {
        question:
          " His car wouldn't have been broken if he hadn't ________ to check the oil.",
        options: ["forgotten", "forgot", "forget"],
        answer: "forgotten",
      },
      {
        question: " The police make us ________ carefully by giving fines.",
        options: ["to drive", "drived", "drove"],
        answer: "to drive",
      },
      {
        question: " He was forced ________ vegetables when he was a child.",
        options: ["to eat", "eating", "eat"],
        answer: "to eat",
      },
      {
        question: " Would you ________ moving your car?",
        options: ["mind", "be able", "want"],
        answer: "mind",
      },
      {
        question:
          " A sewer system is a system of .... below the level of the ground.",
        options: ["channels", "holes", "pipes", "sewage"],
        answer: "pipes",
      },
    ],
  },
];
