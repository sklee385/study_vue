var example1 = new Vue({
    el: '#example-1',
    data: {
        items: [
            { message: 'Foo' },
            { message: 'Bar' }
        ]
    }
});

var example2 = new Vue({
    el: '#example-2',
    data: {
        parentMessage: 'Parent',
        items: [
            { message: 'Foo' },
            { message: 'Bar' }
        ]
    }
});

var obj = new Vue({
    el: '#v-for-object',
    data: {
        object: {
            firstName: 'John',
            lastName: 'Doe',
            age: 30
        }
    }
});


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