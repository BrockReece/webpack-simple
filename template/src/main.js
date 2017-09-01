{{#if_eq build "standalone"}}
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
{{/if_eq}}
import Vue from 'vue'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import CroudSemantic from 'croud-vue-semantic'
import CroudLayout from 'croud-layout'
import axios from 'croud-layout/src/axios'
import 'croud-style-guide/semantic/dist/semantic.min'
import 'croud-style-guide/semantic/dist/semantic.min.css'

import App from './App'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
{{#router}}
import router from './router'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
{{/router}}

import store from './store'

Vue.config.productionTip = false{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
Vue.use(CroudLayout, { store })
Vue.use(CroudSemantic)

/* eslint-disable no-new */
new Vue({
    el: '#app',
    {{#router}}
    router,
    {{/router}}
    {{#if_eq build "runtime"}}
    render: h => h(App){{#if_eq lintConfig "airbnb"}},{{/if_eq}}
    {{/if_eq}}
    {{#if_eq build "standalone"}}
    template: '<croud-layout><App slot="content"/></croud-layout>',
    store,
    created() {
        Vue.use(axios, { setCroudDefaults: true })
    },
    components: { App },
    {{/if_eq}}
}){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
