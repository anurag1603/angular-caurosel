import { Component, OnInit, Input } from '@angular/core';
import { ImageServiceService } from '../services/image-service.service';
import { Image } from '../shared/image';
import { SelectedImageComponent } from '../selected-image/selected-image.component';

@Component({
  selector: 'app-main-image',
  templateUrl: './main-image.component.html',
  styleUrls: ['./main-image.component.scss']
})
export class MainImageComponent implements OnInit {
  images: Image[];
  prev: number;
  next: number;
  constructor(private imageService: ImageServiceService ) { }

  ngOnInit() {
    this.images = this.imageService.getImages();
    console.log(this.images);
    this.imageService.setSelectedImage(this.images[0].url);
  }

  setImage(image) {
    console.log(image);
    this.imageService.setSelectedImage(image.url);
  }

}
