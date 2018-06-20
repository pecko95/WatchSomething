# WhatToWatch - Find a movie or tv show to watch with ease !
<p align="center">
    <img src="images/repoImage.png" width="500px"/>
    <img src="images/repoImage2.png" width="500px"/>
    <img src="images/repoImage3.png" width="500px"/>
</p>

### About
This project uses an API from themoviedb.com in order to list movies & tv shows according to the following criteria:
* Latest;
* Popular (with set minimum and maximum dates);
* Top rated (of all time);
* On air (tv shows that are currently on air);
* Upcoming movies.

It also provides an option to SEARCH for movies/tv shows by:
* Title;
* Actor/Actress name;
* Year (original year of release);
* Genre.
#### Personal learning project.
##### I do not hold any ownership of the images used in this project. This project is for non-commercial use.

###### To-Do in a future update:
* Add option to select season/episode and show the plot about it for TV Shows.
* Make the end date of upcoming movies dynamic.
* Add swipe listener for movies / tv shows output on the home page, when users open the webpage on a mobile.
* Fix the bugs.

#### Update v4 (2018-06-20)
####### DONE:
* New color scheme (black/red).
* Edited navigation bar with better animation, so now it doesnt looks buggy.
* Edited Detailed info page.
* Redesigned cards & pages to match new color scheme.
* Fixed the page buttons, in an effor to fix a scrolling bug.
* Minor changes to script files.
* Updated the about page.
* Fixed some animations, to smooth them out.

####### BUGS:
* When user drags the movies / tv shows outputed on the home page, if he releases the mouse click while still on top of some of the cards, it auto-triggers the click event, and takes the user to the detailed info page.
* Users can't swipe left/right trough the movies / tv shows outputs on the home page, no "swipe" listener added yet.
* If the user opens the detailed page for some movie / tv show from the home page, if he click on "back" button, or uses the browser's back option, it won't go back to the previous page (home page) as it's supposed to.* This occurs only when user opens detailed info page from the movies/tv shows that are outputted on the home page.
---------------------------------------
#### Update v3 (2018-06-14)
###### DONE:
* Added option to sort the output by set min/max average rating (for movies by year and genre only).
* Added option to sort "UPCOMING" movies by month.
* Re-designed the cards for recommended movies/tv shows on detailed info page.
* Added a button to "Add to watchlist" at detailed info page for movies/tv shows.
* Re-designed the slide menu for small screens.
* Corrected the links.
* Added a notification when you add to watchlist/favorites list.
* Added option to remove ALL movies/tv shows from watchlist / favorites list, at ONCE.
* Corrected titles of pages.
* Created the about page, giving credits to TMDB and Flaticon(Freepik).
---------------------------------------
#### Update v2 (2018-05-29)
Lists are here !! Personal watchlist and favorites list(for movies and tv shows).
###### DONE:
* Re-designed the home page.
* Created list for movies/tv shows to watch, and favorites list for movies/tv shows.
* Added an option to add to watchlist or favorites list for every search option( top rated, upcoming,latest, popular, by year, by actor, by genre, by title for movies/tv shows).
* Corrected the links to match properly with each other.
---------------------------------------
#### Big Update v1 (2018-05-22)
A lot of changes and improvements have been made, from functionality to design. Here's a list of what's been changed/imporved so far.
###### DONE:
* Added option to search by genres in movies by year.
* Added option to serach by genres in tv shows by year.
* Added page change option for "recommended" to shows/movies-page.
* Added animation to Genre select to all pages where genre option is available.
* Added modal box, question mark, info in modal box.
* Added reset button for the genres, that resets the selected genre while the inputed actor/year remains the same, and re-loads from page 1.
* Added option to reset the selected genres on name(by actor)/year(by year) change in the input.
* Added cast info for movies/tv shows & fixed bug where not all genres were shown properly.
* Added upcoming movies, with today(each day) date as minimum release date, and a static set max date(2019-01-01). (* Working on making the end date dynamic.)
* Added animations to movie / tv show cards @ the search pages.
* Re-designed home page, movie / tv show info page, and all pages for searching options.
* Added modal box to Learn More @  Home page, containing some basic info how to use the website.
---------------------------------------
###### Known bugs: 3 (currently at the time of update v4).