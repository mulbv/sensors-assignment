/**
 * simple button class
 */
class SmartBuildingButton{
    constructor(container, options){
        // Close button
        this.button = container.append('div')
            .attr('class','button')
            .on('click',options.onClick);
        this.update(options.text);
    }

    update(text) {
        this.button.text(text);
    }
}
module.exports = SmartBuildingButton;
