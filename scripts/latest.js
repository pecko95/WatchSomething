//Spinner
const spinner = document.querySelector(".spinner");
spinner.style.display = "none";
const container = document.querySelector(".showcase");
container.style.display = "none"
//When window is loaded, it runs the function getMovies() showcasing the Latest movies.
window.onload = function getMovies(){
	spinner.style.display = "block";
	setTimeout(() => {
		spinner.style.display = "none";
		container.style.display = "flex";
	}, 1000);
	//Get the API.
	axios.get("https://api.themoviedb.org/3/movie/now_playing?api_key=fa155f635119344d33fcb84fb807649b&language=en-US&page=1&region=US")
		.then( (response) =>{
			console.log(response)
			//Fetches the data - > results from the API.
			let movies = response.data.results;
			let output = "";
			//Appends to the output the info for each fetched result.
			$.each(movies, (index,movie)=>{
				output += `
					<div class="card">
						<div class="addBtn"><span><i class="ion-plus-circled"></i></span></div>
						<div class="card_img">
							<img src="http://image.tmdb.org/t/p/w300/${movie.poster_path}" onerror="this.onerror=null;this.src='../images/image2.png';">
						</div>
						<div class="card_text">
							<h3>${movie.title}</h3>
							<p>Rating: <strong>${movie.vote_average}</strong></p>
							<p>Release date: <strong>${movie.release_date}</strong></p>
							<a onclick="movieSelected('${movie.id}')" class="btn" href="#"> Movie Details </a>
						</div>
					</div>
				`;
			})
			//Creates a variable that targets the "movies" element in the HTML
			//that will be used to output the data results to.
			let movieInfo = document.getElementById("movies");
			movieInfo.innerHTML = output;
			//Show the pages buttons after movies are listed.
			let pages = document.querySelector(".pages");
			pages.style.display = "flex";
		})
		//If theres an error, logs the error in console.
		.catch( (err) =>{
			console.log(err);
		})
}
//When the user clicks on "Movie Details", it sets the ID of that particular movie into the Session storage,//and changes the current page to the "movie-page.html", listing the info for the movie that matches the id
function movieSelected(id){
	sessionStorage.setItem("movieId", id);
	//Stores the ID onto the location, and opens the page's location listed below.
	location.replace("../movie-page.html");
	return false;
}
//Creates a variable for the page number to make it dynamic.
var pageNum = 1;
//Targets the pages button with "prev" id, and goes backwards one page.
const prev = document.getElementById("prev");
prev.addEventListener("click", ()=>{
	//Decrements(?) the page number by 1.
	pageNum--;
	//Scrolls to top of the window after the button is clicked.
	window.scrollTo(0,0);
	search(pageNum);
})
//Targets the pages button with "next" id, and goes forwards one page.
const next = document.getElementById("next");
next.addEventListener("click", ()=>{
	//Increments the page number by 1.
	pageNum++;
	//Scrolls to top of the window after the butotn is clicked.
	window.scrollTo(0,0);
	search(pageNum);
})
//Showcases the movies after the user changed the page by clicking previous/next button.
function search(pageNum){
		axios.get("https://api.themoviedb.org/3/movie/now_playing?api_key=fa155f635119344d33fcb84fb807649b&language=en-US&page="+pageNum)
		.then( (response) =>{
			console.log(response)
			let movies = response.data.results;
			let output = "";

			$.each(movies, (index,movie)=>{
				output += `
					<div class="card">
						<div class="addBtn"><span><i class="ion-plus-circled"></i></span></div>
						<div class="card_img">
							<img src="http://image.tmdb.org/t/p/w300/${movie.poster_path}" onerror="this.onerror=null;this.src='../images/image2.png';">
						</div>
						<div class="card_text">
							<h3>${movie.title}</h3>
							<p>Rating: <strong>${movie.vote_average}</strong></p>
							<p>Release date: <strong>${movie.release_date}</strong></p>
							<a onclick="movieSelected('${movie.id}')" class="btn" href="#"> Movie Details </a>
						</div>
					</div>
				`;
			})
			let movieInfo = document.getElementById("movies");
			movieInfo.innerHTML = output;
		})
		.catch( (err) =>{
			console.log(err);
		})
}
