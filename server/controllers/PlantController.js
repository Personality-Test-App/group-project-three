const axios = require('axios')
const faker = require('faker')

let allPlantsURL = "https://trefle.io/api/v1/plants?"

/*
karena bingung pagination pake axios (dari API udah ada paginationnya)
jadi ini aku random aja
*/
pageNumber = () => {
   page = faker.random.number({
      'min': 1,
      'max': 18826
   });
   return page
}

class PlantController {
   static getAllPlants(req, res) {
      axios({
            url: allPlantsURL + `token=${process.env.PLANT_TOKEN}&page=${pageNumber()}`,
            method: 'get',
         })
         .then(plants => {
            res.status(200).json(plants.data)
         })
         .catch(err => {
            console.log(err);
         })
   }

}

module.exports = PlantController