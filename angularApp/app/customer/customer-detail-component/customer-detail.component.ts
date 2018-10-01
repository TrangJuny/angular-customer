// import {  ngf } from "angular-file"
import { Component } from "@angular/core"
import { HttpClient, HttpRequest, HttpResponse  } from '@angular/common/http'
import { Subscription } from 'rxjs'

@Component({
    selector: 'app-customer-detail-component',
    templateUrl: './customer-detail.component.html'
})



export class CustomerDetailComponent {
  // ngf:ngf;
 
  accept = '*'
  files:File[] = []
  progress:number
  url = 'https://evening-anchorage-3159.herokuapp.com/api/'
  hasBaseDropZoneOver:boolean = false
  httpEmitter:Subscription
  httpEvent:any
  lastFileAt:Date

  sendableFormData:FormData//populated via ngfFormData directive

  constructor(public HttpClient:HttpClient){}

  cancel(){
    this.progress = 0
    if( this.httpEmitter ){
      console.log('cancelled')
      this.httpEmitter.unsubscribe()
    }
  }

  uploadFiles(files:File[]):Subscription{
    files
    const req = new HttpRequest<FormData>('POST', this.url, this.sendableFormData, {
      reportProgress: true//, responseType: 'text'
    })
    
    return this.httpEmitter = this.HttpClient.request(req)
    .subscribe(
      event=>{
        this.httpEvent = event
        
        if (event instanceof HttpResponse) {
          delete this.httpEmitter
          console.log('request done', event)
        }
      },
      error=>console.log('Error Uploading',error)
    )
  }

  getDate(){
    return new Date()
  }
}
