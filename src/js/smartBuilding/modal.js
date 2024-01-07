/**
 * A minimap showing the current scroll
 */
const Button = require('./button.js');
class SmartBuildingModal {
    state = {
        open:false,
        fullscreen:false, // set to true to expand
        buttonText : 'Sluiten',
        title : 'Modal title',
        content : 'This is the modal content', // provide a callback to render custom content
    }

    constructor(main) {
        this.main = main;
        this.container = this.main.container.append('div').attr('class','modal');
        this.container.on('click',this.close.bind(this));
        this.render();
        this.registerEvents()
    }

    registerEvents(){
        this.main.Hub.on('modal.open', this.open.bind(this));
        this.main.Hub.on('modal.close', this.close.bind(this));
    }

    render(){
        this.inner = this.container.append('div').attr('class','modal-inner');
        this.inner.on('click', (event) => {
            event.stopPropagation();
        });
        // contents
        this.header = this.inner.append('div').attr('class','modal-header');
        this.content = this.inner.append('div').attr('class','modal-content');
        this.footer = this.inner.append('div').attr('class','modal-footer');

        this.button = new Button(this.footer, {
            text:this.state.buttonText,
            onClick:this.close.bind(this)
        });
        this.update();
    }

    update(){
        this.container.classed('open',this.state.open);
        this.container.classed('fullscreen',this.state.fullscreen);
        this.header.text(this.state.title);
        if(typeof this.state.content === 'function') {
            this.state.content(this.content);
        } else {
            this.content.html(this.state.content);
        }
        this.button.update(this.state.buttonText);
    }

    open(fullscreen = false){
        this.state.fullscreen = fullscreen;
        this.state.open = true;
        this.update();
    }

    close(){
        this.state.open = false;
        this.update();
    }

}

module.exports = SmartBuildingModal;
