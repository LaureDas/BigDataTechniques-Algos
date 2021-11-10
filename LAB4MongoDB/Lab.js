//use movie
//show collections
//db.moviesEmbedded.count()

//db.moviesEmbedded.find({title: "Gladiator"})

//db.moviesEmbedded.distinct("genre")

//db.moviesEmbedded.find({$or: [{genre: "crime"}, {genre:"drama"}]})


//db.moviesEmbedded.find({$and: [{year:{$gte: 1967}}, {year:{$lte: 1995}} ]})

db.moviesEmbedded.find({$and: [{year:{$gte: 1967}}, {year:{$lte: 1995}} ]},{title: 1, year: 1}).sort({year: 1})

//access the 2
