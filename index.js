require('./main.css');
require('jquery-ui/themes/base/core.css');
require('jquery-ui/themes/base/menu.css');
require('jquery-ui/themes/base/autocomplete.css');
require('jquery-ui/themes/base/calendar.css');
require('jquery-ui/themes/base/datepicker.css');
require('jquery-ui/themes/base/theme.css');
var $ = require('jquery');
var Autocomplete = require('jquery-ui/ui/widgets/autocomplete');
var Datepicker = require('jquery-ui/ui/widgets/datepicker');

$('<h1>Welcome to the programming languages quiz</h1>').appendTo('body');
new Autocomplete({
  source: ['javascript', 'css', 'c', 'objectivec']
}).element.appendTo('body').focus();

$('<h2>When do you want to start the quiz?</h2>').appendTo('body');
new Datepicker({}).element.appendTo('body');
