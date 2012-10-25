/*
 * Main view of Application
 */
Ext.define('DC.view.Main', {
    extend: 'Ext.Panel',
    alias: 'widget.mainview',

    config: {
        fullscreen: true
    },

    items: [
        Ext.create('Ext.List',{
            id: 'mainMenu',
            fullscreen: true,
            itemTpl: '{text}',

            store: Ext.create('Ext.data.Store', {
                model: 'DC.model.MenuItem',
                data: [
                    {text: 'Run Alert.action', controller: 'DC.controller.Alert', method:'action'},
                    {text: 'Run Logger.main', controller: 'DC.controller.Logger'},
                    {text: 'Run Logger.info', controller: 'DC.controller.Logger', method:'info'},
                    {text: 'Run Alert\'s default method', controller: 'DC.controller.Alert'}
                ]
            })
        })
    ]
});