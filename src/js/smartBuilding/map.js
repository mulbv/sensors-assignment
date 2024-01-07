/**
 * @class SmartBuildingMap
 *
 * Render the map in /assets/map.png
 */
const fs = require('fs');
const Map = class SmartBuildingMap {
    constructor(main){
        this.main = main;
        this.size = [1189, 841]; // map size width x height
        this.render();
    };

    // getter for the current map
    get currentMap(){
        const mapId = this.main.config.activeMap;
        return `/assets/maps/${mapId}.png`;
    }

    // Initial render
    render(){
        // The map is loaded as SVG
        this.svg = this.main.container.append('svg')
            .attr('viewBox','0 0 '+this.size[0]+' '+this.size[1])
            .on('click',this.clicked.bind(this));

        // The background is defined here
        this.svg.append('svg:image')
            .attr('width','100%')
            .attr('height','100%')
            .attr('xlink:href',this.currentMap);
    }

    // converts an event position to a coordinate
    scale(value, axis){
        let size, viewBoxSize;
        if(axis === 'x'){
            size = this.svg.style('width');
            viewBoxSize = this.size[0];
        } else if(axis === 'y') {
            size = this.svg.style('height');
            viewBoxSize = this.size[1];
        } else {
            throw Error('Unsupported axis');
        }
        size = parseFloat(size);
        value = parseFloat(value);
        if(value < 0 || value > viewBoxSize) {
            throw Error(`value out of bounds on ${axis}-axis: ${value}`);
        }
        return value / size * viewBoxSize;
    }

    scaleY(value){
        return this.scale(value,'y');
    }
    scaleX(value){
        return this.scale(value,'x');
    }
    getCoordinate(event, round=true){
        let coords = [this.scaleX(event.offsetX),this.scaleY(event.offsetY)];
        if (round) {
            coords = coords.map(c => Math.round(c));
        }
        return coords;
    }

    // console.log the coordinates clicked
    clicked(e){
        let coord = this.getCoordinate(e);
        if (this.main.config.debug) {
            console.log(`Clicked (${coord[0]},${coord[1]})`);
        }
    }
}
module.exports = Map;
