/*
 * Simple Logger controller for demonstration of dynamic 
 * loading of controller from DC.controller.Navigation 
 * 
 */
 
Ext.define('DC.controller.Logger',{
    extend: 'Ext.app.Controller',

    main: function (dataview, index, target, record, e, eOpts) {
        console.log('Logger.main method performed.')
    },

    info: function (dataview, index, target, record, e, eOpts) {
        console.log('['+(new Date())+'] Logger.info method performed.')
    }
});