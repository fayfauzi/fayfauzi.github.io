import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  selectedSection: string = 'aboutMe'; // Initially show the 'About Me' section

  // Function to update the selected section based on the click
  selectSection(section: string) {
    this.selectedSection = section;
  }
}
