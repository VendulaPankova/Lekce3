// const hodinovka = 300
// const pocetHodin = Number(prompt("Zadej pocet hodin zamestnance"))
// const premie = Number(prompt("Zadej mimoradnou odmenu v Kc")) // "10000" -> 10000
// const plat = (hodinovka * pocetHodin) + premie

// document.body.innerHTML = "<p>Pepa Novak si vydelal: " + plat + " Kc.</p>"

/*const jmeno = prompt("Zadejte své jméno:")
const vek = Number(prompt("Zadejte svůj věk:")) // Převedeme zadaný věk na číslo

// Vytvoříme zprávu, kterou zobrazíme na stránce
const zprava = jmeno + vek

// Vypíšeme zprávu do těla stránky
document.body.innerHTML = "<p>registrace očkování proti COVID-19:" + zprava + "let.</p>"*/


//objekty

/*const nazev = "kniha 1"
cosnt autor = "Michal Kucera"
const cena = 450
const naSklade = true

const kniha = {
        nazev: "Kniha 1",
        autor: "Michal Kucera",
        cena: 450,
        naSklade: true,
    
}

document.body.innerHTML += "<p>Kniha: " + nazev +", autor:" + autor + "</p>"
document.body.innerHTML += "<p>Kniha: " kniha.nazev + ", autor:" + kniha.autor + "</p>"*/

// od Michala

/*const nazev = "Kniha 1"
const autor = "Michal Kucera"
const cena = 450
const naSklade = true

const kniha = {
    nazev: "Kniha 1",
    autor: "Michal Kucera",
    cena: 450,
    naSklade: true,
}

document.body.innerHTML += "<p>Kniha: " + nazev + ", autor: " + autor + "</p>"
document.body.innerHTML += "<p>Kniha: " + kniha.nazev + ", autor: " + kniha.autor + "</p>"

Michal Kučera (lektor) 19:33


const nazev = "Kniha 1"
const autor = "Michal Kucera"
const cena = 450
const naSklade = true

const nazev2 = "Kniha 1"
const autor2 = "Michal Kucera"
const cena2 = 450
const naSklade2 = true

const kniha = {
    nazev: "Kniha 1",
    autor: "Michal Kucera",
    cena: 450,
    naSklade: true,
}

const kniha2 = {
    nazev: "Kniha 2",
    autor: "Michal Kucera",
    cena: 450,
    naSklade: true,
}
kniha.autor = "Vendy"
kniha.jazyk = "cestina"

document.body.innerHTML += "<p>Kniha: " + nazev + ", autor: " + autor + "</p>"
document.body.innerHTML += "<p>Kniha: " + kniha.nazev + ", autor: " + kniha.autor + "</p>"*/


/*const nazev = "Kniha 1"
const autor = "Michal Kucera"
const cena = 450
const naSklade = true

const nazev2 = "Kniha 1"
const autor2 = "Michal Kucera"
const cena2 = 450
const naSklade2 = true

const kniha = {
    nazev: "Kniha 1",
    autor: "Michal Kucera",
    cena: 450,
    naSklade: true,
}

const kniha2 = {
    nazev: "Kniha 2",
    autor: "Michal Kucera",
    cena: 450,
    naSklade: true,
}

kniha.autor = "Jana"
kniha.jazyk = "cestina"

document.body.innerHTML += "<p>Kniha: " + nazev + ", autor: " + autor + "</p>"
document.body.innerHTML += "<p>Kniha: " + kniha.nazev + ", autor: " + kniha.autor + "</p>"*/


// Příklady - Objekty

// REALITKA CV.1


const apartment = {
    type: 'rent',
    disposition: '3+1',
    area: {
      floorage: 100,
      balcony: 2,
      units: 'sqm',
    },
    city: 'Prague',
    district: 'Old Town',
    price: {
      rent: 28000,
      fees: {
        water: 1000,
        energy: 2500,
        services: 560,
      },
      currency: 'czk',
    },
    ownership: 'personal',
    condition: 'renovated',
    status: 'free',
    floor: 3,
  };
const mesto = apartment.city
const mestskaCast = apartment.district

  document.body.innerHTML += "<p>apartment: " + apartment.disposition + "</p>"
  document.body.innerHTML += "<p>price: " + apartment.price.rent  + "</p>"
  document.body.innerHTML += "<p>celý objekt:" + apartment.area.floorage + "</p>"
  document.body.innerHTML += "<p>Město: " + mesto + " ,Měststká část: " + mestskaCast + "</p>"

  apartment.status = "taken"

  document.body.innerHTML += "<p>změna stavu inzerátu: " + apartment.status + "</p>"

  /*zkouška jestli commitnu lekci 3*/
  // podruhé