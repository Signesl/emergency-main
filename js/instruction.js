console.log("Loaded instuctions");

document.querySelector(".info-text h2").textContent =
  "BLÆKSPRUTTEN TRUER MED AT UDSLÆDTE VERDEN.";
document.querySelector(".placeholder").textContent = "EN ALVORLIG SITUATION";
document.querySelector("#efficiency").textContent =
  "Hvis vi som menneskehed ikke ændrer adfærd og behandler planeten og verdenshavene respektfuldt, vil blæksprutten trække alle verdens kontinenter ned i havet, så vi ikke kan ødelægge flere havbunde og udrydde flere arter.";
document.querySelector("#requirement").textContent =
  "Det vil have konsekvenser for hele verdens overlevelse";

document
  .querySelector("#viriverhavbundenistykker")
  .addEventListener("click", viriverhavbundenistykkerF);

function viriverhavbundenistykkerF() {
  console.log("viriverhavbundenistykkerF no thanks");

  document.querySelector(".info-text h2").textContent =
    "BLÆKSPRUTTEN TRUER MED AT UDSLÆDTE VERDEN.";

  document.querySelector(".placeholder").textContent =
    "VI RIVER HAVBUNDEN I STYKKER";

  document.querySelector("#efficiency").textContent =
    "Menneskelig aktivitet som bundtrawling, dybhavsminedrift og udbygning af havne og kystområder fjerner og ødelægger havbundens økosystemer. Når bunden bliver forstyrret, forsvinder levesteder for fisk, koraller og bunddyr og det tager årtier at genoprette.";

  document.querySelector("#requirement").textContent =
    "For at redde havbunden må vi ændre den måde, vi udnytter havet på. Bundtrawling, dybhavsminedrift og omfattende kystbyggeri skal begrænses, så havets økosystemer får ro til at gendanne sig. Ved at etablere beskyttede havområder og give naturen plads kan koraller, ålegræs og bunddyr igen skabe liv og balance i dybet. Havbunden kan hele, men kun, hvis vi stopper med at rive den op.";
}

document
  .querySelector("#viforgifterhavet")
  .addEventListener("click", viforgifterhavetF);

function viforgifterhavetF() {
  console.log("viforgifterhavetF no thanks");

  document.querySelector(".info-text h2").textContent =
    "BLÆKSPRUTTEN TRUER MED AT UDSLÆDTE VERDEN.";

  document.querySelector(".placeholder").textContent =
    "VI FORGIFTER OG FORURENER HAVET";

  document.querySelector("#efficiency").textContent =
    "Millioner af tons plastik, pesticider og tungmetaller ender i havet hvert år. De synker til bunds, ophobes i dyr og giftstofferne bevæger sig op gennem fødekæderne. Selv i de dybeste oceaner findes nu mikroplast og giftrester.";

  document.querySelector("#requirement").textContent =
    "For at standse den giftige strøm mod havet skal vi bremse forureningen ved kilden. Produktion og brug af engangsplast skal reduceres, og spildevand samt industriudslip skal renses, før det når ud i havet. Vi må udvikle bedre affaldssystemer og teknologier, der fanger mikroplast og giftstoffer, inden de spreder sig i fødekæden. Hvis vi stopper tilførslen af gift, kan havet langsomt begynde at rense sig selv.";
}

document
  .querySelector("#viændrerhavetsbalance")
  .addEventListener("click", viændrerhavetsbalanceF);

function viændrerhavetsbalanceF() {
  console.log("viændrerhavetsbalanceF no thanks");

  document.querySelector(".info-text h2").textContent =
    "BLÆKSPRUTTEN TRUER MED AT UDSLÆDTE VERDEN.";

  document.querySelector(".placeholder").textContent =
    "VI ØDELÆGGER HAVETS BALANCE";

  document.querySelector("#efficiency").textContent =
    "Når vi udleder CO₂, optager havet en stor del af det, men det har konsekvenser. Temperaturen stiger, havet bliver surere, og ilten forsvinder fra dybere lag. Arter flytter sig, nogle dør ud, og hele fødekæder bryder sammen.";

  document.querySelector("#requirement").textContent =
    "For at genskabe havets balance må vi sænke klodens temperatur. Det kræver en markant reduktion i CO₂-udledninger og beskyttelse af naturens egne kulstoflagre i ålegræs, mangrover og vådområder. Disse økosystemer binder kulstof og skaber levesteder, som holder havet sundt og levende. Hvis vi handler nu, kan vi dæmpe varmen og give havet en chance for at ånde igen.";
}
