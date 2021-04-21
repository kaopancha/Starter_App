new Vue({
    el:"#vue-box",
    data:{
        name: "Arthur",
        email: "ArthurFlex@hotmail.com",
        age: 25,
        status: true,
        website: 'https://www.youtube.com/',
        color:[],
        gender:'',
        job:'',
    },
    methods:{
        
        getFulldetail:function() {
            return this.name + " " + this.email
        },
        setName:function(n){
            return this.name = n
        },
        addAge:function(){
            this.age++
            console.log(this.age)
        },
        subtractAge:function(){
            this.age--
            console.log(this.age)
        },
    }
})