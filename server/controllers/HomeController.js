const axios = require('axios')

class HomeController {
	static showHome(req, res) {
		res.send("App is running now")
   }
   
   static loginBackground(req, res) {
      axios({
         url: "https://api.unsplash.com/photos/random?query=nature",
         method: 'get',
         headers: {
            "Authorization" : `Client-ID ${process.env.UNSPLASH_TOKEN}`
         }
      })
      .then(photos => {
         console.log(photos.data.urls.raw);
         res.status(200).json(photos.data.urls.raw)
      })
      .catch(err => {
         console.log(err);
      })
   }
}

module.exports = HomeController;