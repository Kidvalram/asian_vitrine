import { Component, EventEmitter, OnInit, ViewChild, ElementRef } from '@angular/core';
import { humanizeBytes, UploadFile, UploadInput, UploadOutput } from 'ng-uikit-pro-standard';
import * as AOS from 'aos';
import { Router, Event as RouterEvent, NavigationStart, NavigationEnd, NavigationCancel, NavigationError } from '@angular/router';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  public showOverlay = true;

  formData!: FormData;
  files!: UploadFile[];
  uploadInput: EventEmitter<UploadInput>;
  humanizeBytes!: Function;
  dragOver!: boolean;

  @ViewChild('toTop')
  toTop!: ElementRef;
  
  constructor(private router: Router, private spinner: NgxSpinnerService) {
    this.files = [];
    this.uploadInput = new EventEmitter<UploadInput>();
    this.humanizeBytes = humanizeBytes;

    router.events.subscribe((event: RouterEvent) => {
      this.navigationInterceptor(event)
    })
  }

  ngOnInit(): void {
    this.spinner.show();
    AOS.init({
      mirror: true,
      duration: 2500, // values from 0 to 3000, with step 50ms
    }); 
  }

  onTop(): void {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });  
  }

  showFiles() {
    let files = '';
    for (let i = 0; i < this.files.length; i ++) {
      files += this.files[i].name;
       if (!(this.files.length - 1 === i)) {
         files += ',';
      }
    }
    return files;
  }

  startUpload(): void {
      const event: UploadInput = {
      type: 'uploadAll',
      url: 'your-path-to-backend-endpoint',
      method: 'POST',
      data: { foo: 'bar' },
      };
      this.files = [];
      this.uploadInput.emit(event);
  }

  cancelUpload(id: string): void {
      this.uploadInput.emit({ type: 'cancel', id: id });
  }

  onUploadOutput(output: UploadOutput | any): void {

      if (output.type === 'allAddedToQueue') {
      } else if (output.type === 'addedToQueue') {
        this.files.push(output.file); // add file to array when added
      } else if (output.type === 'uploading') {
        // update current data in files array for uploading file
        const index = this.files.findIndex(file => file.id === output.file.id);
        this.files[index] = output.file;
      } else if (output.type === 'removed') {
        // remove file from array when removed
        this.files = this.files.filter((file: UploadFile) => file !== output.file);
      } else if (output.type === 'dragOver') {
        this.dragOver = true;
      } else if (output.type === 'dragOut') {
      } else if (output.type === 'drop') {
        this.dragOver = false;
      }
      this.showFiles();
  }

  // Shows and hides the loading spinner during RouterEvent changes
  navigationInterceptor(event: RouterEvent): void {
    if (event instanceof NavigationStart) {
      this.showOverlay = true;
      this.disableScrolling();
    }
    if (event instanceof NavigationEnd) {
      this.showOverlay = false;
      this.enableScrolling();
    }

    // Set loading state to false in both of the below events to hide the spinner in case a request fails
    if (event instanceof NavigationCancel) {
      this.showOverlay = false;
      this.enableScrolling();

    }
    if (event instanceof NavigationError) {
      this.showOverlay = false;
      this.enableScrolling();
    }
  }

  disableScrolling(){
    var x=window.scrollX;
    var y=window.scrollY;
    window.onscroll=function(){window.scrollTo(x, y);};
  }

  enableScrolling(){
    window.onscroll=function(){};
  }


}
