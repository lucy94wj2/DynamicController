/*
 * Navigation controller. This controller will be load additional
 * controller and calls it's method specified in tapped list item.
 * See DC.model.MenuItem for specifying additional controller & it's method name.
 */

Ext.define('DC.controller.Navigation',{
    extend: 'Ext.app.Controller',

    config: {
        refs:{
            mainMenu: '#mainMenu'
        },

        control: {
            mainMenu:{
                itemtap: 'route'
            }
        }
    },

    /* Routing method.
     * See sencha docs for Ext.dataview.component.Container.itemtap to get information about params.
     */
    route: function (dataview, index, target, record, e, eOpts) {
        var self = DC.app; // get app
        var classPath = record.get('controller'); // get controller name from MenuItem
        var methodName = record.get('method'); // get method name from MenuItem
        Ext.require([classPath], function() { // load controller resource
            var controllers = self.getControllerInstances(); // get app's controllers
            if (!controllers[classPath]) { // check if specified controller already loaded
                var controller = Ext.create(classPath, Ext.apply({ // if not, create & load it to app
                  application : self
                }));
                controllers[classPath] = controller;
                self.controllers.push(classPath);
            }
            // call controller's method
            eval("self.getController(classPath)."+methodName+"(dataview, index, target, record, e, eOpts)");
        });
    }
});