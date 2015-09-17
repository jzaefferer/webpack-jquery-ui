import './main.css';
import 'jquery-ui/themes/base/core.css';
import 'jquery-ui/themes/base/menu.css';
import 'jquery-ui/themes/base/autocomplete.css';
import 'jquery-ui/themes/base/theme.css';
import $ from 'jquery';
import autocomplete from 'jquery-ui/ui/widgets/autocomplete';

$('<h1>Welcome to the programming languages quiz</h1>').appendTo('body');
new autocomplete({
  source: ['javascript', 'css', 'c', 'objectivec']
}).element.appendTo('body').focus();
