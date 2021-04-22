let post = new Vue({
    el: "#post",
    data:{
        title: 'กระดานสนทนา',
        message: 'พูดคุยทั่วไป',
    }
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