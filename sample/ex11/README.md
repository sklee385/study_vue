# 리스트 랜더링

1. 기본 사용 방법
    ```html
    <ul id="example-1">
        <li v-for="item in items">
            {{ item.message }}
        </li>
    </ul>  
    ```
    ```js
    var example1 = new Vue({
        el: '#example-1',
        data: {
            items: [
            { message: 'Foo' },
            { message: 'Bar' }
            ]
        }
    })
    ```

2. index, value 식으로 넘기기
    ```html
    <ul id="example-2">
        <li v-for="(item, index) in items">
            {{ parentMessage }} - {{ index }} - {{ item.message }}
        </li>
    </ul>
    ```
    ```js
    new Vue({
        el: '#v-for-object',
        data: {
            object: {
            firstName: 'John',
            lastName: 'Doe',
            age: 30
            }
        }
    })
    ```

3. 객체 형식 (key, value)
    ```html
   <div v-for="(value, key) in object">
        {{ key }}: {{ value }}
    </div>
    ```
    ```js
    new Vue({
        el: '#v-for-object',
        data: {
            object: {
            firstName: 'John',
            lastName: 'Doe',
            age: 30
            }
        }
    })   
    ```
    - 인덱스도 제공이 가능
    ```html
    <div v-for="(value, key, index) in object">
        {{ index }}. {{ key }} : {{ value }}
    </div>
    ```

4. key 
    기본 모드는 효율적이지만 목록의 출력 결과가 하위 컴포넌트 상태 또는 임의 DOM 상태(폼input)에 의존하지 않는 경우에 적합하다.     
    가능하면 언제나 v-for에 key를 추가하는 것이 좋다.
    ```html
    <div v-for="item in items" :key="item.id">
        <!-- content -->
    </div>
    ```

5. 배열감지 
    - 변이 메소드 
        - push()
        - pop()
        - shift()
        - unshift()
        - splice()
        - sort()
        - reverse()

        사용예  (example1.items.push({ message: 'Baz' }))
        
    - 주의사항
        > 자바스크립트 제한으로 vue는 배열에 대한 다음과 같은 변경사항을 감지할 수 없다.
        1. 배열 변경 감지 
            1. 인덱스로 배열에 있는 항목을 직접 설정하는 경우
                ```js
                vm.items[indexOfItem] = newValue
                ```
                > 대체방법
                ```js
                /* 방법 1 */
                Vue.set(example1.items, indexOfItem, newValue);
                /* 방법 2 */
                example1.items.splice(indexOfItem, 1, newValue)
                ```
            2. 배열 길이를 수정하는 경우
                ```js
                vm.items.length = newLength
                ```
                > 대체방법
                ```js
                example1.items.splice(newLength)
                ```
        2. 객체 변경 감지
            1. 속성 추가
                ```js
                var vm = new Vue({
                    data: {
                        a: 1
                    }
                })
                // `vm.a` 는 반응형입니다.

                vm.b = 2
                // `vm.b` 는 반응형이 아닙니다.
                ```
                > Vue.set(object, key, value) 을 이용하면 대체 가능
                ```js
                /* 데이터 바로 아래에 위치 하는게 아니라 하단에 객체 추가 */
                var vm = new Vue({
                    data: {
                        userProfile: {
                            name: 'Anika'
                        }
                    }
                });
                /* 추가 */ 
                Vue.set(vm.userProfile, 'age', 27) 
                ```
        
6. 필터링된 결과 표시하기 
    ```html
    <ul id="list">
        <li v-for="n in evenNumbers">{{ n }}</li>
    </ul>
    ```
    ```js
    new Vue({
        el : "#list",
        data: {
            numbers : [0,1,2,3,4,5]
        },
        computed: {
            evenNumbers : function () {
                return this.numbers.filter(function (number){
                    return number % 2 === 0;
                })
            }
        }
    })
    ```
    > 계산된 속성을 사용할 수 없는 경우 (중첩 for )
    ```html
    <li v-for="n in even(numbers)">{{ n }}</li>
    ```
    ```js
    data: {
        numbers: [ 1, 2, 3, 4, 5 ]
    },
    methods: {
        even: function (numbers) {
            return numbers.filter(function (number) {
            return number % 2 === 0
            })
        }
    }
    ```

7. Range v-for
    > v-for 는 숫자를 사용할 수 있다. 
    ```html
    <div>
        <span v-for="n in 10">{{ n }} </span>
    </div>
    ```

8. v-for 템플릿 
    - v-if 와 마찬가지로 <template>태그를 사용해 여러 엘리먼트 블럭을 렌더링 할 수 있다.
    ```html

    ```