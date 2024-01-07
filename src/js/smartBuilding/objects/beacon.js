/**
 * Functionality around the beacon sensor
 */
const SmartBuildingObject = require('./index.js');
class SmartBuildingBeacon extends SmartBuildingObject {
    description = "Beacon";
    body = `De beacon sensor zendt continu een low-power signal uit met een unieke code.

Tracker nodes sturen dit signaal naar de server.
De positie van de beacon is bekend, hierdoor kun je de positie van de tracker volgen.

Dergelijke functionaliteiten zijn nuttig voor asset tracking of personen zoek installaties (PZI).`;

    get statusName() {
        return this.status ? 'online' : 'offline';
    }

    constructor(data){
        super(data);
        this.status = data.status;
        this.className += ' beacon';
    }

    update() {
        super.update();
        this.g.classed('active',this.status);
    }

    render(main, g) {
        super.render(main, g);
        let size = this.size * 0.8;
        let offset = size/2;
        this.g = g;

        g.append('circle')
            .attr('x',offset * -1)
            .attr('y',offset * -1)
            .attr('r',offset);
    }

    modalContent(div){
        div.html('');
        div.append('p').html(this.htmlBody);
        div.append('hr');
        let p = div.append('p')
        p.append('span').text('Status: ');
        p.append('span').text(this.statusName)
            .attr('class','status')
            .classed('active',this.status == 1)
            .classed('error',this.status == 0);
    }

    onClick() {
        super.onClick();
        const modal = this.main.Modal;
        modal.state.content = this.modalContent.bind(this);
        modal.open(true); // open fullscreen
    }
}
module.exports = SmartBuildingBeacon;

