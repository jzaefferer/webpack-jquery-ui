require('./main.css');
require('jquery-ui/themes/base/core.css');
require('jquery-ui/themes/base/menu.css');
require('jquery-ui/themes/base/autocomplete.css');
require('jquery-ui/themes/base/theme.css');
var $ = require('jquery');
var autocomplete = require('jquery-ui/ui/widgets/autocomplete');

$('<h1>Welcome to the programming languages quiz</h1>').appendTo('body');
new autocomplete({
  source: ['javascript', 'css', 'c', 'objectivec']
}).element.appendTo('body').focus();
