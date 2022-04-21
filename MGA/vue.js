var vue_det = new Vue({
    el: '#intro',
    data: {

    },
    methods: {
    prepinac1:function(){
       document.getElementById("graf_1").style.display="block";
       document.getElementById("graf_2").style.display="none";
       document.getElementById("graf_3").style.display="none";
       document.getElementById("tlacitka_1").style.backgroundColor="red";
       document.getElementById("tlacitka_2").style.backgroundColor="blue";
       document.getElementById("tlacitka_3").style.backgroundColor="blue";
    },
    prepinac2:function(){
        document.getElementById("graf_2").style.display="block";
        document.getElementById("graf_1").style.display="none";
        document.getElementById("graf_3").style.display="none";
        document.getElementById("tlacitka_2").style.backgroundColor="red";
       document.getElementById("tlacitka_1").style.backgroundColor="blue";
       document.getElementById("tlacitka_3").style.backgroundColor="blue";
     },
     prepinac3:function(){
        document.getElementById("graf_3").style.display="block";
        document.getElementById("graf_2").style.display="none";
        document.getElementById("graf_1").style.display="none";
        document.getElementById("tlacitka_3").style.backgroundColor="red";
       document.getElementById("tlacitka_2").style.backgroundColor="blue";
       document.getElementById("tlacitka_1").style.backgroundColor="blue";
     },
    },
    mounted: function () {
       this.prepinac1();
    }
    
 });

/* Vue.component('testcomponent',{
    template : '<div><h1>This is coming from component</h1></div>'
 });
 var vm = new Vue({
    el: '#component_test'
 });*/