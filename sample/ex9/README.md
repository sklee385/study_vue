# 클레스 토글하기 

- class a 값을 토글하기     
    is_a 값이 true 이면 a 클레스가 나오고 
    is_a 값이 false 이면 a 클레스가 나오지 않는다.
    ```html
    <div id="test" :class="{a : is_a}">
        {{msg}}
        <button @click="onclick">click</button>
    </div>
    ```
    ```js
    new Vue({
        el: '#test',
        data : {
            is_a : true,
            msg : 'test'
        },
        methods : {
            onclick : function () {
            this.is_a = this.is_a ? false : true; 
            }
        }
    });
    ```
- 일반적으로 많이 사용 하는 구조 
    ```html
    <div id="test2" :class="classObj">
    </div>
    ```
    ```js
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
    ```

# 배열 사용
    ```html
    <div id='test3' :class="[activeClass, errorClass]"></div>
    ```
    ```js
    new Vue({
        el: '#test3',
        data: {
            activeClass: 'active',
            errorClass: 'text-danger'
        }
    });
    ```

# 템플릿 사용하기 
    ```html
    <my-component :class="classobj"></my-component>
    ```
    ```js
    Vue.component('my-component', {
        template: '<p class="foo bar">Hi</p>'
    });

    new Vue({
        el : "my-component",
        computed : {
            classobj : function (){
                return {
                    test : true
                }
            }
        }
    })
    ```
    ```html
    <!-- 결과 -->
    <p class="foo bar test">Hi</p>
    ```