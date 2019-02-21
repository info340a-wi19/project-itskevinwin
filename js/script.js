// Get the modal
var watchModal = document.getElementById('watchModal');

// Get the button that opens the modal
var watchBtn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
watchBtn.onclick = function () {
    watchModal.style.display = "block";
    // modal.style.display = "none";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    watchModal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == watchModal) {
        watchModal.style.display = "none";
    }
}

// Add current movie to watch list
let watchImg = $('.watchImg');
let moviePic = $('<img src="" alt="" />');

let url = fetch('https://api.themoviedb.org/3/find/tt3521126?api_key=b3ab669819d549e92879dc08d6af2a14&language=en-US&external_source=imdb_id')
.then(function (response) {
    let dataPromise = response.json();
    return dataPromise;
}).then(function (data) {
    // console.log(data['movie_results'])
    let baseUrl = 'http://image.tmdb.org/t/p/w185';
    baseUrl = baseUrl + data['movie_results'][0]['poster_path'];
    watchImg.attr("src", baseUrl);
})
.catch(function(err) {
    //do something with the error
    console.error(err);  //e.g., show in the console
});

// Add the description to the newly added movie
let description = $('.new_img_description');
fetch('https://api.themoviedb.org/3/find/tt3521126?api_key=b3ab669819d549e92879dc08d6af2a14&language=en-US&external_source=imdb_id')
.then(function (response) {
    let dataPromise = response.json();
    return dataPromise;
}).then(function (data) {
    description.text(data['movie_results'][0]['overview']);
});

// Genre id's and their names
let allGenres =  {"genres": [
    {
      "id": 28,
      "name": "Action"
    },
    {
      "id": 12,
      "name": "Adventure"
    },
    {
      "id": 16,
      "name": "Animation"
    },
    {
      "id": 35,
      "name": "Comedy"
    },
    {
      "id": 80,
      "name": "Crime"
    },
    {
      "id": 99,
      "name": "Documentary"
    },
    {
      "id": 18,
      "name": "Drama"
    },
    {
      "id": 10751,
      "name": "Family"
    },
    {
      "id": 14,
      "name": "Fantasy"
    },
    {
      "id": 36,
      "name": "History"
    },
    {
      "id": 27,
      "name": "Horror"
    },
    {
      "id": 10402,
      "name": "Music"
    },
    {
      "id": 9648,
      "name": "Mystery"
    },
    {
      "id": 10749,
      "name": "Romance"
    },
    {
      "id": 878,
      "name": "Science Fiction"
    },
    {
      "id": 10770,
      "name": "TV Movie"
    },
    {
      "id": 53,
      "name": "Thriller"
    },
    {
      "id": 10752,
      "name": "War"
    },
    {
      "id": 37,
      "name": "Western"
    }
  ]
}

// Storage for the similar movie information
let similarTitles = [];
let similarPosters = [];
let similarOverview = [];
let similarRatings = [];
let similarGenreId = [];
let similarGenreNames = [];
let similarRelease = [];

