import { Component, OnInit } from '@angular/core';
import {JwtTokenService} from '../../services/jwt-token.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  constructor(public jwtTokenService: JwtTokenService) { }

  ngOnInit(): void {

  }
}
