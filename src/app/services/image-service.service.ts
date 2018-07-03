import { Injectable } from '@angular/core';
import { Images } from '../shared/mock-images';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ImageServiceService {

  private subject = new Subject<any>();
image: string;
  constructor() { }
    getImages () {
      return Images;
    }

    getSelectedImage (): Observable<any> {
      return this.subject.asObservable();
      // return this.image;
    }

    setSelectedImage (img) {
      this.image = img;
      this.subject.next({ image: img });
    }
}
