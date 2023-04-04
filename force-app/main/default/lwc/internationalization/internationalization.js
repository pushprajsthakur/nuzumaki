import { LightningElement } from 'lwc';
import LOCALE from '@salesforce/i18n/locale'
import CURRENCY from '@salesforce/i18n/currency'
import DIR from '@salesforce/i18n/currency'

export default class Internationalization extends LightningElement {
   
   dir = 'rtl'//DIR
   number = 65565418.86
    formattedNumber = new Intl.NumberFormat('ar-EG',{
        style:'currency',
        currency:'USD',
        currencyDisplay:'symbol',

    }).format(this.number)
}