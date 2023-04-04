import { LightningElement } from 'lwc';
import ONE_PIECE from '@salesforce/resourceUrl/onepiece'
export default class CarousalWrapper extends LightningElement {
    slides=[
        {
        image:`${ONE_PIECE}/photo1.jpg`,
        heading:'Caption one',
        description:'Description 1Description 1Description 1'
    },
    {
        image:`${ONE_PIECE}/photo2.jpg`,
        heading:'Caption one',
        description:'Description 1Description 1Description 1'
    },
    {
        image:`${ONE_PIECE}/photo3.jpg`,
        heading:'Caption one',
        description:'Description 1Description 1Description 1'
    },
    {
        image:`${ONE_PIECE}/photo4.jpg`,
        heading:'Caption one',
        description:'Description 1Description 1Description 1'
    },
    {
        image:`${ONE_PIECE}/photo5.jpg`,
        heading:'Caption one',
        description:'Description 1Description 1Description 1'
    }
]
}