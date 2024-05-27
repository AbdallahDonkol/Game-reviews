import { Details } from "./details.module.js";
import { Ui } from "./ui.module.js";

export class Home{
    constructor(){
        document.querySelectorAll(".nav-item a").forEach(link =>{
            link.addEventListener("click",()=>{
                this.addActiveLink(link);
                let category = link.getAttribute("data-cat");
                this.getGames(category);
            })
        })
        this.loader = document.getElementById("loader");
        this.ui = new Ui();
        this.getGames();
        this.games = document.getElementById("games");
        this.details = document.getElementById("details");
    };
    addActiveLink(link){
        document.querySelectorAll(".nav-item a").forEach(function(ele){
            ele.classList.remove("active");
        })
        link.classList.add("active");
    }
    async getGames(cat='mmorpg'){
        this.loader.classList.remove("d-none");
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '63c215996dmsh430f1238cf6ebaep1a53fajsndefecc783c9f',
                'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
            }
        };
        const data = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${cat}`,options);
        const result = await data.json();
        this.loader.classList.add("d-none");
        this.ui.displayGames(result);
        document.querySelectorAll(".card").forEach(ele=>{
            ele.addEventListener("click",()=>{
                this.games.classList.add("d-none");
                this.details.classList.remove("d-none");
                const id = ele.getAttribute("data-id");
                new Details(id);
                
            })
        })
    }
}