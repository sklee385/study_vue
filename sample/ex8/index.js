var watchExampleVM = new Vue({
    el: '#watch-example',
    data: {
        question: '',
        answer: '질문을 하기 전까지는 대답할 수 없습니다.'
    },
    watch: {
        // 질문이 변경될 때 마다 이 기능이 실행됩니다.
        question: function (newQuestion) {
            this.answer = '입력을 기다리는 중...';
        }
    }

});