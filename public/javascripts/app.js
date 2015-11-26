(function() {
    var app = angular.module('proLoop', []);

    app.controller('LoopController', function(){
        this.product = pro;
    });

    var pro = [{
        name: 'Mark Justin Tumulak',
        location: 'Lapu-Lapu City',
        post: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas neque totam aliquam sequi aliquid, distinctio facere obcaecati illo eius, quis veniam fugit, quae delectus, quibusdam. Aut tempore excepturi amet fugiat!",
        img:'/stylesheets/css/image/mjt.jpg'
    },{
        name: 'Genaro Legaspi',
        post: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas neque totam aliquam sequi aliquid, distinctio facere obcaecati illo eius, quis veniam fugit, quae delectus, quibusdam. Aut tempore excepturi amet fugiat!",
        img:'/stylesheets/css/image/profpic.jpg'
    },{
        name: 'Argie Berou',
        post: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas neque totam aliquam sequi aliquid, distinctio facere obcaecati illo eius, quis veniam fugit, quae delectus, quibusdam. Aut tempore excepturi amet fugiat!",
        img:'/stylesheets/css/image/rg.jpg'
    }];
})();