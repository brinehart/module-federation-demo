import { Component, HostBinding, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MenuItem } from './header.types';

@Component({
  selector: 'ff-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @HostBinding('class') className = '';
  siteTitle = 'Final Fantasy Bonanza';

  toggleControl = new FormControl(false);

  navigation: MenuItem[] = [
    {
      label: 'Final Fantasy VII',
      link: 'vii'
    },
    {
      label: 'Final Fantasy VIII',
      link: 'viii'
    },
  ]

  constructor() { }

  ngOnInit(): void {
    this.toggleControl.valueChanges.subscribe((darkMode) => {
      const darkClassName = 'darkMode';
      this.className = darkMode ? darkClassName : '';
    });
  }

}
