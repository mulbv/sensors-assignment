/**
 * Base class for the SmartBuilding module
 * This module is written in commonJS
 *
 * @param container     containing element where the map will be rendered
 *
 * @author          Mike de Bruijn
 */
const SmartBuildingMap = require('./map.js');
const SmartBuildingAnnotations = require('./annotations.js');
const SmartBuildingMinimap = require('./minimap.js');
const SmartBuildingModal = require('./modal.js');
const SmartBuildingHub = require('./hub.js');
const config = require('./config.js');
const data = require('./data.json');
class SmartBuilding {
    constructor(container, options){
        // d3.js must be loaded
        if (typeof d3 == 'undefined') {
            throw new Error('d3.js not found, this module requires d3 js to be fully loaded');
        }
        this.container = d3.select(container);
        this.config = config;
        this.data = data;
        this.Hub = new SmartBuildingHub(this);
        this.Map = new SmartBuildingMap(this);
        this.Annotations = new SmartBuildingAnnotations(this);
        this.Minimap = new SmartBuildingMinimap(this);
        this.Modal = new SmartBuildingModal(this);
    }
};
window.SmartBuilding = SmartBuilding
