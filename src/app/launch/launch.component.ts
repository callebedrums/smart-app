import { Component, OnInit } from '@angular/core';
import * as FHIR from 'fhirclient';

@Component({
  selector: 'app-launch',
  templateUrl: './launch.component.html',
  styleUrls: ['./launch.component.scss']
})
export class LaunchComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    FHIR.oauth2.authorize({
      clientId: 'client-id-001',
      scope: 'launch openid fhirUser patient/*.read',
      redirectUri: '/'
    });
  }

}
