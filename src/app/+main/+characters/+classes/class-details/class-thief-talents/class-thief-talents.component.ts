import { Component, OnInit, Input } from '@angular/core';

import { CharacterClass } from '../../../../../shared/entities/character-class';

@Component({
  selector: 'class-thief-talents',
  templateUrl: './class-thief-talents.component.html',
  styleUrls: ['./class-thief-talents.component.scss']
})
export class ClassThiefTalentsComponent implements OnInit {

  // Public variables
  // ---------------------------------------------------------------------------
  @Input() characterClass: CharacterClass;
  categories: any[];

  //
  // Functions
  // ===========================================================================

  constructor() { }

  //
  // Lifecycle hooks functions
  // ---------------------------------------------------------------------------

  ngOnInit() {
    this.categories = [
      {label: "Arrombamento", description: "jogada de INT. Tempo necessário: 10 minutos. Os demais requisitos da jogada se aplicam normalmente."},
      {label: "Armadilhas", description: "jogada de INT. Mesmo sendo bem sucedido, o personagem tem 50% de chance de estar equivocado."},
      {label: "Escalar", description: "jogada de FOR. Cada jogada compreende que o personagem escalou 2 metros. Em caso de falha, o personagem cairá, tomando 1d6 pontos de dano para cada 3 metros, mesmo que seja na primeira jogada."},
      {label: "Furtividade", description: "jogada de DES. O personagem se move a 1/4 da velocidade normal. Não dá direito ao ataque furtivo."},
      {label: "Punga", description: "jogada de DES. Em caso de falha, o personagem não só é visto por todos ao seu redor, mas também pela vítima."},
      {label: "Percepção", description: "jogada de SAB. Mesmo sendo bem sucedido, o personagem tem 50% de chance de estar equivocado."},
      {label: "Ataque furtivo", description: "esta é uma habilidade exclusiva de ladrão."}
    ]
  }

  emptyCollection(collection: any[]): boolean {
    if (collection && collection.length) return false;
    return true;
  }

}
