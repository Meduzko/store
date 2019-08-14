function EventDispatcher() {
    // Create a dummy DOM element
    var dummy = document.createTextNode('');

    // Create custom wrappers with nicer names
    this.off = dummy.removeEventListener.bind(dummy);
    this.on = dummy.addEventListener.bind(dummy);
    this.trigger = function(eventName, data) {
      //  debugger;
        if( !eventName ) return;
        var event = new CustomEvent(eventName, { 'detail' : data, bubbles: true, cancelable: true });
        dummy.dispatchEvent(event);
    }
}
const Event = new EventDispatcher();

export default Event;