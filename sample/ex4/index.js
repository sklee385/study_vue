

Vue.component('todo-item', {
    props: ['todo'],
    template: '<li>({{ todo.id }}) {{ todo.text }}</li>'
});
var app7 = new Vue({
    el: '#app-7',
    data: {
        groceryList: [
            { id: 0, text: 'Vegetables' },
            { id: 1, text: 'Cheese' },
            { id: 2, text: 'Whatever else humans are supposed to eat' }
        ]
    }
});

// 등록
Vue.component('my-component', {
    template: '<div>사용자 정의 컴포넌트 입니다!</div>'
})

// 루트 인스턴스 생성
new Vue({
    el: 'my-component'
})