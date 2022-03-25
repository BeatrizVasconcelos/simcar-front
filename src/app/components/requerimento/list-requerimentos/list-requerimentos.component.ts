import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Requerimento } from 'src/app/models/requerimento';
import { RequerimentoService } from 'src/app/services/requerimento.service';

@Component({
  selector: 'app-list-requerimentos',
  templateUrl: './list-requerimentos.component.html',
  styleUrls: ['./list-requerimentos.component.css']
})
export class ListRequerimentosComponent implements OnInit {
requerimentos: Requerimento[] =  [];
config: any;
  constructor(private requerimentoService: RequerimentoService, private router: Router, private route: ActivatedRoute) { 
    this.config = {
      itemsPerPage: 12,
      currentPage: 1,
      totalItems: this.requerimentos.length
    };
  }

  ngOnInit() {
    this.getRequerimentos();
  }

  getRequerimentos() {
    this.requerimentoService.findAll().subscribe(requerimento => {
      this.requerimentos = requerimento;
    })
  }

  pageChange(event) {
    this.config.currentPage = event;
  }

  openRequerimento(requerimento: Requerimento) {
    this.router.navigate([requerimento.id], {relativeTo: this.route})
  }

  

}
