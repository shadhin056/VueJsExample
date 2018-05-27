// Put this in the script section in JSFiddle
// In a local setup, you need to merge this and the index.html file into one file
new Vue({
    el: '#app',
    data: {
        counter:0,
        secondCounter:0
    },
    computed:{
        outputC:function () {
            console.log('Computed');
            return this.counter >5 ? "Greater 5" : "Smaller than 5";
        },
    },
    methods:{
        result:function(){
            console.log('Method');
            return this.counter >5 ? "Greater 5" : "Smaller than 5";
        }
    }
});