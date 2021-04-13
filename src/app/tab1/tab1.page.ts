import { Component } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { NavController } from '@ionic/angular';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  isiData: Observable<data[]>;
  isiDataColl: AngularFirestoreCollection<data>;
  Judul: string;
  Note: string;
  Tanggal: string;
  
  constructor(afs : AngularFirestore) {
    this.isiDataColl=afs.collection('datacoba');
    this.isiData= this.isiDataColl.valueChanges();
  }

  addNote(){
    this.isiDataColl.doc(this.Judul).set({
      judul:this.Judul,
      tanggal:this.Tanggal,
      note: this.Note

    });
  }
}
interface data{
  judul: string,
  tanggal:string,
  note: string
}

