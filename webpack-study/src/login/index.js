/**
 * Created by lix10 on 2017/3/23.
 */

require('../public/js/library');

import Vue from 'vue';
import login from './login.vue';

new Vue({
    el: '#app',
    render: h => h(login)
});

