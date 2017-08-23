import { Component, OnInit } from '@angular/core';
import {InfoService} from "../../services/info.service";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styles: []
})
export class AboutComponent implements OnInit {

  constructor(public  _is:InfoService) { }

  ngOnInit() {
  }

}
