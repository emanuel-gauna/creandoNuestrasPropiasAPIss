const { Genre } = require('../../database/models');



module.exports = {
    list: async (req,res) =>{
      try {
        const GENEROS = await Genre.findAll()
        
        const RESPONSE = {
          meta:{
             status: 200,
             total: GENEROS.length,
             url: "/api/genres",
          },
          data: GENEROS,
        };
          return  res.status(200).json(RESPONSE);
        } catch (error) {
        return res.status(500).send(error)
      }
    },
    genre: async (req,res) =>{
      const GENRE_ID = req.params.id;
      try {
        const ONEGENRE = await Genre.findByPk(GENRE_ID);
        if(ONEGENRE != null){
          const RESPONSE = {
            endpoint: `/api/genres/${GENRE_ID}`,
            data: ONEGENRE,
          }
          return res.status(200).json(RESPONSE)
        }
        return res.status(400).json(`el producto con  id:${GENRE_ID} no existe`)
      } catch (error) {
        return res.status(500).send(error)
      }
    }
}

