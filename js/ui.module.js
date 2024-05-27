export class Ui{
    constructor(){};

    displayGames(list){
        let cartona =``;
        for(let i=0;i<list.length;i++){
            let shortString = list[i].short_description;
            let final = this.cutString(shortString);
            
            cartona+=`<div class="col-sm-12 col-md-6 col-lg-4 col-xl-3 g-4">
            <div class="card mb-3 bg-main text-white" id="card" data-id="${list[i].id}">
                <div class="header p-3">
                    <img src="${list[i].thumbnail}" class="img-fluid rounded-top-3" alt="game image">
                </div>
                <div class="card-body py-0 d-flex justify-content-between align-items-center" style="min-height:47px;">
                  <h6 class="card-title">${list[i].title}</h6>
                  <span class="card-text rounded-2 text-bg-primary py-1 px-2">Free</span>
                </div>
                <p class="text-center px-3 mt-1 small opacity-50" style="min-height:70px;max-height:70px;">${final}</p>
                <div class="card-footer d-flex justify-content-between align-items-center small">
                  <span class="badge-color rounded-2 px-2 py-1 fw-bold" style="font-size:10px;">${list[i].genre}</span>
                  <span class="badge-color rounded-2 px-2 py-1 fw-bold text-center" style="font-size:10px;">${list[i].platform}</span>
                </div>
              </div>
        </div>`
        }
        
        document.getElementById('row').innerHTML= cartona;
    }
    cutString(string){
        let words = string.split(" ");
        let firstTenWords = words.slice(0,10);
        let result = firstTenWords.join(" ");
        return result;
    }
    displayDetails(details){
        document.getElementById("details").innerHTML = `<div class="container">
        <header class="d-flex justify-content-between align-items-center mb-4">
          <h1>Details Game</h1>
          <button class="btn-close btn-close-white" id="btnClose"></button>
        </header>
        <div class="row g-4">
          <div class="col-md-4">
            <img src="${details.thumbnail}" class="img-fluid" alt="game image">
          </div>
          <div class="col-md-8">
            <h2 class="mb-2">Title: ${details.title}</h2>
            <p>Category:
              <span class="text-bg-info rounded-2 py-1 px-2 small fw-bold">${details.genre}</span>
            </p>
            <p>Platform:
              <span class="text-bg-info rounded-2 py-1 px-2 small fw-bold">${details.platform}</span>
            </p>
            <p>Status:
              <span class="text-bg-info rounded-2 py-1 px-2 small fw-bold">${details.status}</span>
            </p>
            <p>${details.description}</p>
            <button class="btn btn-outline-warning text-white mb-5"><a href="${details.game_url}" target="_blank">Show Game</a></button>
          </div>
        </div>
      </div>`
    }
}