/* 기초적인 구조 */
new Vue({
    el: '#test',
    data: {
        is_a: true,
        msg: 'test'
    },
    methods: {
        onclick: function () {
            this.is_a = this.is_a ? false : true;
        }
    }
});
/* 함수 사용 */
new Vue({
    el: '#test2',
    data: {
        isActive: true,
        error: null
    },
    computed: {
        classObj: function () {
            return {
                active: this.isActive && !this.error,
                'text-danger': this.error && this.error.type === 'fatal'
            }
        }
    }
});
/* 배열 */
new Vue({
    el: '#test3',
    data: {
        activeClass: 'active',
        errorClass: 'text-danger'
    }
});

/* 템플릿 스타일  */
Vue.component('my-component', {
    template: '<p class="foo bar">Hi</p>'
});

new Vue({
    el: "my-component",
    computed: {
        classobj: function () {
            return {
                test: true
            }
        }
    }
});

/* inline 스타일 바인딩 */
new Vue({
    el: '#test4',
    data: {
        activeColor: 'red',
        fontSize: 30
    }
});
new Vue({
    el: '#test5',
    data: {
        styleObject: {
            color: 'red',
            fontSize: '13px'
        }
    }
});
