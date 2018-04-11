var app = new Vue({
    el: '#app',
    methods: {
        openFbLoginDialog () {
           FB.login(function(response) {
               console.log(response);
            }, { scope: 'email' })
        }
    }
})