/**
 * Functionality around the temperature sensor
 */
const SmartBuildingObject = require('./index.js');
class SmartBuildingTemperature extends SmartBuildingObject {
    constructor(data){
        super(data);
        this.status = data.status;
        this.className += ' temperature';
    }

    render(main, g) {
        let size = this.size * 0.7;
        super.render(main, g);
        g.append('rect')
            .attr('x', size/-2)
            .attr('y', size/-2)
            .attr('width', size)
            .attr('height', size);
    }

    update() {
        super.update();
        this.g.classed('active',this.status);
    }

}
module.exports = SmartBuildingTemperature;
