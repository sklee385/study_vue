# 컴포넌트

1. 전역 컴포넌트 
    ```html
    <div id="example">
        <my-component></my-component>
    </div>
    ```
    ```js
    Vue.component('my-component', {
    template: '<div>사용자 정의 컴포넌트 입니다!</div>'
    })

    new Vue({
    el: '#example'
    })
    ```

2. 지역 등록
    ```html
    <div id="example2">
        <my-component2></my-component2>
    </div>
    ```
    ```js
    new Vue({
        el : "#example2",
        components: {
            // <my-component> 는 상위 템플릿에서만 사용할 수 있습니다.
            'my-component2': {
                template: '<div>사용자 정의 컴포넌트 입니다!2</div>'
            }
        }
    })
    ```

3. DOM 템플릿 구문 분석 경고 
    > table 이나 ul, ol 태그 후에 템플릿이 들어가면 렌더링시 에러를 발생한다.          
    > 사용자 지정 my-row 태그는 잘못된 컨텐츠가 되어 결과적으로 렌더링시 에러를 발생시킨다. 
    ```html
    <table>
        <my-row></my-row>
    </table>
    ```
    > 해결 방법은 is 특수 속성을 사용 하는 것
    ```html
    <table>
        <tr is='my-row'></tr>
    </table>
    ```

3. 템플릿 data는 함수여야 한다. 
    ```html
    <div id="example-2">
        <simple-counter></simple-counter>
        <simple-counter></simple-counter>
        <simple-counter></simple-counter>
    </div>
    ```
    ```js
    Vue.component('simple-counter', {
        template: '<button v-on:click="counter += 1">{{ counter }}</button>',
        /* 데이터는 기술적으로 함수이므로 Vue는 따지지 않지만 */
        /* 각 컴포넌트 인스턴스에 대해 같은 객체 참조를 반환합니다. */
        data: function () {
            return {
                counter: 0
            }
        }
    })

    new Vue({
        el: '#example-2'
    })
    ```

4. Props
    1. Props로 데이터 전달하기 
        ```js
        Vue.component('child', {
            /* props 정의 */
            props: ['message'],
            /* 데이터와 마찬가지로 prop은 템플릿 내부에서 사용할 수 있으며 */
            /*  vm의 this.message로 사용할 수 있습니다. */
            template: '<span>{{ message }}</span>'
        })
        ```

        > js에서 선언할때는 camelCase (대소문자로 구분)을 선언 
        > html 에서 사용할 때는 kebab-case(-으로 구분) 방식을 사용
        > html은 대소문자를 구분하지 않기 때문에 이러한 증상이 나옴
        ```js
        Vue.component('child', {
            /* JavaScript는 camelCase */
            props: ['myMessage'],
            template: '<span>{{ myMessage }}</span>'
        })
        ```
        ```html
        <!-- HTML는 kebab-case -->
        <child my-message="안녕하세요!"></child>
        ```
    2. 동적 Props 
        ```js
        Vue.component('child', {
            /*  props 정의 */
            props: ['message', "myMsg", "myMessage"],
            /*  데이터와 마찬가지로 prop은 템플릿 내부에서 사용할 수 있으며
             vm의 this.message로 사용할 수 있습니다. */
            template: '<span> {{myMessage}} </span>'
        });
        new Vue({
            el: '#example-2',
            data : {
                parentMsg : "123"
            }
        })
        ```
        ```html
        <input v-model="parentMsg">
        <br>
        <child v-bind:my-message="parentMsg"></child>
        ```
    3. 객체 속성을 Props 
        ```js
        Vue.component('child2', {
            /*  props 정의 */
            props: ['text', "isComplete"],
            /*  데이터와 마찬가지로 prop은 템플릿 내부에서 사용할 수 있으며
             vm의 this.message로 사용할 수 있습니다. */
            template: '<span>{{ text }} {{isComplete}} {{test}}</span>',
            data : function (){
                return {
                    text : "121"
                }
            }
        })

        new Vue({
            el: '#example-2',
            data: {
                parentMsg: "",
                todo: {
                    text: 'Learn Vue',
                    isComplete: false
                }
            }
        })
        ```
        ```html
        <child2 v-bind="todo"></child2>
        ```

    4. 리터럴 vs 동적
        > 초보자가 흔히 하는 실수중 하나가 리터럴 구문을 사용해서 숫자를 전달하려 하는 것 
        ```html
        <!-- 이것은 일반 문자열 "1"을 전달합니다. -->
        <comp some-prop="1"></comp>
        <!-- 이것은 실제 숫자로 전달합니다. -->
        <comp v-bind:some-prop="1"></comp>
        ```

    5. 함수로 전달 
        ```js
        Vue.component('child3', {
            props: ['test'],
            template: '<span> 함수로 동작 ? {{ t1 }} {{data1}}</span>',
            methods: {
                test1 : function (){
                    return this.test == 1 ? 'ok' : "no";
                }
            }, 
            data: function (){
                return {
                    t1 : this.test1(),
                    data1 : this.t2
                }
            }
        });
        ```
        ```html
        <child3 test="1"></child2>
        ```
    6. Prop 검증
        