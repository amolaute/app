import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-rudra',
  templateUrl: './rudra.component.html',
  styleUrl: './rudra.component.css'
})
export class RudraComponent {
  currentFragment: string = '';

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    // Subscribe to fragment changes
    this.router.events.subscribe(() => {
      this.route.fragment.subscribe(fragment => {
        this.currentFragment = fragment || ''; // Set current fragment
      });
    });
  }
}

