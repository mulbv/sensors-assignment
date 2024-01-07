/**
 * All mapobjects are organized here
 */
const config = require('../config.js');
module.exports = class SmartBuildingObject {

    description = "UNKNOWN";
    body = "UNKNOWN BODY"; // Detailed description of the sensor

    get htmlBody() {
        const str = this.body;
        if (typeof str === 'undefined' || str === null) {
            return '';
        }
        var breakTag = '<br />';
        return (str + '').replace(/([^>\r\n]?)(\r\n|\n\r|\r|\n)/g, '$1' + breakTag + '$2');
    }

    constructor(data){
        this.coordinates = data.coordinates;
        this.className = 'object';
        this.size = config.iconSize; // base icon size
    }

    render(main, g){
        this.g = g.attr('class', this.className);
        this.main = main; // Required to fetch the Hub
        // Register events after render
        this.g.on('click', this.onClick.bind(this));
    }

    update(){
        this.g.attr('transform',d=> 'translate('+d.coordinates[0]+','+d.coordinates[1]+')');
    }

    get coordinateText(){
        return `(${this.coordinates[0]},${this.coordinates[1]})`;
    }

    get longDescription(){
        return `${this.description} @ ${this.coordinateText}`;
    }

    onClick(){
        const modal = this.main.Modal;
        modal.state.title = this.longDescription;
        modal.state.content = this.htmlBody;
        modal.open();
    }
}
