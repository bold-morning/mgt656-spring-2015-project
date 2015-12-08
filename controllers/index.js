'use strict';

var events = require('../models/events');
/**
 * Controller that renders our index (home) page.
 */
function index (request, response) {
  var currentTime = new Date ();
  var contextData = {
    'title': 'MGT 656',
    'tagline': 'You are doomed (just kidding).', 
    'events': events.all,
    'time': currentTime
  };
  response.render('index.html', contextData);
}

function donate (request, response) {
  var currentTime = new Date ();
  response.render('donate.html', contextData);
}

module.exports = {
  index: index;
  donate: donate
  
};
