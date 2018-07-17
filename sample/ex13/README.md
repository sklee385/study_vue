# 폼입력 바인딩 
```js
new Vue({
    el: "#test",
    data : {
        message : "",
        msg : "",
        checked : true,
        checkedNames : [],
        picked : "",
        selected: "",
        selected2: "",
        toggle : [],
        toggle2 : '',
        selected3: 'A',
        options: [
            { text: 'One', value: 'A' },
            { text: 'Two', value: 'B' },
            { text: 'Three', value: 'C' }
        ]

    }
})
```
1. 기본 사용법
    ```html
    <input v-model="message" placeholder="여기를 수정해보세요">
    <p>메시지: {{ message }}</p>
    ```

2. 여러줄 가진 문장
    ```html
    <span>여러 줄을 가지는 메시지:</span>
    <p style="white-space: pre-line">{{ message }}</p>
    <br>
    <textarea v-model="message" placeholder="여러줄을 입력해보세요"></textarea>
    ```

3. 채크박스
    -기본 
        ```html
        <input type="checkbox" id="checkbox" v-model="checked">
        <label for="checkbox">{{ checked }}</label>
        ```
    - 여러개의 체크박스 
        ```html
        <div id='example-3'>
            <input type="checkbox" id="jack" value="Jack" v-model="checkedNames">
            <label for="jack">Jack</label>
            <input type="checkbox" id="john" value="John" v-model="checkedNames">
            <label for="john">John</label>
            <input type="checkbox" id="mike" value="Mike" v-model="checkedNames">
            <label for="mike">Mike</label>
            <br>
            <span>체크한 이름: {{ checkedNames }}</span>
        </div>
        ```
    - true/ false value 설정하기 
        ```html
        <input
            type="checkbox"
            v-model="toggle"
            true-value="yes"
            false-value="no"
        >
        ```
        > 주의 폼전송시에는 체크되지 않은 박스를 포함하지 않기 때문에 입력의 value 속성에 영향을 미치지 않는다.     
        > 폼을 통해 전송되려면 라디오를 사용할 것       

4. 라디오버튼
    ```html
    <input type="radio" id="one" value="One" v-model="picked">
    <label for="one">One</label>
    <br>
    <input type="radio" id="two" value="Two" v-model="picked">
    <label for="two">Two</label>
    <br>
    <span>선택: {{ picked }}</span>
    ```    

