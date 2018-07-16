# 이벤트 트리거
1. 기본 이벤트 
    ```html
    <button v-on:click="counter += 1">Add 1</button>
    <p>위 버튼을 클릭한 횟수는 {{ counter }} 번 입니다.</p>
    ```
    ```js
    var example1 = new Vue({
        el: '#example-1',
        data: {
            counter: 0
        }
    })
    ```
2. 메소드 이벤트 핸들러
    ```html
    <button v-on:click="greet">Greet</button>
    ```
    ```js
    methods: {
        greet: function (event) {
            alert('Hello ' + this.counter + '!')
            if (event) {
                alert(event.target.tagName)
            }
        },
    }
    ```

3. 인라인 메소드 핸들러
    - 메소드 이름을 직접 바인딩 하는 대신 인라인 javascript 구문에 메소드를 사용할 수 있다. 
    ```html
    <button v-on:click="say('hi')">Say hi</button>
    <button v-on:click="say('what')">Say what</button>
    <!-- 이벤트 속성을 파라미터로 넘길때 $event 사용  -->
    <button v-on:click="warn('Form cannot be submitted yet.', $event)">btn</button>
    ```
    ```js
    methods: {
        say: function (message) {
            alert(message)
        },
        warn: function (message, event) {
            if (event) event.preventDefault()
            alert(message)
        }
    }
    ```

4. 키 이벤트 
    > 별칭을 지정하거나 키코드를 이용해서 사용 가능     
    > keyup.alt.67 같이 키조합도 가능   
    > click.ctrl 같이 키보드 마우스 조합도 가능     
    > click.right 같이 마우스 오른쪽 키 이벤트 등도 가능
    ```html
    <input v-on:keyup.enter="submit">
    <br>
    <!-- Alt + c  -->
    <input @keyup.alt.67="submit">
    <br>
    <div @click.ctrl="submit">Do something</div>
    <div @click.right="submit">Do something</div>
    ```
    
