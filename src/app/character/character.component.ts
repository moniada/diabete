import { Component, Input } from '@angular/core';
import { Character } from '../models/character';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrl: './character.component.css'
})
export class CharacterComponent {
  @Input() character: Character | null = null;


}
