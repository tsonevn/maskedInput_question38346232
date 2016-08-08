import { EventData, Observable } from "data/observable";
import { Page } from "ui/page";
import { HelloWorldModel } from "./main-view-model";

// Event handler for Page "navigatingTo" event attached in main-page.xml
var newObservable:Observable;
export function navigatingTo(args: EventData) {
    // Get the event sender
    var page = <Page>args.object;
    newObservable = new Observable();
    newObservable.set("maskectext", '')
    page.bindingContext =newObservable;
}


export function onTap(args:EventData){
    alert(newObservable.get("maskectext"));
}