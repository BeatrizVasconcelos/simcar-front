import { Directive, Input, ElementRef, Renderer2, HostListener } from '@angular/core';
import { Sort } from '../util/sort';

@Directive({
  selector: '[appSort]'
})
export class SortDirective {

  @Input() appSort: Array<any>;
  constructor(private renderer: Renderer2, private targetEleme: ElementRef) { }

  @HostListener("click")
  sortData() {
    // Cria um objeto da classe Sort
    const sort = new Sort();
    // Pega a referência do elemento que foi clicado
    const elem = this.targetEleme.nativeElement;
    // Verifica em qual ordem a lista deve ser ordenada -> por padrão é setada como decrescente no atributo do elemento
    const order = elem.getAttribute("data-order");
    // Verifica o tipo do elemento e seta [data-type=date] se for um campo de data
    const type = elem.getAttribute("data-type");
    // Verifica o nome da propriedade
    const property = elem.getAttribute("data-name");
    if(order === "desc") {
      this.appSort.sort(sort.startSort(property, order, type));
      elem.setAttribute("data-order", "asc");
    } else {
      this.appSort.sort(sort.startSort(property, order, type));
      elem.setAttribute("data-order", "desc")
    }
  }
}
