import { Component, input } from '@angular/core';
// buena practica poner un type porque lo hace mas rapido
import type{ Character } from '../../../interfaces/character.interface';

@Component({
  selector: 'dragonball-character-list',
  templateUrl: './character-list.component.html',
})
export class CharacterListComponent {
characters= input.required<Character[]>()
listName= input.required<string>()


}
