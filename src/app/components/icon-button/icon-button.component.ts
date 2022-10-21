import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';
import { faEdit } from '@fortawesome/free-regular-svg-icons';
import { faTimes, faPencil, faFloppyDisk} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-icon-button',
  templateUrl: './icon-button.component.html',
  styleUrls: ['./icon-button.component.css']
})
export class IconButtonComponent implements OnInit {
  @Input() icon!:string;
  @Input() color!:string;
  @Output() iconClick = new EventEmitter()
  fontEdit = faPencil;
  fontSave = faEdit;


  constructor() { }

  ngOnInit(): void {
  }

  onClick(): void {
    this.iconClick.emit()
  }

}
