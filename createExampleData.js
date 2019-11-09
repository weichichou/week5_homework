const Movie = require('./movie/model')

Movie
    .sync({ force: true })
    .then(()=>{ 
        Movie.create({
                title: 'The Nightmare Before Christmas',
                yearOfRelease: 1993,
                synopsis: 'Jack Skellington, king of Halloween Town, discovers Christmas Town, but his attempts to bring Christmas to his home causes confusion.'
            })
        Movie.create({
                title: 'Corpse Bride',
                yearOfRelease: 2005,
                synopsis: 'When a shy groom practices his wedding vows in the inadvertent presence of a deceased young woman, she rises from the grave assuming he has married her.'
            })
        Movie.create({
                title: 'Edward Scissorhands',
                yearOfRelease: 1990,
                synopsis: 'An artificial man, who was incompletely constructed and has scissors for hands, leads a solitary life. Then one day, a suburban lady meets him and introduces him to her world.'
            })
    })
    .catch(console.error)
