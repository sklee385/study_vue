Vue.component('my-component', {
    template: '<div>사용자 정의 컴포넌트 입니다!</div>',
})

new Vue({
    el: '#example'
});



new Vue({
    el: "#example2",
    components: {
        // <my-component> 는 상위 템플릿에서만 사용할 수 있습니다.
        'my-component2': {
            template: '<div>사용자 정의 컴포넌트 입니다!2</div>'
        }
    }
});


new Vue({
    el: "#table",
    components: {
        // <my-component> 는 상위 템플릿에서만 사용할 수 있습니다.
        row: {
            template: '\
                <tr>\
                    <td>\
                    1\
                    </td>\
                </tr>        '
        }
    }
});




Vue.component('simple-counter', {
    template: '<button v-on:click="counter += 1">{{ counter }}</button>',
    // 데이터는 기술적으로 함수이므로 Vue는 따지지 않지만
    // 각 컴포넌트 인스턴스에 대해 같은 객체 참조를 반환합니다.
    data: function () {
        return {
            counter: 0
        }
    }
})




Vue.component('child', {
    // props 정의
    props: ['message', "myMsg", "myMessage"],
    // 데이터와 마찬가지로 prop은 템플릿 내부에서 사용할 수 있으며
    // vm의 this.message로 사용할 수 있습니다.
    template: '<span>{{ message }} {{myMsg}} {{myMessage}} </span>'
})

Vue.component('child2', {
    // props 정의
    props: ['text', "isComplete"],
    // 데이터와 마찬가지로 prop은 템플릿 내부에서 사용할 수 있으며
    // vm의 this.message로 사용할 수 있습니다.
    template: '<span>{{ text }} {{isComplete}} {{test}}</span>',
    data: function () {
        return {
            test: "11"
        }
    }
})


Vue.component('child3', {
    props: ['test'],
    template: '<span> 함수로 동작 ? {{ t1 }} {{data1}}</span>',
    methods: {
        test1: function () {
            return this.test == 1 ? 'ok' : "no";
        }
    },
    data: function () {
        return {
            t1: this.test1(),
            data1: this.t2
        }
    }
})


Vue.component('child4', {
    props: {
        test : Number
    },
    template: '<span> test : {{test}} </span>',
})




new Vue({
    el: '#example-2',
    data: {
        parentMsg: "123",
        todo: {
            text: 'Learn Vue',
            isComplete: false,
            test: ''
        }
    }
});