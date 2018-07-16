var test = new Vue({
    el: '#test',
    data: {
        counter: 0
    },
    methods: {
        greet: function (event) {
            // 메소드 안에서 사용하는 `this` 는 Vue 인스턴스를 가리킵니다
            alert('Hello ' + this.counter + '!')
            // `event` 는 네이티브 DOM 이벤트입니다
            if (event) {
                alert(event.target.tagName)
            }
        },
        say: function (message) {
            alert(message)
        },
        warn: function (message, event) {
            // 이제 네이티브 이벤트에 액세스 할 수 있습니다
            if (event) event.preventDefault()
            alert(message)
        },
        submit: function(event){
            alert('enter');
        }
    }
})