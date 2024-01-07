/**
 * Functionality around the waterleak sensor
 */
const SmartBuildingObject = require('./index.js');
class SmartBuildingWaterleak extends SmartBuildingObject {
    constructor(data){
        super(data);
        this.status = data.status;
        this.className += ' waterleak';
    }

    render(main, g) {
        let size = this.size;
        super.render(main, g);
        g.append('svg')
            .attr('x', size/-2)
            .attr('y', size/-2)
            .attr('viewBox', '0 0 200 200')
            .attr('width', size)
            .attr('height', size)
            .append('polygon')
                .attr('points','100,10 120,90 190,90 130,130 150,200 100,160 50,200 70,130 10,90 80,90');
    }

    update() {
        super.update();
        this.g.classed('active',this.status);
    }

}
module.exports = SmartBuildingWaterleak;
