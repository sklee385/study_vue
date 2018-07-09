var app = new Vue({
    el: '#app',
    data: {
        message: '안녕하세요 Vue!'
    }
});

var app2 = new Vue({
    el: '#app-2',
    data: {
        message: '이 페이지는 ' + new Date() + ' 에 로드 되었습니다',
        msg : 'test2'
    }
})