import { Component, OnInit } from '@angular/core';
import * as FHIR from 'fhirclient';

@Component({
  selector: 'app-smart',
  templateUrl: './smart.component.html',
  styleUrls: ['./smart.component.scss']
})
export class SmartComponent implements OnInit {

  patient: string;
  medications: string;

  constructor() { }

  ngOnInit() {

    FHIR.oauth2.ready().then(client => {

      client.patient.read().then(patient => {
        this.patient = JSON.stringify(patient, null, 4);
      })
        .catch(err => {
          this.patient = err.stack;
        });

      client.request(`/MedicationRequest?patient=${client.patient.id}`, {
        resolveReferences: ['medicationReference'],
        graph: true
      })
        .then(data => {
          if (!data.entry || !data.entry.length) {
            throw new Error('No medications found for the selected patient');
          }
          return data.entry;
        })
        .then(medications => {
          this.medications = JSON.stringify(medications, null, 4);
        })
        .catch(err => {
          this.medications = err.stack;
        });
    });
  }

}
