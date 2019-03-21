import { Component } from '@angular/core';
import { IonicPage, ToastController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { PhotoViewer } from '@ionic-native/photo-viewer/ngx';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  image: string = null;

  constructor(
    private camera: Camera,
    private toastCtrl: ToastController,
    private photoViewer: PhotoViewer
  ) {}

  
  abrirImagenUno(){
    try{
      this.photoViewer.show('http://apps.asambleas.cl/novedades/meme5.jpg', 'Imagen 1', {share: false});
    }
    catch(error){
      this.toastCtrl.create(
        {
          message: error,
          position: "bottom",
          duration: 5000
        }
      ).present();
    }
  }

  abrirImagenDos(){
    try{
      this.photoViewer.show('http://apps.asambleas.cl/novedades/personas.jpg', 'Imagen 2', {share: false});
    }
    catch(error){
      this.toastCtrl.create(
        {
          message: error,
          position: "bottom",
          duration: 5000
        }
      ).present();
    }
  }

  initializePreview(){
    this.toastCtrl.create(
      {
        message: 'Iniciando camara',
        position: "bottom",
        duration: 3000
      }
    ).present();
    let options: CameraOptions = {
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      targetWidth: 1000,
      targetHeight: 1000,
      quality: 100
    }
    this.camera.getPicture( options )
    .then(imageData => {
      this.image = `data:image/jpeg;base64,${imageData}`;
    })
    .catch(error =>{
      this.toastCtrl.create(
        {
          message: error,
          position: "bottom",
          duration: 5000
        }
      ).present();
    });
  }


}
