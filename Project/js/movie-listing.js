import MovieData from './movieData.mjs';
import movieListing from './movieList.mjs';
import { qs, getParams } from './utils.mjs';

const genre = getParams('genre');

var movies = new MovieData(genre);
console.log(movies);
var listElement = qs('.product-list');
var titleElement = qs('.title');
var title = genre.toString();
title = title[0].toUpperCase() + title.slice(1);
titleElement.textContent = title;

var examples = new movieListing(genre, movies, listElement);
examples.init();
