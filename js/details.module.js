import { Ui } from "./ui.module.js";

export class Details{
    constructor(id){
        this.loader = document.getElementById("loader");
        this.getDetails(id).then(()=>{
            this.closeDetails();
        })
    };
    async getDetails(id){
        this.loader.classList.remove("d-none");
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '63c215996dmsh430f1238cf6ebaep1a53fajsndefecc783c9f',
                'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
            }
        };
        const details = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`, options) ;
        const result = await details.json();
        this.loader.classList.add("d-none");
        new Ui().displayDetails(result);
    }
    closeDetails(){
        document.getElementById("btnClose").addEventListener("click",()=>{
            document.getElementById("games").classList.remove("d-none");
            document.getElementById("details").classList.add("d-none");
        })
    }
}