# 템플릿 문법
1. 보간법 
    - 문자열    
        {{ }} : Mustaches 라 칭한다. 
        ```html
        <span>메시지: {{ msg }}</span>
        ```
    - v-once 디렉티브 
        ```html
        <span v-once>다시는 변경하지 않습니다: {{ msg }}</span>
        ```
    - html 로 출력하기 
        ```html
        <span v-html="msg"></span>
        ```
    - v-bind    
        {{ }} 속성은 html 속성에서 사용이 불가능    
        사용하기 위해서는 v-bind 디렉티브를 사용해야 한다. 
        ```html
        <button v-bind:disabled="msg">button</button>
        <!-- 줄여서 표기  -->
        <button :disabled="msg">button</button>
        ```
2. javascript 표현식 사용
    - 사용 예
        ```html
        <span>num : {{num}}</span><br>
        <span>num +1 : {{num+1}}</span><br>
        <span>{{ 1 > 2 ? 'YES' : 'NO' }}</span><br>
        <span>{{ msg.split('').reverse().join('') }}</span><br>
        <div :id=" 'list_'+num ">v-bind 속성</div>
        ```
    - 동작 안하는 예
        ```html
        <!-- 아래는 구문입니다, 표현식이 아닙니다. -->
        {{ var a = 1 }}

        <!-- 조건문은 작동하지 않습니다. 삼항 연산자를 사용해야 합니다. -->
        {{ if (ok) { return message } }}
        ```

3. 디렉티브     
    - v- 접두사가 있는 특수 속성  
    - 디렉티브 속성 값은 단일 javascript 표현식이 된다. (단 v-for 예외)
    

    1. 전달인자     
        v-bind 속성
         ```html
        <button v-bind:disabled="msg">button</button>
        <!-- 줄여서 표기  -->
        <button :disabled="msg">button</button>
        ```
        v-if 속성       
        ```html
        <!-- 사용 예 v-if -->
        <p v-if="seen">이제 나를 볼 수 있어요</p>
        ```
4. 약어
    1. v-bind
        ```html
        <!-- 전체 문법 -->
        <a v-bind:href="url"> ... </a>

        <!-- 약어 -->
        <a :href="url"> ... </a>
        ```
    2. v-on 
        ```html
        <!-- 전체 문법 -->
        <a v-on:click="doSomething"> ... </a>

        <!-- 약어 -->
        <a @click="doSomething"> ... </a>
        ```
    
