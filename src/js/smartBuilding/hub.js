/**
 * This class is the central event dispatcher
 * Objects can register to event types and respond to changes
 *
 * The following use case has been implemented:
 * - Opening the modal from a random component
 */

// Example event types, expand as needed
const eventTypes = [
    'object.mouseenter',
    'object.mouseleave',
    'object.select',
    'object.add',
    'object.move',
    'object.delete',
    'map.reload',
    'modal.open',
    'modal.close',
];

module.exports = class SmartBuildingHub {
    static get eventTypes (){
        return eventTypes;
    }

    constructor(main){
        this.main = main;
        this.events = {};
        SmartBuildingHub.eventTypes.forEach(type => {
            this.events[type] = [];
        });
    }

    // Private static function to validate event type
    #validateEventType(eventTypeName) {
        if(typeof this.events[eventTypeName] === 'undefined'){
            throw Error(`Invalid event type: ${eventTypeName}`);
        }
    }

    /**
     * Registers an event
     */
    on(eventTypeName, callback) {
        this.#validateEventType(eventTypeName);
        if(typeof callback !== 'function'){
            console.error(callback);
            throw Error('Provided callback is not a function');
        }
        this.events[eventTypeName].push(callback);
    }

    /**
     * Removes the callback from the event type list
     */
    off(eventTypeName, callback) {
        this.#validateEventType(eventTypeName);
        // TODO remove callback from the list
    }

    /**
     * Trigger all callbacks for the event type
     */
    trigger(eventTypeName, ...args) {
        this.#validateEventType(eventTypeName);
        this.events[eventTypeName].forEach( callback => {
            callback(...Array.from(arguments).slice(1));
        });
    }
}

