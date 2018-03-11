import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-github-followers',
  templateUrl: './github-followers.component.html',
  styleUrls: ['./github-followers.component.css']
})
export class GithubFollowersComponent implements OnInit {

  constructor(private route: ActivatedRoute) {

  }

  ngOnInit() {
    // let id = this.route.snapshot.paramMap.get('id');

    // this.route.queryParamMap.subscribe();
    const page = this.route.snapshot.queryParamMap.get('page');
    console.log('page number = ', page);
  }

}
