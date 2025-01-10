import { Component } from '@angular/core';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrl: './sample.component.css'
})
export class SampleComponent {
  ngOnInit() {
    const element: any = document.querySelector('#navbar-landing');
    element.apps = [
      {
        description: 'The One Trimble Design System',
        logoUrl: 'https://modus.trimble.com/favicon.svg',
        name: 'Trimble Modus',
        url: 'https://modus.trimble.com/',
      },
    ];
    element.logoOptions = {
      primary: {
        url: 'https://modus.trimble.com/img/trimble-logo.svg',
        height: 24,
      },
      secondary: {
        url: 'https://modus.trimble.com/favicon.svg',
        height: 24,
      },
    };
    element.profileMenuOptions = {
      avatarUrl: 'https://avatar.example.com/broken-image-link.png',
      email: 'modus_user@trimble.com',
      initials: 'MU',
      signOutText: 'Sign out',
      username: 'Modus User',
    };
  }
}
