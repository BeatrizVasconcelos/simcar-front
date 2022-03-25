import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Requerimento } from 'src/app/models/requerimento';
import { RequerimentoService } from 'src/app/services/requerimento.service';

@Component({
  selector: 'app-create-requerimento',
  templateUrl: './create-requerimento.component.html',
  styleUrls: ['./create-requerimento.component.css']
})
export class CreateRequerimentoComponent implements OnInit {
  requerimentoId: number;
  requerimento: Requerimento;

  constructor(private router: Router,
    private route: ActivatedRoute,
    private service: RequerimentoService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => this.requerimentoId = parseInt(params.get('requerimentoId')));
    this.requerimentoId != 0 ? this.getRequerimento(this.requerimentoId) : null;
  }

  getRequerimento(id: number) {
    this.service.findById(id).subscribe(requerimento => {
      this.requerimento = requerimento;
    })
  }

  voltar() {
    this.router.navigate(['../'], {relativeTo: this.route});
  }

}
