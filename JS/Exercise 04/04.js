function movies(input){
    const movies = [];                                                                                                                                                                                                                                          
    for (const command of input) {
        if(command.includes('addMovie')){
            const movieName = command.slice(9, command.length)
            // const newMovie = new Movie(movieName, null, null);
            const newMovie = {
                name : movieName,
                director: null,
                date: null,
            };
            movies.push(newMovie);
        }
        else if(command.includes('directedBy')){
            const positionOfCommand = command.indexOf('directedBy');
            const movieName = command.slice(0, positionOfCommand - 1);
            if(!movies.find(m => m.name === movieName)){
                continue;
            }
            const directorName = command.slice(positionOfCommand + 11, command.length);
            const currentMovie = movies.find(m => m.name === movieName);
            currentMovie.director = directorName;
        }
        else{
            const positionOfCommand = command.indexOf('onDate');
            const movieName = command.slice(0, positionOfCommand - 1);
            if(!movies.find(m => m.name === movieName)){
                continue;
            }

            const date = command.slice(positionOfCommand + 7, command.length);
            const currentMovie = movies.find(m => m.name === movieName);
            currentMovie.date = date;
        }
    }

    for (const movie of movies.filter(m => m.name != null && m.director != null && m.date != null)) {
        console.log(JSON.stringify(movie));
    }
}

movies([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
    ]
    );