'use strict';

angular.module('app.controllers', []).
    controller('ComicController', ['$http', function($http){
	var comicCtrl = this;
	comicCtrl.comics = gems;

	/*$http.get('comics.json').success(function(data){
      comicCtrl.comics = data;
    }).
    error(function(data){
    	alert("Couldn't find JSON");
    });*/
}]);

var gems = [{
    "hasImage": true, 
    "image": "http://leagueofcomicgeeks.com//comics/covers/large/5338501-saga-24.jpg?1407296772", 
    "price": " $2.99", 
    "publisher": "Image Comics", 
    "releaseDate": " Oct 29th, 2014 ", 
    "thumbnail": "http://leagueofcomicgeeks.com//comics/covers/medium/5338501-saga-24.jpg?1407296772", 
    "title": "Saga #24"
},{
    "hasImage": true, 
    "image": "http://leagueofcomicgeeks.com//comics/covers/large/3409895-batman-eternal-30.jpg?1412092886", 
    "price": " $2.99", 
    "publisher": "DC Comics", 
    "releaseDate": " Oct 29th, 2014 ", 
    "thumbnail": "http://leagueofcomicgeeks.com//comics/covers/medium/3409895-batman-eternal-30.jpg?1412092886", 
    "title": "Batman Eternal #30"
},{
    "hasImage": true, 
    "image": "http://leagueofcomicgeeks.com//comics/covers/large/8543543-guardians-of-the-galaxy-20.jpg?1413850423", 
    "price": " $3.99", 
    "publisher": "Marvel Comics", 
    "releaseDate": " Oct 29th, 2014 ", 
    "thumbnail": "http://leagueofcomicgeeks.com//comics/covers/medium/8543543-guardians-of-the-galaxy-20.jpg?1413850423", 
    "title": "Guardians of the Galaxy #20"
},{
    "hasImage": true, 
    "image": "http://leagueofcomicgeeks.com//comics/covers/large/3785441-all-new-x-men-33.jpg?1414155272", 
    "price": " $3.99", 
    "publisher": "Marvel Comics", 
    "releaseDate": " Oct 29th, 2014 ", 
    "thumbnail": "http://leagueofcomicgeeks.com//comics/covers/medium/3785441-all-new-x-men-33.jpg?1414155272", 
    "title": "All-New X-Men #33"
},{
    "hasImage": true, 
    "image": "http://leagueofcomicgeeks.com//comics/covers/large/4348020-black-science-10.jpg?1413850423", 
    "price": " $3.50", 
    "publisher": "Image Comics", 
    "releaseDate": " Oct 29th, 2014 ", 
    "thumbnail": "http://leagueofcomicgeeks.com//comics/covers/medium/4348020-black-science-10.jpg?1413850423", 
    "title": "Black Science #10"
},{
    "hasImage": true, 
    "image": "http://leagueofcomicgeeks.com//comics/covers/large/6782748-low-4.jpg?1413850423", 
    "price": " $3.50", 
    "publisher": "Image Comics", 
    "releaseDate": " Oct 29th, 2014 ", 
    "thumbnail": "http://leagueofcomicgeeks.com//comics/covers/medium/6782748-low-4.jpg?1413850423", 
    "title": "Low #4"
},{
    "hasImage": true, 
    "image": "http://leagueofcomicgeeks.com//comics/covers/large/7497464-wonder-woman-35.jpg?1413850423", 
    "price": " $2.99", 
    "publisher": "DC Comics", 
    "releaseDate": " Oct 29th, 2014 ", 
    "thumbnail": "http://leagueofcomicgeeks.com//comics/covers/medium/7497464-wonder-woman-35.jpg?1413850423", 
    "title": "Wonder Woman #35"
},{
    "hasImage": true, 
    "image": "http://leagueofcomicgeeks.com//comics/covers/large/7626695-southern-bastards-5.jpg?1413850423", 
    "price": " $3.50", 
    "publisher": "Image Comics", 
    "releaseDate": " Oct 29th, 2014 ", 
    "thumbnail": "http://leagueofcomicgeeks.com//comics/covers/medium/7626695-southern-bastards-5.jpg?1413850423", 
    "title": "Southern Bastards #5"
},{
    "hasImage": true, 
    "image": "http://leagueofcomicgeeks.com//comics/covers/large/2272053-the-new-52-futures-end-26.jpg?1414169422", 
    "price": " $2.99", 
    "publisher": "DC Comics", 
    "releaseDate": " Oct 29th, 2014 ", 
    "thumbnail": "http://leagueofcomicgeeks.com//comics/covers/medium/2272053-the-new-52-futures-end-26.jpg?1414169422", 
    "title": "The New 52: Futures End #26"
},{
    "hasImage": true, 
    "image": "http://leagueofcomicgeeks.com//comics/covers/large/3308627-harley-quinn-annual-1.jpg?1413850423", 
    "price": " $5.99", 
    "publisher": "DC Comics", 
    "releaseDate": " Oct 29th, 2014 ", 
    "thumbnail": "http://leagueofcomicgeeks.com//comics/covers/medium/3308627-harley-quinn-annual-1.jpg?1413850423", 
    "title": "Harley Quinn Annual #1"
},{
    "hasImage": true, 
    "image": "http://leagueofcomicgeeks.com//comics/covers/large/6250036-swamp-thing-annual-3.jpg?1405237799", 
    "price": " $4.99", 
    "publisher": "DC Comics", 
    "releaseDate": " Oct 29th, 2014 ", 
    "thumbnail": "http://leagueofcomicgeeks.com//comics/covers/medium/6250036-swamp-thing-annual-3.jpg?1405237799", 
    "title": "Swamp Thing Annual #3"
},{
    "hasImage": true, 
    "image": "http://leagueofcomicgeeks.com//comics/covers/large/4041228-inhuman-7.jpg?1414244801", 
    "price": " $3.99", 
    "publisher": "Marvel Comics", 
    "releaseDate": " Oct 29th, 2014 ", 
    "thumbnail": "http://leagueofcomicgeeks.com//comics/covers/medium/4041228-inhuman-7.jpg?1414244801", 
    "title": "Inhuman #7"
},{
    "hasImage": true, 
    "image": "http://leagueofcomicgeeks.com//comics/covers/large/2003045-wolverine-and-the-x-men-11.jpg?1414246364", 
    "price": " $3.99", 
    "publisher": "Marvel Comics", 
    "releaseDate": " Oct 29th, 2014 ", 
    "thumbnail": "http://leagueofcomicgeeks.com//comics/covers/medium/2003045-wolverine-and-the-x-men-11.jpg?1414246364", 
    "title": "Wolverine and the X-Men #11"
},{
    "hasImage": true, 
    "image": "http://leagueofcomicgeeks.com//comics/covers/large/3817743-justice-league-united-annual-1.jpg?1414190316", 
    "price": " $4.99", 
    "publisher": "DC Comics", 
    "releaseDate": " Oct 29th, 2014 ", 
    "thumbnail": "http://leagueofcomicgeeks.com//comics/covers/medium/3817743-justice-league-united-annual-1.jpg?1414190316", 
    "title": "Justice League United Annual #1"
},{
    "hasImage": true, 
    "image": "http://leagueofcomicgeeks.com//comics/covers/large/3518420-nova-22.jpg?1414245788", 
    "price": " $3.99", 
    "publisher": "Marvel Comics", 
    "releaseDate": " Oct 29th, 2014 ", 
    "thumbnail": "http://leagueofcomicgeeks.com//comics/covers/medium/3518420-nova-22.jpg?1414245788", 
    "title": "Nova #22"
},{
    "hasImage": true, 
    "image": "http://leagueofcomicgeeks.com//comics/covers/large/3435290-fantastic-four-12.jpg?1414244598", 
    "price": " $3.99", 
    "publisher": "Marvel Comics", 
    "releaseDate": " Oct 29th, 2014 ", 
    "thumbnail": "http://leagueofcomicgeeks.com//comics/covers/medium/3435290-fantastic-four-12.jpg?1414244598", 
    "title": "Fantastic Four #12"
},{
    "hasImage": true, 
    "image": "http://leagueofcomicgeeks.com//comics/covers/large/9635151-death-of-wolverine-the-logan-legacy-3.jpg?1414184670", 
    "price": " $3.99", 
    "publisher": "Marvel Comics", 
    "releaseDate": " Oct 29th, 2014 ", 
    "thumbnail": "http://leagueofcomicgeeks.com//comics/covers/medium/9635151-death-of-wolverine-the-logan-legacy-3.jpg?1414184670", 
    "title": "Death of Wolverine: The Logan Legacy #3"
},{
    "hasImage": true, 
    "image": "http://leagueofcomicgeeks.com//comics/covers/large/7626031-sinestro-6.jpg?1414384389", 
    "price": " $2.99", 
    "publisher": "DC Comics", 
    "releaseDate": " Oct 29th, 2014 ", 
    "thumbnail": "http://leagueofcomicgeeks.com//comics/covers/medium/7626031-sinestro-6.jpg?1414384389", 
    "title": "Sinestro #6"
},{
    "hasImage": true, 
    "image": "http://leagueofcomicgeeks.com//comics/covers/large/9598777-spread-4.jpg?1412941315", 
    "price": " $3.50", 
    "publisher": "Image Comics", 
    "releaseDate": " Oct 29th, 2014 ", 
    "thumbnail": "http://leagueofcomicgeeks.com//comics/covers/medium/9598777-spread-4.jpg?1412941315", 
    "title": "Spread #4"
},{
    "hasImage": true, 
    "image": "http://leagueofcomicgeeks.com//comics/covers/large/1983787-earth-2-worlds-end-4.jpg?1413850423", 
    "price": " $2.99", 
    "publisher": "DC Comics", 
    "releaseDate": " Oct 29th, 2014 ", 
    "thumbnail": "http://leagueofcomicgeeks.com//comics/covers/medium/1983787-earth-2-worlds-end-4.jpg?1413850423", 
    "title": "Earth 2: World's End #4"
},{
    "hasImage": true, 
    "image": "http://leagueofcomicgeeks.com//comics/covers/large/4520896-axis-carnage-1.jpg?1414184066", 
    "price": " $3.99", 
    "publisher": "Marvel Comics", 
    "releaseDate": " Oct 29th, 2014 ", 
    "thumbnail": "http://leagueofcomicgeeks.com//comics/covers/medium/4520896-axis-carnage-1.jpg?1414184066", 
    "title": "Axis: Carnage #1"
},{
    "hasImage": true, 
    "image": "http://leagueofcomicgeeks.com//comics/covers/large/3159360-roche-limit-2.jpg?1407296681", 
    "price": " $3.50", 
    "publisher": "Image Comics", 
    "releaseDate": " Oct 29th, 2014 ", 
    "thumbnail": "http://leagueofcomicgeeks.com//comics/covers/medium/3159360-roche-limit-2.jpg?1407296681", 
    "title": "Roche Limit #2"
},{
    "hasImage": true, 
    "image": "http://leagueofcomicgeeks.com//comics/covers/large/5801591-wayward-3.jpg?1413850423", 
    "price": " $3.50", 
    "publisher": "Image Comics", 
    "releaseDate": " Oct 29th, 2014 ", 
    "thumbnail": "http://leagueofcomicgeeks.com//comics/covers/medium/5801591-wayward-3.jpg?1413850423", 
    "title": "Wayward #3"
},{
    "hasImage": true, 
    "image": "http://leagueofcomicgeeks.com//comics/covers/large/7375336-justice-league-dark-annual-2.jpg?1413850423", 
    "price": " $4.99", 
    "publisher": "DC Comics", 
    "releaseDate": " Oct 29th, 2014 ", 
    "thumbnail": "http://leagueofcomicgeeks.com//comics/covers/medium/7375336-justice-league-dark-annual-2.jpg?1413850423", 
    "title": "Justice League Dark Annual #2"
},{
    "hasImage": true, 
    "image": "http://leagueofcomicgeeks.com//comics/covers/large/7999869-death-of-wolverine-deadpool-captain-america-1.jpg?1414185088", 
    "price": " $4.99", 
    "publisher": "Marvel Comics", 
    "releaseDate": " Oct 29th, 2014 ", 
    "thumbnail": "http://leagueofcomicgeeks.com//comics/covers/medium/7999869-death-of-wolverine-deadpool-captain-america-1.jpg?1414185088", 
    "title": "Death of Wolverine: Deadpool & Captain America #1"
},{
    "hasImage": true, 
    "image": "http://leagueofcomicgeeks.com//comics/covers/large/9318381-elektra-7.jpg?1414185324", 
    "price": " $3.99", 
    "publisher": "Marvel Comics", 
    "releaseDate": " Oct 29th, 2014 ", 
    "thumbnail": "http://leagueofcomicgeeks.com//comics/covers/medium/9318381-elektra-7.jpg?1414185324", 
    "title": "Elektra #7"
},{
    "hasImage": true, 
    "image": "http://leagueofcomicgeeks.com//comics/covers/large/4549512-axis-revolutions-1.jpg?1414184488", 
    "price": " $3.99", 
    "publisher": "Marvel Comics", 
    "releaseDate": " Oct 29th, 2014 ", 
    "thumbnail": "http://leagueofcomicgeeks.com//comics/covers/medium/4549512-axis-revolutions-1.jpg?1414184488", 
    "title": "Axis: Revolutions #1"
},{
    "hasImage": true, 
    "image": "http://leagueofcomicgeeks.com//comics/covers/large/2693675-thunderbolts-32.jpg?1414246073", 
    "price": " $2.99", 
    "publisher": "Marvel Comics", 
    "releaseDate": " Oct 29th, 2014 ", 
    "thumbnail": "http://leagueofcomicgeeks.com//comics/covers/medium/2693675-thunderbolts-32.jpg?1414246073", 
    "title": "Thunderbolts #32"
},{
    "hasImage": true, 
    "image": "http://leagueofcomicgeeks.com//comics/covers/large/9648299-rasputin-1.jpg?1413850423", 
    "price": " $3.50", 
    "publisher": "Image Comics", 
    "releaseDate": " Oct 29th, 2014 ", 
    "thumbnail": "http://leagueofcomicgeeks.com//comics/covers/medium/9648299-rasputin-1.jpg?1413850423", 
    "title": "Rasputin #1"
},{
    "hasImage": true, 
    "image": "http://leagueofcomicgeeks.com//comics/covers/large/2933755-sex-17.jpg?1413850423", 
    "price": " $2.99", 
    "publisher": "Image Comics", 
    "releaseDate": " Oct 29th, 2014 ", 
    "thumbnail": "http://leagueofcomicgeeks.com//comics/covers/medium/2933755-sex-17.jpg?1413850423", 
    "title": "Sex #17"
},{
    "hasImage": true, 
    "image": "http://leagueofcomicgeeks.com//comics/covers/large/4991271-thanos-a-god-up-there-listening-4.jpg?1414246257", 
    "price": " $3.99", 
    "publisher": "Marvel Comics", 
    "releaseDate": " Oct 29th, 2014 ", 
    "thumbnail": "http://leagueofcomicgeeks.com//comics/covers/medium/4991271-thanos-a-god-up-there-listening-4.jpg?1414246257", 
    "title": "Thanos: A God Up There Listening #4"
},{
    "hasImage": true, 
    "image": "http://leagueofcomicgeeks.com//comics/covers/large/8315511-the-bunker-7.jpg?1413291400", 
    "price": " $3.99", 
    "publisher": "Oni", 
    "releaseDate": " Oct 29th, 2014 ", 
    "thumbnail": "http://leagueofcomicgeeks.com//comics/covers/medium/8315511-the-bunker-7.jpg?1413291400", 
    "title": "The Bunker #7"
},{
    "hasImage": true, 
    "image": "http://leagueofcomicgeeks.com//comics/covers/large/4959316-mind-mgmt-27.jpg?1414385533", 
    "price": " $3.99", 
    "publisher": "Dark Horse Comics", 
    "releaseDate": " Oct 29th, 2014 ", 
    "thumbnail": "http://leagueofcomicgeeks.com//comics/covers/medium/4959316-mind-mgmt-27.jpg?1414385533", 
    "title": "Mind MGMT #27"
},{
    "hasImage": true, 
    "image": "http://leagueofcomicgeeks.com//comics/covers/large/1535742-the-massive-28.jpg?1414385657", 
    "price": " $3.50", 
    "publisher": "Dark Horse Comics", 
    "releaseDate": " Oct 29th, 2014 ", 
    "thumbnail": "http://leagueofcomicgeeks.com//comics/covers/medium/1535742-the-massive-28.jpg?1414385657", 
    "title": "The Massive #28"
},{
    "hasImage": true, 
    "image": "http://leagueofcomicgeeks.com//comics/covers/large/6796380-deathlok-1.jpg?1413850423", 
    "price": " $3.99", 
    "publisher": "Marvel Comics", 
    "releaseDate": " Oct 29th, 2014 ", 
    "thumbnail": "http://leagueofcomicgeeks.com//comics/covers/medium/6796380-deathlok-1.jpg?1413850423", 
    "title": "Deathlok #1"
},{
    "hasImage": true, 
    "image": "http://leagueofcomicgeeks.com//comics/covers/large/7129136-marvel-75th-anniversary-celebration-1.jpg?1414245315", 
    "price": " $5.99", 
    "publisher": "Marvel Comics", 
    "releaseDate": " Oct 29th, 2014 ", 
    "thumbnail": "http://leagueofcomicgeeks.com//comics/covers/medium/7129136-marvel-75th-anniversary-celebration-1.jpg?1414245315", 
    "title": "Marvel 75th Anniversary Celebration #1"
},{
    "hasImage": true, 
    "image": "http://leagueofcomicgeeks.com//comics/covers/large/2543079-adventure-time-33.jpg?1413200447", 
    "price": " $3.99", 
    "publisher": "BOOM! Studios", 
    "releaseDate": " Oct 29th, 2014 ", 
    "thumbnail": "http://leagueofcomicgeeks.com//comics/covers/medium/2543079-adventure-time-33.jpg?1413200447", 
    "title": "Adventure Time #33"
},{
    "hasImage": true, 
    "image": "http://leagueofcomicgeeks.com//comics/covers/large/6257734-doctor-who-the-tenth-doctor-4.jpg?1412700171", 
    "price": " $3.99", 
    "publisher": "Titan Books", 
    "releaseDate": " Oct 29th, 2014 ", 
    "thumbnail": "http://leagueofcomicgeeks.com//comics/covers/medium/6257734-doctor-who-the-tenth-doctor-4.jpg?1412700171", 
    "title": "Doctor Who: The Tenth Doctor #4"
},{
    "hasImage": true, 
    "image": "http://leagueofcomicgeeks.com//comics/covers/large/9818473-umbral-10.jpg?1413850423", 
    "price": " $3.50", 
    "publisher": "Image Comics", 
    "releaseDate": " Oct 29th, 2014 ", 
    "thumbnail": "http://leagueofcomicgeeks.com//comics/covers/medium/9818473-umbral-10.jpg?1413850423", 
    "title": "Umbral #10"
},{
    "hasImage": true, 
    "image": "http://leagueofcomicgeeks.com//comics/covers/large/2640176-sensation-comics-featuring-wonder-woman-3.jpg?1413850423", 
    "price": " $3.99", 
    "publisher": "DC Comics", 
    "releaseDate": " Oct 29th, 2014 ", 
    "thumbnail": "http://leagueofcomicgeeks.com//comics/covers/medium/2640176-sensation-comics-featuring-wonder-woman-3.jpg?1413850423", 
    "title": "Sensation Comics Featuring Wonder Woman #3"
},{
    "hasImage": true, 
    "image": "http://leagueofcomicgeeks.com//comics/covers/large/3892717-bobs-burgers-3.jpg?1409629756", 
    "price": " $3.99", 
    "publisher": "Dynamite", 
    "releaseDate": " Oct 29th, 2014 ", 
    "thumbnail": "http://leagueofcomicgeeks.com//comics/covers/medium/3892717-bobs-burgers-3.jpg?1409629756", 
    "title": "Bob's Burgers #3"
},{
    "hasImage": true, 
    "image": "http://leagueofcomicgeeks.com//comics/covers/large/9780219-archer-armstrong-25.jpg?1405903216", 
    "price": " $4.99", 
    "publisher": "Valiant", 
    "releaseDate": " Oct 29th, 2014 ", 
    "thumbnail": "http://leagueofcomicgeeks.com//comics/covers/medium/9780219-archer-armstrong-25.jpg?1405903216", 
    "title": "Archer & Armstrong #25"
},{
    "hasImage": true, 
    "image": "http://leagueofcomicgeeks.com//comics/covers/large/1605784-doctor-who-the-eleventh-doctor-4.jpg?1414125222", 
    "price": " $3.99", 
    "publisher": "Titan Books", 
    "releaseDate": " Oct 29th, 2014 ", 
    "thumbnail": "http://leagueofcomicgeeks.com//comics/covers/medium/1605784-doctor-who-the-eleventh-doctor-4.jpg?1414125222", 
    "title": "Doctor Who: The Eleventh Doctor #4"
},{
    "hasImage": true, 
    "image": "http://leagueofcomicgeeks.com//comics/covers/large/7813058-aliens-fire-and-stone-2.jpg?1414384780", 
    "price": " $3.50", 
    "publisher": "Dark Horse Comics", 
    "releaseDate": " Oct 29th, 2014 ", 
    "thumbnail": "http://leagueofcomicgeeks.com//comics/covers/medium/7813058-aliens-fire-and-stone-2.jpg?1414384780", 
    "title": "Aliens: Fire and Stone #2"
},{
    "hasImage": true, 
    "image": "http://leagueofcomicgeeks.com//comics/covers/large/6299940-rachel-rising-29.jpg?1409573739", 
    "price": " $3.99", 
    "publisher": "Abstract Studio", 
    "releaseDate": " Oct 29th, 2014 ", 
    "thumbnail": "http://leagueofcomicgeeks.com//comics/covers/medium/6299940-rachel-rising-29.jpg?1409573739", 
    "title": "Rachel Rising #29"
},{
    "hasImage": true, 
    "image": "http://leagueofcomicgeeks.com//comics/covers/large/2436665-deep-gravity-4.jpg?1414385415", 
    "price": " $3.99", 
    "publisher": "Dark Horse Comics", 
    "releaseDate": " Oct 29th, 2014 ", 
    "thumbnail": "http://leagueofcomicgeeks.com//comics/covers/medium/2436665-deep-gravity-4.jpg?1414385415", 
    "title": "Deep Gravity #4"
},{
    "hasImage": true, 
    "image": "http://leagueofcomicgeeks.com//comics/covers/large/2552479-little-nemo-return-to-slumberland-2.jpg?1413850423", 
    "price": " $3.99", 
    "publisher": "IDW Publishing", 
    "releaseDate": " Oct 29th, 2014 ", 
    "thumbnail": "http://leagueofcomicgeeks.com//comics/covers/medium/2552479-little-nemo-return-to-slumberland-2.jpg?1413850423", 
    "title": "Little Nemo: Return to Slumberland #2"
},{
    "hasImage": true, 
    "image": "http://leagueofcomicgeeks.com//comics/covers/large/1322812-the-goon-occasion-of-revenge-3.jpg?1414385597", 
    "price": " $3.50", 
    "publisher": "Dark Horse Comics", 
    "releaseDate": " Oct 29th, 2014 ", 
    "thumbnail": "http://leagueofcomicgeeks.com//comics/covers/medium/1322812-the-goon-occasion-of-revenge-3.jpg?1414385597", 
    "title": "The Goon: Occasion of Revenge #3"
},{
    "hasImage": false, 
    "image": "http://leagueofcomicgeeks.com//assets/images/no-cover-med.jpg", 
    "price": " $3.99", 
    "publisher": "Image Comics", 
    "releaseDate": " Oct 29th, 2014 ", 
    "thumbnail": "http://leagueofcomicgeeks.com//assets/images/no-cover-med.jpg", 
    "title": "Cutter #4"
},{
    "hasImage": true, 
    "image": "http://leagueofcomicgeeks.com//comics/covers/large/3645669-harbinger-omegas-3.jpg?1405902655", 
    "price": " $3.99", 
    "publisher": "Valiant", 
    "releaseDate": " Oct 29th, 2014 ", 
    "thumbnail": "http://leagueofcomicgeeks.com//comics/covers/medium/3645669-harbinger-omegas-3.jpg?1405902655", 
    "title": "Harbinger: Omegas #3"
},{
    "hasImage": true, 
    "image": "http://leagueofcomicgeeks.com//comics/covers/large/8306360-hellbreak-1.jpg?1410146735", 
    "price": " $1.00", 
    "publisher": "Oni", 
    "releaseDate": " Oct 29th, 2014 ", 
    "thumbnail": "http://leagueofcomicgeeks.com//comics/covers/medium/8306360-hellbreak-1.jpg?1410146735", 
    "title": "Hellbreak #1"
},{
    "hasImage": true, 
    "image": "http://leagueofcomicgeeks.com//comics/covers/large/4333396-atomic-robo-the-knights-of-the-golden-circle-5.jpg?1414218014", 
    "price": " $3.50", 
    "publisher": "Red 5", 
    "releaseDate": " Oct 29th, 2014 ", 
    "thumbnail": "http://leagueofcomicgeeks.com//comics/covers/medium/4333396-atomic-robo-the-knights-of-the-golden-circle-5.jpg?1414218014", 
    "title": "Atomic Robo: The Knights of the Golden Circle #5"
},{
    "hasImage": true, 
    "image": "http://leagueofcomicgeeks.com//comics/covers/large/1287161-crossed-badlands-64.jpg?1408371319", 
    "price": " $3.99", 
    "publisher": "Avatar Press", 
    "releaseDate": " Oct 29th, 2014 ", 
    "thumbnail": "http://leagueofcomicgeeks.com//comics/covers/medium/1287161-crossed-badlands-64.jpg?1408371319", 
    "title": "Crossed: Badlands #64"
},{
    "hasImage": true, 
    "image": "http://leagueofcomicgeeks.com//comics/covers/large/1480012-vertigo-quarterly-cmyk-12-yellow.jpg?1413850423", 
    "price": " $7.99", 
    "publisher": "Vertigo Comics", 
    "releaseDate": " Oct 29th, 2014 ", 
    "thumbnail": "http://leagueofcomicgeeks.com//comics/covers/medium/1480012-vertigo-quarterly-cmyk-12-yellow.jpg?1413850423", 
    "title": "Vertigo Quarterly: CMYK #1.2 Yellow"
},{
    "hasImage": true, 
    "image": "http://leagueofcomicgeeks.com//comics/covers/large/7625704-captain-victory-and-the-galactic-rangers-3.jpg?1413851707", 
    "price": " $3.99", 
    "publisher": "Dynamite", 
    "releaseDate": " Oct 29th, 2014 ", 
    "thumbnail": "http://leagueofcomicgeeks.com//comics/covers/medium/7625704-captain-victory-and-the-galactic-rangers-3.jpg?1413851707", 
    "title": "Captain Victory and the Galactic Rangers #3"
},{
    "hasImage": true, 
    "image": "http://leagueofcomicgeeks.com//comics/covers/large/7609385-conan-the-avenger-7.jpg?1414385375", 
    "price": " $3.50", 
    "publisher": "Dark Horse Comics", 
    "releaseDate": " Oct 29th, 2014 ", 
    "thumbnail": "http://leagueofcomicgeeks.com//comics/covers/medium/7609385-conan-the-avenger-7.jpg?1414385375", 
    "title": "Conan the Avenger #7"
},{
    "hasImage": true, 
    "image": "http://leagueofcomicgeeks.com//comics/covers/large/3142934-savage-dragon-199.jpg?1413850423", 
    "price": " $3.99", 
    "publisher": "Image Comics", 
    "releaseDate": " Oct 29th, 2014 ", 
    "thumbnail": "http://leagueofcomicgeeks.com//comics/covers/medium/3142934-savage-dragon-199.jpg?1413850423", 
    "title": "Savage Dragon #199"
},{
    "hasImage": true, 
    "image": "http://leagueofcomicgeeks.com//comics/covers/large/7989286-baltimore-the-wolf-and-the-apostle-1.jpg?1414385271", 
    "price": " $3.50", 
    "publisher": "Dark Horse Comics", 
    "releaseDate": " Oct 29th, 2014 ", 
    "thumbnail": "http://leagueofcomicgeeks.com//comics/covers/medium/7989286-baltimore-the-wolf-and-the-apostle-1.jpg?1414385271", 
    "title": "Baltimore: The Wolf and the Apostle #1"
},{
    "hasImage": true, 
    "image": "http://leagueofcomicgeeks.com//comics/covers/large/6932336-sundowners-3.jpg?1414385497", 
    "price": " $3.50", 
    "publisher": "Dark Horse Comics", 
    "releaseDate": " Oct 29th, 2014 ", 
    "thumbnail": "http://leagueofcomicgeeks.com//comics/covers/medium/6932336-sundowners-3.jpg?1414385497", 
    "title": "Sundowners #3"
},{
    "hasImage": true, 
    "image": "http://leagueofcomicgeeks.com//comics/covers/large/1720087-captain-midnight-16.jpg?1414385299", 
    "price": " $2.99", 
    "publisher": "Dark Horse Comics", 
    "releaseDate": " Oct 29th, 2014 ", 
    "thumbnail": "http://leagueofcomicgeeks.com//comics/covers/medium/1720087-captain-midnight-16.jpg?1414385299", 
    "title": "Captain Midnight #16"
},{
    "hasImage": true, 
    "image": "http://leagueofcomicgeeks.com//comics/covers/large/2991779-grimm-fairy-tales-presents-warlord-of-oz-6.jpg?1409575708", 
    "price": " $2.99", 
    "publisher": "Zenescope", 
    "releaseDate": " Oct 29th, 2014 ", 
    "thumbnail": "http://leagueofcomicgeeks.com//comics/covers/medium/2991779-grimm-fairy-tales-presents-warlord-of-oz-6.jpg?1409575708", 
    "title": "Grimm Fairy Tales Presents Warlord of Oz #6"
},{
    "hasImage": true, 
    "image": "http://leagueofcomicgeeks.com//comics/covers/large/5219580-wool-5.jpg?1409701079", 
    "price": " $3.99", 
    "publisher": "Cryptozoic Entertainment", 
    "releaseDate": " Oct 29th, 2014 ", 
    "thumbnail": "http://leagueofcomicgeeks.com//comics/covers/medium/5219580-wool-5.jpg?1409701079", 
    "title": "Wool #5"
},{
    "hasImage": true, 
    "image": "http://leagueofcomicgeeks.com//comics/covers/large/2762157-groo-vs-conan-4.jpg?1414385437", 
    "price": " $3.50", 
    "publisher": "Dark Horse Comics", 
    "releaseDate": " Oct 29th, 2014 ", 
    "thumbnail": "http://leagueofcomicgeeks.com//comics/covers/medium/2762157-groo-vs-conan-4.jpg?1414385437", 
    "title": "Groo vs. Conan #4"
},{
    "hasImage": true, 
    "image": "http://leagueofcomicgeeks.com//comics/covers/large/4115198-and-then-emily-was-gone-4.jpg?1409705735", 
    "price": " $3.50", 
    "publisher": "ComixTribe", 
    "releaseDate": " Oct 29th, 2014 ", 
    "thumbnail": "http://leagueofcomicgeeks.com//comics/covers/medium/4115198-and-then-emily-was-gone-4.jpg?1409705735", 
    "title": "And Then Emily Was Gone #4"
},{
    "hasImage": true, 
    "image": "http://leagueofcomicgeeks.com//comics/covers/large/1719968-pathfinder-city-of-secrets-6.jpg?1410199979", 
    "price": " $4.99", 
    "publisher": "Dynamite", 
    "releaseDate": " Oct 29th, 2014 ", 
    "thumbnail": "http://leagueofcomicgeeks.com//comics/covers/medium/1719968-pathfinder-city-of-secrets-6.jpg?1410199979", 
    "title": "Pathfinder: City of Secrets #6"
},{
    "hasImage": true, 
    "image": "http://leagueofcomicgeeks.com//comics/covers/large/2369353-sherlock-holmes-steam-detective-1.jpg?1408972517", 
    "price": " $3.99", 
    "publisher": "Antarctic Press", 
    "releaseDate": " Oct 29th, 2014 ", 
    "thumbnail": "http://leagueofcomicgeeks.com//comics/covers/medium/2369353-sherlock-holmes-steam-detective-1.jpg?1408972517", 
    "title": "Sherlock Holmes Steam Detective #1"
},{
    "hasImage": true, 
    "image": "http://leagueofcomicgeeks.com//comics/covers/large/1115622-simpsons-comics-explosion-1.jpg?1407770108", 
    "price": " $9.99", 
    "publisher": "Bongo Comics", 
    "releaseDate": " Oct 29th, 2014 ", 
    "thumbnail": "http://leagueofcomicgeeks.com//comics/covers/medium/1115622-simpsons-comics-explosion-1.jpg?1407770108", 
    "title": "Simpsons Comics Explosion #1"
},{
    "hasImage": true, 
    "image": "http://leagueofcomicgeeks.com//comics/covers/large/7086589-archie-661.jpg?1408972539", 
    "price": " $3.99", 
    "publisher": "Archie Comics", 
    "releaseDate": " Oct 29th, 2014 ", 
    "thumbnail": "http://leagueofcomicgeeks.com//comics/covers/medium/7086589-archie-661.jpg?1408972539", 
    "title": "Archie #661"
},{
    "hasImage": true, 
    "image": "http://leagueofcomicgeeks.com//comics/covers/large/8276959-purgatori-2.jpg?1410913282", 
    "price": " $3.99", 
    "publisher": "Dynamite", 
    "releaseDate": " Oct 29th, 2014 ", 
    "thumbnail": "http://leagueofcomicgeeks.com//comics/covers/medium/8276959-purgatori-2.jpg?1410913282", 
    "title": "Purgatori #2"
},{
    "hasImage": true, 
    "image": "http://leagueofcomicgeeks.com//comics/covers/large/4315818-robyn-hood-3.jpg?1409575731", 
    "price": " $3.99", 
    "publisher": "Zenescope", 
    "releaseDate": " Oct 29th, 2014 ", 
    "thumbnail": "http://leagueofcomicgeeks.com//comics/covers/medium/4315818-robyn-hood-3.jpg?1409575731", 
    "title": "Robyn Hood #3"
},{
    "hasImage": true, 
    "image": "http://leagueofcomicgeeks.com//comics/covers/large/1587549-grimm-fairy-tales-realm-war-4.jpg?1409575688", 
    "price": " $3.99", 
    "publisher": "Zenescope", 
    "releaseDate": " Oct 29th, 2014 ", 
    "thumbnail": "http://leagueofcomicgeeks.com//comics/covers/medium/1587549-grimm-fairy-tales-realm-war-4.jpg?1409575688", 
    "title": "Grimm Fairy Tales: Realm War #4"
},{
    "hasImage": true, 
    "image": "http://leagueofcomicgeeks.com//comics/covers/large/4632973-cartoon-network-super-secret-crisis-war-5.jpg?1413850423", 
    "price": " $3.99", 
    "publisher": "IDW Publishing", 
    "releaseDate": " Oct 29th, 2014 ", 
    "thumbnail": "http://leagueofcomicgeeks.com//comics/covers/medium/4632973-cartoon-network-super-secret-crisis-war-5.jpg?1413850423", 
    "title": "Cartoon Network: Super Secret Crisis War! #5"
},{
    "hasImage": true, 
    "image": "http://leagueofcomicgeeks.com//comics/covers/large/6576869-enormous-5.jpg?1407363204", 
    "price": " $3.99", 
    "publisher": "215 Ink", 
    "releaseDate": " Oct 29th, 2014 ", 
    "thumbnail": "http://leagueofcomicgeeks.com//comics/covers/medium/6576869-enormous-5.jpg?1407363204", 
    "title": "Enormous #5"
},{
    "hasImage": true, 
    "image": "http://leagueofcomicgeeks.com//comics/covers/large/4824230-marvel-universe-ultimate-spider-man-31.jpg?1414245192", 
    "price": " $2.99", 
    "publisher": "Marvel Comics", 
    "releaseDate": " Oct 29th, 2014 ", 
    "thumbnail": "http://leagueofcomicgeeks.com//comics/covers/medium/4824230-marvel-universe-ultimate-spider-man-31.jpg?1414245192", 
    "title": "Marvel Universe Ultimate Spider-Man #31"
},{
    "hasImage": true, 
    "image": "http://leagueofcomicgeeks.com//comics/covers/large/4927247-sally-of-the-wasteland-4.jpg?1405538119", 
    "price": " $3.99", 
    "publisher": "Titan Books", 
    "releaseDate": " Oct 29th, 2014 ", 
    "thumbnail": "http://leagueofcomicgeeks.com//comics/covers/medium/4927247-sally-of-the-wasteland-4.jpg?1405538119", 
    "title": "Sally of the Wasteland #4"
},{
    "hasImage": true, 
    "image": "http://leagueofcomicgeeks.com//comics/covers/large/5659810-sonic-boom-1.jpg?1408972551", 
    "price": " $3.99", 
    "publisher": "Archie Comics", 
    "releaseDate": " Oct 29th, 2014 ", 
    "thumbnail": "http://leagueofcomicgeeks.com//comics/covers/medium/5659810-sonic-boom-1.jpg?1408972551", 
    "title": "Sonic Boom #1"
},{
    "hasImage": true, 
    "image": "http://leagueofcomicgeeks.com//comics/covers/large/4383184-southern-dog-3.jpg?1412941328", 
    "price": " $3.99", 
    "publisher": "Action Lab Comics", 
    "releaseDate": " Oct 29th, 2014 ", 
    "thumbnail": "http://leagueofcomicgeeks.com//comics/covers/medium/4383184-southern-dog-3.jpg?1412941328", 
    "title": "Southern Dog #3"
},{
    "hasImage": true, 
    "image": "http://leagueofcomicgeeks.com//comics/covers/large/6411207-the-evil-within-4.jpg?1405538115", 
    "price": " $3.99", 
    "publisher": "Titan Books", 
    "releaseDate": " Oct 29th, 2014 ", 
    "thumbnail": "http://leagueofcomicgeeks.com//comics/covers/medium/6411207-the-evil-within-4.jpg?1405538115", 
    "title": "The Evil Within #4"
},{
    "hasImage": true, 
    "image": "http://leagueofcomicgeeks.com//comics/covers/large/7116267-betty-veronica-comics-digest-228.jpg?1408972548", 
    "price": " $6.99", 
    "publisher": "Archie Comics", 
    "releaseDate": " Oct 29th, 2014 ", 
    "thumbnail": "http://leagueofcomicgeeks.com//comics/covers/medium/7116267-betty-veronica-comics-digest-228.jpg?1408972548", 
    "title": "Betty & Veronica Comics Digest #228"
},{
    "hasImage": true, 
    "image": "http://leagueofcomicgeeks.com//comics/covers/large/5425977-gold-digger-216.jpg?1408972512", 
    "price": " $3.99", 
    "publisher": "Antarctic Press", 
    "releaseDate": " Oct 29th, 2014 ", 
    "thumbnail": "http://leagueofcomicgeeks.com//comics/covers/medium/5425977-gold-digger-216.jpg?1408972512", 
    "title": "Gold Digger #216"
},{
    "hasImage": true, 
    "image": "http://leagueofcomicgeeks.com//comics/covers/large/1663133-lenore-11.jpg?1412466488", 
    "price": " $3.99", 
    "publisher": "Titan Books", 
    "releaseDate": " Oct 29th, 2014 ", 
    "thumbnail": "http://leagueofcomicgeeks.com//comics/covers/medium/1663133-lenore-11.jpg?1412466488", 
    "title": "Lenore #11"
},{
    "hasImage": true, 
    "image": "http://leagueofcomicgeeks.com//comics/covers/large/5739708-steam-tales-2.jpg?1408972521", 
    "price": " $3.99", 
    "publisher": "Antarctic Press", 
    "releaseDate": " Oct 29th, 2014 ", 
    "thumbnail": "http://leagueofcomicgeeks.com//comics/covers/medium/5739708-steam-tales-2.jpg?1408972521", 
    "title": "Steam Tales #2"
},{
    "hasImage": true, 
    "image": "http://leagueofcomicgeeks.com//comics/covers/large/2392694-the-shadow-midnight-in-moscow-5.jpg?1411224269", 
    "price": " $3.99", 
    "publisher": "Dynamite", 
    "releaseDate": " Oct 29th, 2014 ", 
    "thumbnail": "http://leagueofcomicgeeks.com//comics/covers/medium/2392694-the-shadow-midnight-in-moscow-5.jpg?1411224269", 
    "title": "The Shadow: Midnight in Moscow #5"
},{
    "hasImage": true, 
    "image": "http://leagueofcomicgeeks.com//comics/covers/large/3488030-doodle-jump-4.jpg?1409800506", 
    "price": " $3.99", 
    "publisher": "Dynamite", 
    "releaseDate": " Oct 29th, 2014 ", 
    "thumbnail": "http://leagueofcomicgeeks.com//comics/covers/medium/3488030-doodle-jump-4.jpg?1409800506", 
    "title": "Doodle Jump #4"
},{
    "hasImage": true, 
    "image": "http://leagueofcomicgeeks.com//comics/covers/large/5118725-goddess-of-the-glass-vol-3-a.jpg?1406826927", 
    "price": " $17.95", 
    "publisher": "Fantagraphics Books", 
    "releaseDate": " Oct 29th, 2014 ", 
    "thumbnail": "http://leagueofcomicgeeks.com//comics/covers/medium/5118725-goddess-of-the-glass-vol-3-a.jpg?1406826927", 
    "title": "Goddess of the Glass Vol. 3 (A)"
},{
    "hasImage": true, 
    "image": "http://leagueofcomicgeeks.com//comics/covers/large/3097377-rogues-the-burning-heart-2.jpg?1408972505", 
    "price": " $3.99", 
    "publisher": "Amigo Comics", 
    "releaseDate": " Oct 29th, 2014 ", 
    "thumbnail": "http://leagueofcomicgeeks.com//comics/covers/medium/3097377-rogues-the-burning-heart-2.jpg?1408972505", 
    "title": "Rogues the Burning Heart #2"
},{
    "hasImage": true, 
    "image": "http://leagueofcomicgeeks.com//comics/covers/large/7047715-roman-ritual-2.jpg?1408972508", 
    "price": " $3.99", 
    "publisher": "Amigo Comics", 
    "releaseDate": " Oct 29th, 2014 ", 
    "thumbnail": "http://leagueofcomicgeeks.com//comics/covers/medium/7047715-roman-ritual-2.jpg?1408972508", 
    "title": "Roman Ritual #2"
},{
    "hasImage": true, 
    "image": "http://leagueofcomicgeeks.com//comics/covers/large/4835753-steampunk-goldilocks.jpg?1408972525", 
    "price": " $3.99", 
    "publisher": "Antarctic Press", 
    "releaseDate": " Oct 29th, 2014 ", 
    "thumbnail": "http://leagueofcomicgeeks.com//comics/covers/medium/4835753-steampunk-goldilocks.jpg?1408972525", 
    "title": "Steampunk Goldilocks"
},{
    "hasImage": true, 
    "image": "http://leagueofcomicgeeks.com//comics/covers/large/4051230-victorian-secret-steam-queens-2.jpg?1408972526", 
    "price": " $3.99", 
    "publisher": "Antarctic Press", 
    "releaseDate": " Oct 29th, 2014 ", 
    "thumbnail": "http://leagueofcomicgeeks.com//comics/covers/medium/4051230-victorian-secret-steam-queens-2.jpg?1408972526", 
    "title": "Victorian Secret: Steam Queens #2"
},{
    "hasImage": true, 
    "image": "http://leagueofcomicgeeks.com//comics/covers/large/2815261-zombie-fairy-tales-snow-white.jpg?1408972531", 
    "price": " $3.99", 
    "publisher": "Antarctic Press", 
    "releaseDate": " Oct 29th, 2014 ", 
    "thumbnail": "http://leagueofcomicgeeks.com//comics/covers/medium/2815261-zombie-fairy-tales-snow-white.jpg?1408972531", 
    "title": "Zombie Fairy Tales Snow White"
},{
    "hasImage": true, 
    "image": "http://leagueofcomicgeeks.com//comics/covers/large/3186030-beast-commandos-2.jpg?1409573749", 
    "price": " $3.99", 
    "publisher": "Amigo Comics", 
    "releaseDate": " Oct 29th, 2014 ", 
    "thumbnail": "http://leagueofcomicgeeks.com//comics/covers/medium/3186030-beast-commandos-2.jpg?1409573749", 
    "title": "Beast Commandos #2"
},{
    "hasImage": true, 
    "image": "http://leagueofcomicgeeks.com//comics/covers/large/5116949-hit-pen-ink-1.jpg?1410146115", 
    "price": " $14.99", 
    "publisher": "BOOM! Studios", 
    "releaseDate": " Oct 29th, 2014 ", 
    "thumbnail": "http://leagueofcomicgeeks.com//comics/covers/medium/5116949-hit-pen-ink-1.jpg?1410146115", 
    "title": "Hit Pen & Ink #1"
},{
    "hasImage": true, 
    "image": "http://leagueofcomicgeeks.com//comics/covers/large/5580587-pirouette-2.jpg?1414041051", 
    "price": " $2.99", 
    "publisher": "Black Mask Studios", 
    "releaseDate": " Oct 29th, 2014 ", 
    "thumbnail": "http://leagueofcomicgeeks.com//comics/covers/medium/5580587-pirouette-2.jpg?1414041051", 
    "title": "Pirouette #2"
},{
    "hasImage": true, 
    "image": "http://leagueofcomicgeeks.com//comics/covers/large/7941238-planet-gigantic-1.jpg?1412941339", 
    "price": " $3.99", 
    "publisher": "Action Lab Comics", 
    "releaseDate": " Oct 29th, 2014 ", 
    "thumbnail": "http://leagueofcomicgeeks.com//comics/covers/medium/7941238-planet-gigantic-1.jpg?1412941339", 
    "title": "Planet Gigantic #1"
},{
    "hasImage": true, 
    "image": "http://leagueofcomicgeeks.com//comics/covers/large/5403345-shinobi-ninja-princess-3.jpg?1412941340", 
    "price": " $3.99", 
    "publisher": "Action Lab Comics", 
    "releaseDate": " Oct 29th, 2014 ", 
    "thumbnail": "http://leagueofcomicgeeks.com//comics/covers/medium/5403345-shinobi-ninja-princess-3.jpg?1412941340", 
    "title": "Shinobi Ninja Princess #3"
},{
    "hasImage": true, 
    "image": "http://leagueofcomicgeeks.com//comics/covers/large/2666867-thought-bubble-anthology-4.jpg?1413850423", 
    "price": " $3.99", 
    "publisher": "Image Comics", 
    "releaseDate": " Oct 29th, 2014 ", 
    "thumbnail": "http://leagueofcomicgeeks.com//comics/covers/medium/2666867-thought-bubble-anthology-4.jpg?1413850423", 
    "title": "Thought Bubble Anthology #4"
},{
    "hasImage": true, 
    "image": "http://leagueofcomicgeeks.com//comics/covers/large/3969377-tugg-the-bull-terrier-2.jpg?1408972534", 
    "price": " $3.99", 
    "publisher": "Ape Entertainment", 
    "releaseDate": " Oct 29th, 2014 ", 
    "thumbnail": "http://leagueofcomicgeeks.com//comics/covers/medium/3969377-tugg-the-bull-terrier-2.jpg?1408972534", 
    "title": "Tugg the Bull Terrier #2"
}];