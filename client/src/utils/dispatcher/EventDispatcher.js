function EventDispatcher() {
    // Create a dummy DOM element
    var dummy = document.createTextNode('');

    // Create custom wrappers with nicer names
    this.off = dummy.removeEventListener.bind(dummy);
    this.on = dummy.addEventListener.bind(dummy);
    this.trigger = function(eventName, data) {
        if( !eventName ) return;
        var event = new CustomEvent(eventName, { "detail" : data} );
        dummy.dispatchEvent(event);
    }
}
const EventDispatcherInstance = new EventDispatcher();

export default EventDispatcherInstance;