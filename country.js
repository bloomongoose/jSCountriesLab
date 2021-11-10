class Country {
    constructor(name, lang, greeting, colors) {
        this.name = name;
        this.lang = lang;
        this.greeting = greeting;
        this.colors = colors;
    }
    Display(){
        document.getElementById("CountryName").innerText = this.name;
        document.getElementById("OfficialLanguage").innerText = this.lang;
        document.getElementById("HelloWorld").innerText = this.greeting;
        
        document.getElementById("Color1").style.backgroundColor = this.colors[0];
        document.getElementById("Color2").style.backgroundColor = this.colors[1];
        document.getElementById("Color3").style.backgroundColor = this.colors[2];
    }
}
let usa = new Country("USA", "Murican", "Why Hello there world! Have some McDonalds", ["red", "white", "blue"]);
let mexico = new Country("Mexico", "Spanish", "Hola mundo!", ["red", "white", "green"]);
let algeria = new Country("Algeria", "Arabic and Berber", "Sup", ["blue", "yellow", "red"]);
let japan = new Country("Japan", "Japanese", "Konichiwa", ["red", "white"] );
let bangladesh = new Country("Bangladesh", "Bengali", "Balo achen", ["red", "green"])


function SwitchCountry() {
    let input = document.getElementById("CountryList").value;
    console.log(input)
    let country;

    if (input === "USA") {
        //set country to usa 
        country = usa;
    }
    else if (input === "Mexico") {
        country = mexico;
    }
    else if (input === "Algeria") {
        country = algeria;
    }
    else if (input === "Japan") {
        country = japan;
    }
    else if (input === "Bangladesh") {
        country = bangladesh;
    }

    country.Display();

}
