Router.configure({
    layoutTemplate: 'layout',
    loadingTemplate: 'loading'
});

Router.onBeforeAction('loading');

Router.route('/', {
    template: 'funts',
    data: function() {
        console.log('router');
    }
});

Router.route('/about');
Router.route('/insertFuntsForm');