// Get information about similar movies from API
fetch('https://api.themoviedb.org/3/movie/371638/similar?api_key=b3ab669819d549e92879dc08d6af2a14&language=en-US&page=1')
    .then(function (response) {
        let dataPromise = response.json();
        return dataPromise;
    })
    .then(function (data) {
        for(let i = 9; i < 13; i++){
            similarTitles.push(data['results'][i]['original_title']);
            let baseUrl = 'http://image.tmdb.org/t/p/w185';
            baseUrl = baseUrl + data['results'][i]['poster_path'];
            similarPosters.push(baseUrl);
            similarOverview.push(data['results'][i]['overview']);
            similarRatings.push(data['results'][i]['vote_average'] + "/10");
            similarGenreId.push(data['results'][i]['genre_ids']);
            similarRelease.push(new Date((data['results'][i]['release_date'])).toLocaleDateString('en-US'));
        }
        
        // Change genre ids into actual genre names
        let temp = [];
        similarGenreId.forEach(function(genres){
            genres.forEach(function(genre){
                allGenres['genres'].forEach(function(allGenre){
                    if(genre === allGenre['id']){
                        temp.push(allGenre['name']);
                }
                })
            })
            similarGenreNames.push(temp);
            temp = [];
        })

        let sim1Pic = $('#sim1 img');
        sim1Pic.attr("src", similarPosters[0]);
        sim1Pic.attr("alt", similarTitles[0] + ' movie');
        let sim1Desc = $('#sim1 p');
        sim1Desc.text(similarOverview[0]);
        let rating1 = $('<p class="img_rating col-sm-12"></p>');
        rating1.text('IMDB Score: ' + similarRatings[0]);
        rating1.insertAfter(sim1Desc);
        let genre1 = $('<p class="img_rating col-sm-12"></p>');
        genre1.text('Genres: ' + similarGenreNames[0]);
        genre1.insertAfter(rating1);
        let release1 = $('<p class="img_rating col-sm-12"></p>');
        release1.text('Release Date: ' + similarRelease[0]);
        release1.insertAfter(genre1);

        let sim2Pic = $('#sim2 img');
        sim2Pic.attr("src", similarPosters[1]);
        sim2Pic.attr("alt", similarTitles[1] + ' movie');
        let sim2Desc = $('#sim2 p');
        sim2Desc.text(similarOverview[1]);
        let rating2 = $('<p class="img_rating col-sm-12"></p>');
        rating2.text('IMDB Score: ' + similarRatings[1]);
        rating2.insertAfter(sim2Desc);
        let genre2 = $('<p class="img_rating col-sm-12"></p>');
        genre2.text('Genres: ' + similarGenreNames[1]);
        genre2.insertAfter(rating2);
        let release2 = $('<p class="img_rating col-sm-12"></p>');
        release2.text('Release Date: ' + similarRelease[1]);
        release2.insertAfter(genre2);

        let sim3Pic = $('#sim3 img');
        sim3Pic.attr("src", similarPosters[2]);
        sim3Pic.attr("alt", similarTitles[2] + ' movie');
        let sim3Desc = $('#sim3 p');
        sim3Desc.text(similarOverview[2]);
        let rating3 = $('<p class="img_rating col-sm-12"></p>');
        rating3.text('IMDB Score: ' + similarRatings[2]);
        rating3.insertAfter(sim3Desc);
        let genre3 = $('<p class="img_rating col-sm-12"></p>');
        genre3.text('Genres: ' + similarGenreNames[2]);
        genre3.insertAfter(rating3);
        let release3 = $('<p class="img_rating col-sm-12"></p>');
        release3.text('Release Date: ' + similarRelease[2]);
        release3.insertAfter(genre3);


        let sim4Pic = $('#sim4 img');
        sim4Pic.attr("src", similarPosters[3]);
        sim4Pic.attr("alt", similarTitles[3] + ' movie');
        let sim4Desc = $('#sim4 p');
        sim4Desc.text(similarOverview[3]);
        let rating4 = $('<p class="img_rating col-sm-12"></p>');
        rating4.text('IMDB Score: ' + similarRatings[3]);
        rating4.insertAfter(sim4Desc);
        let genre4 = $('<p class="img_rating col-sm-12"></p>');
        genre4.text('Genres: ' + similarGenreNames[3]);
        genre4.insertAfter(rating4);
        let release4 = $('<p class="img_rating col-sm-12"></p>');
        release4.text('Release Date: ' + similarRelease[0]);
        release4.insertAfter(genre4);

    });    

