import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  title = 'practice-re';

  private subject = new Subject();

  public next() {
    this.subject.next('test');
  }

  public ngOnInit(): void {
    this.subject.subscribe((test)=> {
      console.log(test);
      
    })
  }
}

