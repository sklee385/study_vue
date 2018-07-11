new Vue({
    el : "#test",
    data : {
        msg : 'test',
        isButtonDisabled : false,
        num : 1 
    },
    methods : {
        btn_disabled : function (){
            this.isButtonDisabled = true;
        }
    }
})