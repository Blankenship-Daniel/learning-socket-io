import { Injectable } from '@angular/core';

@Injectable()
export class AlbumService {
  private colorNames : string[] = [
    'red',
    'pink',
    'purple',
    'deep-purple',
    'indigo',
    'blue',
    'light-blue',
    'cyan',
    'teal',
    'green',
    'light-green',
    'lime',
    'yellow',
    'amber',
    'orange',
    'deep-orange',
    'brown',
    'grey',
    'blue-grey'
  ];

  private colorVariants : string[] = [
    '50',
    '100',
    '200',
    '300',
    '400',
    '500',
    '600',
    '700',
    '800',
    '900',
    'a100',
    'a200',
    'a400',
    'a700'
  ];

  private shapes : string[] = [
    'square',
    'diamond',
    'parallelogram-right',
    'parallelogram-left'
  ];

  private shapeVariants: string[] = [
    '',
    'round',
    'rounder',
    'roundest'
  ];

  constructor() { }

  private getRandomElement(arr : string[]) : string {
    return arr[ Math.floor( Math.random() * arr.length ) ];
  }

  getRandomColor() : string {
    return this.getRandomElement(this.colorNames);
  }

  getRandomColorVariant() : string {
    return this.getRandomElement(this.colorVariants);
  }

  getRandomShape() : string {
    return this.getRandomElement(this.shapes);
  }

  getRandomShapeVariants() : string {
    return this.getRandomElement(this.shapeVariants);
  }
}
