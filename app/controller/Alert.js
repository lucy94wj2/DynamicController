/*
 * Simple Alert controller for demonstration of dynamic 
 * loading of controller from DC.controller.Navigation 
 * 
 */

Ext.define('DC.controller.Alert',{
    extend: 'Ext.app.Controller',
    
    main: function (dataview, index, target, record, e, eOpts) {
        Ext.Msg.alert('Alert.main function');
    },

    action: function (dataview, index, target, record, e, eOpts) {
        Ext.Msg.alert('Alert.action function');
    }
});