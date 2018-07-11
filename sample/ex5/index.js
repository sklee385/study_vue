var obj = {
    foo: 'bar'
}

// freeze 함수를 사용하면 변수 변경이 안된다. 
Object.freeze(obj)

new Vue({
    el: '#app',
    data: obj
})


var data = { a: 1 }
var vm = new Vue({
    el: '#example',
    data: data
})

vm.$data === data // => true
vm.$el === document.getElementById('example') // => true

// $watch 는 인스턴스 메소드 입니다.
vm.$watch('a', function (newVal, oldVal) {
    // `vm.a`가 변경되면 호출 됩니다.
    console.log(newVal, oldVal)
})