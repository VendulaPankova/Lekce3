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


/*const apartment = {
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
  // podruhé*/

// Druhé opakování
// Vstupy a Výstupy

const hodMzda = 300
const pocetHodin = Number(prompt("zadej pocet hodin zaměstnance", "160")) //"160" je předepsaná hodnota může být prázdné, ale pak si to můžeme libovolně měnit
//const premie = prompt("zadej mimořádnou odměnu v czk") //počítá to vše dohromady jako text vedle sebe ne jak čísla "10000" -> 10000
const premie = Number(prompt("zadej mimořádnou odměnu v czk"))

const plat = (hodMzda * pocetHodin) + premie

document.body.innerHTML += "<p>Pepa Novák si vydelal: " + plat + " czk</p>"

// Očkování

const jmeno = prompt("zadej své jméno a příjmení")
const vek = prompt("zadejte svůj věk")

document.body.innerHTML += "<p>" + jmeno + " věk: " + vek + "</p>"

// Výplata jako Stránka

const hodinovaMzda = Number(prompt("Zde zadej mzdu:"))
const pocetH = Number(prompt("Zde zadej pocet hodin/denně:"))
const pocetDni = Number(prompt("Zde zadej součet odpracovaných dní:"))
const vyplata = (hodinovaMzda * pocetH) * pocetDni

document.body.innerHTML += "<p> Tvá měsíční mzda je: " + vyplata + " czk </p>"

// Objekty

const nazev = "Khiha 1"
const autor = "Vendula Pánková"
const cena = 520
const naSklade = true

const kniha = {
    nazev: "Kniha 1",
    autor: "Vendula Pánková",
    cena: 450,
    naSkalde: true,
    
}

kniha.autor = "Karel" //nemohu měnit objekty, ale mohu měnit vnitřek objektu ikdyž je konstatní
kniha.jazyk = "čeština"
document.body.innerHTML += "<p>Kniha: " + nazev + ",autor:" + autor + "</p>"
document.body.innerHTML += "<p>Kniha: " + kniha.nazev + ",autor:" + kniha.autor + "</p>"

//objekt v objektu

const user1 = {
  fullName: 'Lubomír Větvička',
  login: 'lubos',
  address: {
    streetName: 'Pod Kaštany',
    number: 31,
    city: 'Horní Dlouhonosy',
    postalCode: '123 11',
  },
  cartItems: 0,
};
console.log(user1.address.city)
document.body.innerHTML += "<p> adresa:" + user1.address.city + "</p>"

//cvičení na doma Příklady a objekty

// cvičení realitka

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

apartment.status = "taken"

document.body.innerHTML += "<p> Počet pokojů:" + apartment.disposition + "</p>"
document.body.innerHTML += "<p> Čistý nájem bez poplatků:" + apartment.price.rent + "</p>"
document.body.innerHTML += "<p> Velikost bytu:" + apartment.area.floorage + "m2 </p>"
document.body.innerHTML += "<p> město: " + apartment.city + " a městská část: " + apartment.district + "</p>"
document.body.innerHTML += "<p> Stav inzerátu: " + apartment.status + "</p>"

// Cvičení knihovna

const knihovna = {
    kniha: {

      nazev: "Na západní frontě klid",
      autor: "Erich Maria Remarque",
      cena: 850,
      pocetStran: 380,
      rokVydani: "1928",     
          },

    kniha2: {
      
      nazev: "1984",
      autor: "George Orwel",
      cena: 1050,
      pocetStran: 740,
      rokVydani: "1948",      


            },


                  }

const person = {
        jmeno: prompt("jak se jmenujete?"),
        vek: Number(prompt("Kolik je Vám let?")),
        jazyk: window.navigator.jazyk,
}

document.body.innerHTML += "<p>Zadané jméno: " + person.name + ", váš věk: " + person.age + "</p>";
document.body.innerHTML += "<p>Váš jazyk: " + person.language + "</p>";
document.body.innerHTML += "<p>Byli jste zaregistrováni na očkování.</p>";




  