// Click listener for when the user adds the similar movie to the watch list
let addBtn = $('.addBtn');
let watchContent = $('#addRow');
let alreadyClicked = [];
let count = 0;
addBtn.click(function(){
    if(!alreadyClicked.includes($(this).parent().parent().parent().children('img').attr('alt'))){
        // New movie picturee to add to list
        let addMovie = $('<div class="column col-12 col-sm-12 col-md-12 col-lg-12 d-flex justify-content-center mt-new text-center newMovie"><div class="img_wrap"><div class="content"><img src="" alt=""><div class="container"><div class="img_description_layer new_description_layer row mt-0"><p class="img_description col-sm-12"></p><button type="submit" class="btn btn-danger col-sm-6 removeBtn" role="button">Remove</button></div></div></div></div></div>');
        addMovie.children().children().children().children().css('height', '386px');
        addMovie.children().children().children().attr('src', $(this).parent().parent().parent().children('img').attr('src'));
        addMovie.children().children().children().attr('alt', $(this).parent().parent().parent().children('img').attr('alt'));
        addMovie.children().children().children().children().children('button').attr('id', count);

        // If the description is too long then cut it before displaying it in the list
        if($(this).parent().children('p').text().length > 225){
            addMovie.children().children().children().children().children('p').text($(this).parent().children('.img_description').text().substring(0, 225) + "...");

        } else {
            addMovie.children().children().children().children().children('p').text($(this).parent().children('.img_description').text());
        }

        alreadyClicked.push($(this).parent().parent().parent().children('img').attr('alt'));
        count++;
        watchContent.append(addMovie);

        let row = $('.newMovie');
        if(count > 0){
            $('#watchContent').css('height', '375%');

            // Must set the viewer to that view and then refresh the page for these media query changes to work
            if (window.matchMedia("(min-width: 768px)").matches) {
                $('#watchContent').css('height', '250%');
            }

            if (window.matchMedia("(min-width: 992px)").matches) {
                $('#watchContent').css('height', '220%');
            }
        }

        if(count > 1){
            row.attr('class', 'column col-12 col-sm-12 col-md-6 col-lg-6 d-flex justify-content-center mt-new text-center newMovie');
            $('#watchContent').css('height', '425%');

            if (window.matchMedia("(min-width: 768px)").matches) {
                $('#watchContent').css('height', '250%');
            }

            if (window.matchMedia("(min-width: 992px)").matches) {
                $('#watchContent').css('height', '220%');
            }
        }

        if(count > 2){
            row.attr('class', 'column col-12 col-sm-12 col-md-6 col-lg-4 d-flex justify-content-center mt-new text-center newMovie');
            $('#watchContent').css('height', '475%');

            if (window.matchMedia("(min-width: 768px)").matches) {
                $('#watchContent').css('height', '315%');
            }

            if (window.matchMedia("(min-width: 992px)").matches) {
                $('#watchContent').css('height', '210%');
            }
        }

        if(count > 3){
            row.attr('class', 'column col-12 col-sm-12 col-md-6 col-lg-3 d-flex justify-content-center mt-new text-center newMovie');
            $('#watchContent').css('height', '530%');

            if (window.matchMedia("(min-width: 768px)").matches) {
                $('#watchContent').css('height', '315%');
            }

            if (window.matchMedia("(min-width: 992px)").matches) {
                $('#watchContent').css('height', '210%');
                $('.new_description_layer').css('min-height', '100%');
                $('.new_description_layer').css('height', '333px');
                $('.new_description_layer').css('width', '222px');

            }

            if (window.matchMedia("(min-width: 1200px)").matches) {
                $('.new_description_layer').css('height', '386px');
            }
        }

        // Click listener when the user wants to remove the newly added movie from the list
        let spec = 'button#' + (count - 1);
        let removeBtn = $(spec);
        let oldPic = '';
        removeBtn.click(function(){
        if ($(this).text() === 'Remove') {
            oldPic = $(this).parent().parent().parent().children('img').attr('src');
            $(this).parent().parent().parent().children('img').attr('src', 'img/x.png');
            $(this).parent().children('p').hide();
            $(this).text('Undo');                
        } else {
            $(this).parent().parent().parent().children('img').attr('src', oldPic);
            $(this).parent().children('p').show();
            $(this).text('Remove');                
        }      
    });
    }
});

// Change the size of the hover box based on the size of the screen
if (window.matchMedia("(min-width: 992px)").matches) {
    $('.md-change').css('height', '328px');
    $('.md-change').css('width', '222px');
}

if (window.matchMedia("(min-width: 1200px)").matches) {
    $('.md-change').css('height', '380px');
    $('.md-change').css('width', '257px');
}

// Click listener for when the user wants to remove the movie from the list
let alreadyRemoved = [];
let rmvBtn = $('.rmvBtn');
let rmvCount = 1;
let oldPic = {};
rmvBtn.click(function(){
    if(!alreadyRemoved.includes($(this).attr('id'))){
        let spec = 'button#' + $(this).attr('id');
        alreadyRemoved.push($(this).attr('id'))
        rmvBtn = $(spec);
        rmvCount++;   
}
},
    function(){
        if ($(this).text() === 'Remove') {
            oldPic[$(this).attr('id')] = $(this).parent().parent().parent().children('img').attr('src');
            $(this).parent().parent().parent().children('img').attr('src', 'img/x.png');
            $(this).parent().children('p').hide();
            $(this).text('Undo');
                        
        } else {
            $(this).parent().parent().parent().children('img').attr('src', oldPic[$(this).attr('id')]);
            $(this).parent().children('p').show();
            $(this).text('Remove');                
    }      
});
