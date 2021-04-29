let likeSystem = new Vue({
    el: "#likeSystem",
    data:{
        like: 0
    },
    methods:{

        addLike: function(){
            return this.like++
        }
    }
})

// Custom tag (Component)
Vue.component('showview',{
    props:{
        title:{
            type: String,
            required: true
        },
        view:{
            type: Number,
            default: 0
        }
    },
    template:'<h4 class="alert-warning col-2">{{title}} : {{view}} </h4>'
})
let customtag = new Vue({
    el: "#customtag"
})

// Data & Component
Vue.component('showcomment',{
    props:['commentpost'],
    template:'<li class="list-group-item list-group-item-dark">{{commentpost.user}} : {{commentpost.com}}</li>'
})
let comment = new Vue({
    el: "#comment",
    data:{
        newComment:[{name: '', com: ''}],
        userComment:[
            {user:'Arthur', com:'ทักทาย'}
        ]
    },
    methods:{

        addComment: function(){
            this.userComment.push({
                user: this.newComment.user,
                com: this.newComment.com
            })
            // this.newComment.user = ''
            this.newComment.com = ''
        }
    }
})

// Slots
var food={
    template:'#foodarea'
}
new Vue({
    el: "#vueSlots",
    components:{
        foodapp:food
    }
})

// Vue + firebase
// manage database
var database = firebase.database()
const messageRef = database.ref("chatbox")

new Vue({
    el: "#chatbox",
    data:{
        messageText: "",
        messageGroup: [],
        name: "ChatAdmin",
        editText: null
    },
    methods:{
        storeMessage: function(){
            messageRef.push({text: this.messageText, name: this.name})
            this.messageText = ""
        },
        deleteMessage: function(messageID){
            messageRef.child(messageID).remove()
        },
        editMessage: function(message){
            this.editText = message
            this.messageText = message.text
        },
        cancelMessage: function(){
            this.editText = null
            this.messageText = ""
        },
        updateMessage: function(){
            messageRef.child(this.editText.id).update({text:this.messageText})
            this.cancelMessage()
        }
    },
    created(){
        // หลังเพิ่มข้อมูล หรือ นำข้อมูลในฐานข้อมูลไปแสดง
        messageRef.on('child_added', snapshot => {
            this.messageGroup.push({...snapshot.val(), id:snapshot.key})
        })
        // หลังลบข้อมูล
        messageRef.on('child_removed', snapshot => {
            const deleteText = this.messageGroup.find(message => message.id == snapshot.key)
            const index = this.messageGroup.indexOf(deleteText)
            this.messageGroup.splice(index,1)
        })
        // หลังแก้ไขข้อมูล
        messageRef.on('child_changed', snapshot => {
            const updateText = this.messageGroup.find(message => message.id == snapshot.key)
            updateText.text = snapshot.val().text
        })
    }
})
