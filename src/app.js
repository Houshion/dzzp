$(function() {  
    vipspa.start({  
        view: '.ui-view',// 装载视图的dom  
        router: {  
            '/home': {  
                templateUrl: 'html/home.html',  
                controller: 'js/home.js'  
            },  
            '/content': {  
                templateUrl: 'html/content.html',  
                controller: 'js/content.js'  
            },  
            '/component': {  
                templateUrl: 'html/component.html',  
                controller: 'js/component.js'  
            },  
            'defaults': '/home'// 不符合上述路由时，默认跳至  
        },  
        errorTemplateId: '#error'  
    });  
});  