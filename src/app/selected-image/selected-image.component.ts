import { Component, OnInit, OnDestroy } from '@angular/core';
import { ImageServiceService } from '../services/image-service.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-selected-image',
  templateUrl: './selected-image.component.html',
  styleUrls: ['./selected-image.component.scss']
})
export class SelectedImageComponent implements OnInit, OnDestroy {
  selectedImage: string;
  subscription: Subscription;

  constructor(private imageService: ImageServiceService) { }

  ngOnInit () {
    this.imageService.getSelectedImage().subscribe(res => this.selectedImage = res.image));
  }

  ngOnDestroy() {
    // no memory leaks
    this.subscription.unsubscribe();
  }
}
