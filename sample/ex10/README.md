# 조건부 렌더링
1. v-if
    ```html
    <!-- v-if -->
    <div v-if="ok">yes</div>
    ```
2. v-else 
    ```html
    <!-- v-else -->
    <div v-if="Math.random() > 0.5">
        이제 나를 볼 수 있어요
    </div>
    <div v-else>
        이제는 안보입니다
    </div>
    ```
3. v-else-if
    ```html
    <!-- v-else-if -->
    <div v-if="type === 'A'">
        A
    </div>
    <div v-else-if="type === 'B'">
        B
    </div>
    <div v-else-if="type === 'C'">
        C
    </div>
    <div v-else>
        Not A/B/C
    </div>
    ```
4. 조건부 그룹
    ```html
    <!-- 조건부 그룹 -->
    <template v-if="ok">
        <h1>Title</h1>
        <p>Paragraph 1</p>
        <p>Paragraph 2</p>
    </template>
    ```
5. v-show
    css 기반 토글   
    display : none 처리     
    자주 변경시에는 v-show 
    자주 변경되지 않을시에는 v-if 

6. 기타 
    v-if와 v-for를 함께 사용하는 경우 v-for는 v-if보다 높은 우선 순위를 가진다.
    

