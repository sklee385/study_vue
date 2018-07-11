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
