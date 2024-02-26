import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NxWelcomeComponent } from './nx-welcome.component';

@Component({
  standalone: true,
  imports: [CommonModule, NxWelcomeComponent],
  selector: 'mftest-ng-remote1-entry',
  template: `<mftest-nx-welcome></mftest-nx-welcome>`,
})
export class RemoteEntryComponent {}
