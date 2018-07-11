new Vue({
    data: {
        a: 1
    },
    created: function () {
        // `this` 는 vm 인스턴스를 가리킵니다.
        console.log('a is: ' + this.a)
    }
})