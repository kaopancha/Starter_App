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

new Vue({
    el:"#vue-app",
    data:{
        like: false,
        product: ['ผงซักฟอก', 'สบู่', 'ยาสีฟัน', 'ผ้าขนหนู', 'เสื้อ'],
        newEmp:[{name: '', salary: 0}],
        employee:[
            {name: 'Arthur',salary:22000},
            {name: 'Bremerton',salary:18000},
            {name: 'Califer',salary:26000}
        ]
    },
    methods:{

        addEmp: function(){
            this.employee.push({
                name: this.newEmp.name,
                salary: this.newEmp.salary
            })
            this.newEmp.name = ''
            this.newEmp.salary = 0
        },
        showMessage:function(){
            console.log("บันทึกข้อมูลเรียบร้อย")
        },
    },
    computed:{

        sumEmpsalary: function(){
            let result = this.employee.reduce(function(sum, emp){
                return sum + Number(emp.salary)
            }, 0)
            return result
        }
    },
    // คล้าย try catch เช่น ปิด connection
    watch:{

        sumEmpsalary: function(){
            this.showMessage();
        }
    }
})
