/* Ash Chowdhury's Block*/

var yearArray  = ["1927","1955","1941","1931","1931","1942","1959","1957","1954","1972",
                 "1939","2006","2006","2001","1994","1964","1952","1928","1971","2000",
                 "1949","2001","2001","1939","1982","1979","1993","1945","1994","2013"];


var movieArray = ["Napoleon","Night and Dog", "Citizen Kane","M",
                 "Casablanca","The Cloud Capped Star","The 400 Blows",
                 "The Seventh Seal","Seven Samurai","The Godfather",
                 "Gone with the Wind","The Lives of Others","Pans Labyrinth","Moulin Rouge",
                 "Burnt By the Sun","Charulata","Umberto D","The Passion of Joan of Arc","Mon Oncle Antoine",
                 "Crouching Tiger, Hidden Dragon","The Third Man","The Warrior","To the left to the father",
                 "The rules of the Game","Raging Bull","Appocalypse Now","Schindle's List",
                 "Brief Encounter","The Shwshank Redemption","Waar"];

function setYearAndMovie(release_year,movie_name,position)
{
	yearArray[position] = release_year;
	movieArray[position] = movie_name;
}   

function getYearAtIndex(index)
{
	return yearArray[index];
}

function getMovieAtIndex(index)
{
	return movieArray[index];
}

function getMovieListLength()
{
        return yearArray.length;
}             

/* Ash Chowdhury's Block Ends*/
 