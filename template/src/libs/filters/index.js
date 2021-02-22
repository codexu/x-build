import Vue from 'vue';

import url from './url';
import number from './number';
import fileSize from './fileSize';
import date from './date';
import remainin from './remainin';
import float from './float';

Vue.filter('url', url);
Vue.filter('number', number);
Vue.filter('fileSize', fileSize);
Vue.filter('date', date);
Vue.filter('remainin', remainin);
Vue.filter('float', float);
