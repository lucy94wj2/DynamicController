Ext.application({
    name: 'DynCntrl',

    views: ['Main'],

    launch: function() {
        Ext.create('DynCntrl.view.Main');
    }
});