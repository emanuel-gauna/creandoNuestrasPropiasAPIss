
const { Genre, Movie } = require('../../database/models');

module.exports = {
    list: async (req,res) => {
        
         try {
          const MOVIES = await Movie.findAll({
            include: ['genre']
          }) 
        const RESPONSE = {
            meta: {
                status: 200,
                total: MOVIES.length,
                endpoint: "api/movies",
            },
            data: MOVIES, 
          }
            return  res.json(RESPONSE);
          
          }catch (error) {
          return res.status(500).send(error)
        }
    },
    create:  async (req,res) => {
        let { title , rating, awards, release_date, genre_id} = req.body;
       
        let newMovie = {
            
                title: title,
                rating: rating,
                awards: awards,
                release_date: release_date,
                length: req.body.length,
                genre_id: genre_id
            
        };
        try {
            const RESULT = await Movie.create(newMovie);
            const RESPONSE = {
                endpoint: "api/movies/create",
                data: RESULT,
                status: 200,
                created: "ok"

            }
            return res.status(201).json(RESPONSE)
        } catch (error) {
            res.status(500).send(error)
        }
    
    },
    destroy: async (req,res) => {
        let movieId = req.params.id;
        
        try {
            const MOVIEDESTROY = await Movie.destroy({
                where:{ id: movieId }
            })
             const RESPONSE = {
             data:{ 
                endpoint: `api/movies/delete/${movieId}`,
                 msg: ` se elimino la pelicula ${MOVIEDESTROY.title}`,
             }
             }
               return res.json(RESPONSE);
             } catch (error) {
            return res.status(204).send(error)
        }
    },
}
  
