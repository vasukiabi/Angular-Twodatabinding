import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: ` 
  Enter the value  : <input [(ngModel)] ='val'> 
  <br> 
   Entered value is:  {{val}} 
<br>
   <input [(ngModel)]="username" >
<br>
<p>Hello {{username}}!</p>
` 

})
export class AppComponent {
  title = 'TwoBinding';
  val: string = 'India'; 
  username:any='muruga';

}
