new Vue({
    el : ".test",
    data : {
        ok : true,
        type : 'D',
        loginType : 'username'

    },
    methods: {
        change_input : function (){
            this.loginType = this.loginType == 'username' ? '' : 'username'; 
        }
    }
})