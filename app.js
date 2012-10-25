/* 
 * Application's entry point, see source files for more information.
 */
Ext.application({
    name: 'DC',

    controllers: ['Navigation'],
    models: ['MenuItem'],
    views: ['Main'],

    launch: function() {
        Ext.create('DC.view.Main');
    }
});