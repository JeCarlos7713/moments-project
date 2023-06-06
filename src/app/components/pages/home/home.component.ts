import { Component, OnInit } from '@angular/core';
import { Moment } from 'src/app/Moment';
import { environment } from 'src/environments/environment';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { MomentService } from 'src/app/services/moment.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent {
  allMoments: Moment[] = []
  moments: Moment[] = []
  baseApiUrl = environment.baseApiUrl
  faSearch = faSearch
  searchTerm: string = ''
  //to do search

  constructor(private momentService: MomentService){}

  ngOnInit(): void{
    this.momentService.getMoments().subscribe(items =>{
      const data = items.data

      data.map(item =>{
        item.created_at = new Date(item.created_at!).toLocaleDateString('pt-br')
      })

      this.allMoments = data
      this.moments = data
    })
  }

  search(event: Event): void{ //evento do input
    const target = event.target as HTMLInputElement //diz que é o input html
    const value = target.value //pegando valor do input

    this.moments = this.allMoments.filter(moment => moment.title.toLowerCase().includes(value))
  }
}
