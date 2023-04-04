import { LightningElement } from 'lwc';
import USER_IMAGE from '@salesforce/resourceUrl/userimage';
import USER_SVG_IMAGE from '@salesforce/resourceUrl/svg_file';

export default class StaticImages extends LightningElement {
    userImage = USER_IMAGE;
    userSvgImage = USER_SVG_IMAGE;
}