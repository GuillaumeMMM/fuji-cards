import { Injectable } from '@angular/core';

@Injectable()
export class DataService {

  fakeExercises = [];

  constructor() {

    this.fakeExercises = [{
      name: 'Drawing',
      id: '1',
      comment: 'Try to draw correctly a set of japanese characters. For each character, you will have to get right the lines order and direction. Help can be enabled in the settings.',
      imgUrl: 'assets/cali.jpg',
      data: [
        {
          character: 'あ',
          uttering: 'A',
          tags: ['character', 'hiragana', 'gojuon'],
          phonetic: '[a]',
          comment: '',
          numberOfLines: 3,
          lines: [
            {pos: 0, direction: 'left to right'},
            {pos: 0, direction: 'top to bottom'},
            {pos: 0, direction: 'top to bottom'},
          ],
        },
        {
          character: 'か',
          uttering: 'KA',
          tags: ['character', 'hiragana', 'gojuon'],
          phonetic: '[ka]',
          comment: '',
          numberOfLines: 3,
          lines: [
            {pos: 0, direction: 'top to bottom'},
            {pos: 0, direction: 'top to bottom'},
            {pos: 0, direction: 'top to bottom'},
          ],
        }
      ],
    },
    // {
    //   name: 'Japanese to English',
    //   id: '1',
    //   comment: 'Try to guess signification of japanese characters in English. Help can be enables in the exercise settings.',
    //   imgUrl: 'assets/japanese-to-english.jpg',
    //   data: [],
    // },
    // {
    //   name: 'English to Japanese',
    //   id: '1',
    //   comment: 'Try to guess signification of english characters in Japanese. Help can be enables in the exercise settings.',
    //   imgUrl: 'assets/classroom.jpg',
    //   data: [],
    // }
  ];
  }

  getExercises = function() {
    return this.fakeExercises;
  };

}
