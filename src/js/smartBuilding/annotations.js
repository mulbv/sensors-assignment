/**
 * Drawing annotations
 */
const MapObject = require('./objects/index.js');
const Beacon = require('./objects/beacon.js');
const Temperature = require('./objects/temperature.js');
const Waterleak = require('./objects/waterleak.js');
const Door = require('./objects/door.js');
const Distance = require('./objects/distance.js');
module.exports = class SmartBuildingAnnotations {
    constructor(main){
        this.main = main;
        this.prepareData();
        this.container = this.main.Map.svg.append('g').classed('annotations',true);
        this.update();
    }

    // parse data set into useful objects
    prepareData(){
        // Create the data objects
        this.sensors = this.main.data.sensors.reduce( (acc,s) => {
            if(this.main.config.activeMap != s.map_id) {
                return acc;
            }
            switch(s.type) {
                case 'beacon':
                    acc.push(new Beacon(s));
                    break;
                case 'temperature':
                    acc.push(new Temperature(s));
                    break;
                case 'waterleak':
                    acc.push(new Waterleak(s));
                    break;
                case 'door':
                    acc.push(new Door(s));
                    break;
                case 'distance':
                    acc.push(new Distance(s));
                    break;
                default:
                    console.warn(`unhandled mapObject created of type: ${s.type}`);
                    acc.push(new MapObject(s));
                    break;
            }
            return acc;
        },[]);
    }

    // Draw map-objects onto SVG
    update(){
        let g = this.container.selectAll('g.object').data(this.sensors);
        // remove delete items
        g.exit().remove();

        // append new groups for each node entering the data selection
        let gEnter = g.enter()
            .append('g');

        // render the new items
        const main = this.main;
        gEnter.each(function(d) {
            const g = d3.select(this);
            d.render(main, g);
        });


        // update fill
        g.merge(gEnter).each(d => d.update());

    }
}
