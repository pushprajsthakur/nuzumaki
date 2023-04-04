import { api, LightningElement, track } from 'lwc';
import FULLCALENDAR from '@salesforce/resourceUrl/FullCalendarJS';
import { loadScript, loadStyle } from 'lightning/platformResourceLoader';
import { NavigationMixin } from 'lightning/navigation';
import getAllEvents from '@salesforce/apex/FullCalendar.getAllEvents';

export default class EventCalender extends NavigationMixin(LightningElement){

    calendarinit = false
    @track allEvents = []
    @track selectedEvent = undefined
    @api height


    renderedCallback(){
        if(this.calendarinit){
            return;
        }
        this.calendarinit = true
        Promise.all([
            loadScript(this, FULLCALENDAR + '/jquery.min.js'),
            loadScript(this, FULLCALENDAR + '/moment.min.js'),
            loadScript(this, FULLCALENDAR + '/theme.js'),
            loadScript(this, FULLCALENDAR + '/fullcalendar.min.js'),
            loadStyle(this, FULLCALENDAR + '/fullcalendar.min.css'),
        ])
        .then(()=>{
            console.log("lib loaded");
            this.fetchAllEvents()
        })
        .catch(error=>{
            console.error({
                message: 'Error occured on FullCalendarJS',
                error
              });
        })

    }

    initFullCalendar(){
        const ele = this.template.querySelector('div.fullcalendarjs')
        $(ele).fullCalendar({
            header: {
                left: 'prev,next today',
                center: 'title',
                right: 'month,basicWeek,basicDay,listWeek'
            },
            themeSystem : 'standard',
            defaultDate: new Date(), 
            navLinks: true,
            editable: true,
            eventLimit: true,
            events: this.allEvents,
            dragScroll : true,
            droppable: true,
            weekNumbers : true,
            eventDrop: function(event, delta, revertFunc) {
                alert(event.title + " was dropped on " + event.start.format());
                if (!confirm("Are you sure about this change? ")) {
                  revertFunc();
                }
              },
              eventClick: function(event, jsEvent, view) {
                alert('Event Clicked '+event.title)
                this.selectedEvent =  event;
              },
              dayClick :function(date, jsEvent, view) {
                jsEvent.preventDefault();
                
              },
              eventMouseover : function(event, jsEvent, view) {
                console.log(jsEvent);
            }

        });
    }
    fetchAllEvents(){
        getAllEvents()
        .then(result=>{
            console.log(result);
            this.allEvents = result.map(item => {
                return {
                    id : item.Id,
                    editable : true,
                    title : item.Subject,
                    start : item.ActivityDate,
                    end : item.EndDateTime,
                    description : item.Description,
                    allDay : item.IsAllDayEvent,
                    extendedProps : {
                        whoId : item.WhoId,
                        whatId : item.WhatId
                      },
                      backgroundColor: "rgb(" + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + ")",
            borderColor: "rgb(" + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + ")"
                }
            });

            //init calendar
            this.initFullCalendar()
        })
        .finally(()=>{
            //this.initialiseFullCalendarJs();
            // console.log('Experiment completed');
          })

    }

    closeModal(){
        this.selectedEvent = undefined;
      }
}