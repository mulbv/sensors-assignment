/**
 * Functionality for the distance sensor
 */
const SmartBuildingObject = require('./index.js');

class SmartBuildingDistance extends SmartBuildingObject {
    constructor(data){
        super(data);
        this.status = data.status;
        this.className += ' distance';
    }

    description = 'Afstandssensor';

    render(main, g) {
        let size = this.size * 0.7;
        super.render(main, g);
        let svg = g.append('svg')
            .attr('x', size/-2)
            .attr('y', size/-2)
            .attr('width',size)
            .attr('height',size)
            .attr('viewBox', '0 0 20 20');

        svg.append('line')
            .attr("x1", 2)
            .attr("y1", 2)
            .attr("x2", 16)
            .attr("y2", 16);

        svg.append('line')
            .attr("x1", 16)
            .attr("y1", 2)
            .attr("x2", 2)
            .attr("y2", 16);

    }

    update() {
        super.update();
        this.g.classed('active',this.status);
    }

}

module.exports = SmartBuildingDistance;

