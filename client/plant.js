const server = "http://localhost:3000/"
const token = "&token=fR_0WgE03ezVgDIqhNpDwyfJrsk2WHbs00tdhPyWTSg"

$(document).ready(() => {
   $("#all-plant-pages").show()
   getAllPlants()

   $("#btn-get-another-random").on("click", function () {
      getAnotherPlants()
   })
   
})

getAllPlants = () => {
   $("#all-plant-pages").show()
   $.ajax({
      type: "GET",
      url: server + "plants",
   }).done(plants => {
      // console.log(plants.data);
      plants.data.forEach(plant => {
         if (!plant.common_name) {
            plant.common_name = "No common name as of yet"
         }

         if (!plant.scientific_name) {
            plant.scientific_name = "No scientific name as of yet"
         }

         if (!plant.genus) {
            plant.genus = "'Not belong to any genus'"
         }

         if (!plant.family) {
            plant.family = "'Not belong to any family'"
         }

         if (!plant.year) {
            plant.year = "'Date Discovered unknown'"
         }

         if (!plant.bibliography) {
            plant.bibliography = "Not show up in any bibliography"
         }

         if (!plant.author) {
            plant.author = "No author wrote bibliography about this plant"
         }

         if(plant.synonyms.length === 0) {
            plant.synonyms.push('No publicly known synonyms')
         }

         if (!plant.image_url) {
            let name = plant.slug
            $("#plant-list").append(`
            <div class="card">
            
            <div class="card-body">
               <h5 id="plant-list-name" class="card-title">Common Name: ${plant.common_name}</h5>
               <p id="plant-list-scientific" class="card-text"><small class="text-muted">${plant.scientific_name}</small></p>
               
               <p class="card-text">
                  This plant belong to: ${plant.genus} and ${plant.family}, and accepted as valid plant species in "${plant.year}". 
                  First mentioned in "${plant.bibliography}" by ${plant.author}. 
                  Another synomys for this plant name is "${plant.synonyms[0]}."
               </p>
               </div>
            </div>
         `  );
         }
         else {
            let name = plant.slug
            $("#plant-list").append(`
            <form>
            <div class="card">
            
            <div class="card-body">
               <h5 id="plant-list-name" class="card-title">Common Name: ${plant.common_name}</h5>
               <p id="plant-list-scientific" class="card-text"><small class="text-muted">${plant.scientific_name}</small></p>
               <a target="_blank" href="${plant.image_url}">
                  <img id="plant-list-img" src="${plant.image_url}" alt="Card image cap">
               </a>
               
               <p class="card-text">
                  This plant belong to Genus${plant.genus} and Family ${plant.family}, and accepted as valid plant species in "${plant.year}". 
                  First mentioned in "${plant.bibliography}" by ${plant.author}.
                  Another synomys for this plant name is "${plant.synonyms[0]}."
               </p>
               </div>
            </div>
            </form>
            
         `);
         }
      })
   })
   .fail(err => {
      console.log(err);
   })
}

getAnotherPlants = () => {
   $("#plant-list").empty()

   getAllPlants()
}

//  <button id="btn-view-plant" type="submit" class="btn btn-outline-success" value="${plant.slug}" >TEST</button>

viewPlantDetails = (e, name) => {
   e.preventDefault()
   // let server = `https://trefle.io/api/v1/plants/${name}?${token}`
   console.log(name);
   // console.log(server);
   // $("#all-plant-pages").hide()
   // $.ajax({
   //    type: "GET",
   //    url: server,
   // })
   // .done(plants => {
   //    console.log(plants);
   // })
   // .fail(err => {
   //    console.log(err);
   // })
}


// let = https://trefle.io/api/v1/plants?token=fR_0WgE03ezVgDIqhNpDwyfJrsk2WHbs00tdhPyWTSg&page=2
// nextPage = (page) => {
//    $("#all-plant-pages").empty()
//    $.ajax({
//       type: "GET",
//       url: "https://trefle.io/api/v1/plants?token=fR_0WgE03ezVgDIqhNpDwyfJrsk2WHbs00tdhPyWTSg&page=2",
//       headers: {
//          "Access-Control-Allow-Origin" : "*"
//       }
//       // url: allPlantsURL + `${PLANT_TOKEN}&page=${page + 1}`,
//    })
//    .done(plants => {
//       console.log(plants.data);
//    })
//    .fail(err => {
//       console.log(err);
//    })
// }

// nextPageController()