/*global m:true*/  // Meteor creates a file-scope global for exporting. This comment prevents a potential JSHint warning.
//Move mithril back to it's proper global
m = mithril;
//meteor helper - from http://lhorie.github.io/mithril-blog/mithril-and-meteor.html
m.reactive = function(controller) {
    return function() {
        var instance = {}

        var computation = Deps.autorun(function() {
            m.startComputation()
            controller.call(instance)
            m.endComputation()
        })

        instance.onunload = function() {
            computation.stop()
        }

        return instance
    }
}