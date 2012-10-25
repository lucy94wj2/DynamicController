/*
 * DC.model.MenuItem model spec
 * Fields:
 * text - strting, will be displaid in list item;
 * controller - string, controller's name which should be loaded into app;
 * method - string, default: main, this method will be called from loaded controller.
 * All params passed to Ext.dataview.component.Container.itemtap will be passed to method.
 */

Ext.define('DC.model.MenuItem', {
    extend: 'Ext.data.Model',
    config:{
        fields:[
            {name: 'text', type: 'string'},
            {name: 'controller', type:'string'},
            {name: 'method', type:'string', defaultValue:'main'}
        ]
    }
});