import { Component, OnInit } from '@angular/core';

import * as Tesseract from '../../../../services/tesseract.js';

@Component({
  selector: 'app-drawing-canvas',
  templateUrl: './drawing-canvas.component.html',
  styleUrls: ['./drawing-canvas.component.css']
})
export class DrawingCanvasComponent implements OnInit {

  drawingFinished = false;

  canvas: any;
  ctx: any;
  flag = false;
  prevX = 0;
  currX = 0;
  prevY = 0;
  currY = 0;
  dot_flag = false;

  x = 'black';
  y = 4;
  w = 0;
  h = 0;

  drawing = false;

  numberOfDrawings = 0;

  drawingValid = true;

  startX = 0;
  startY = 0;
  endX = 0;
  endY = 0;

  oneCharacter = {
    name: 'た',
    traduction: 'TA',
    tags: ['hiragana'],
    numberOfLines: 4,
    lines: [
        {pos: 0, direction: 'left to right'},
        {pos: 1, direction: 'top to bottom'},
        {pos: 2, direction: 'left to right'},
        {pos: 3, direction: 'left to right'},
    ]
  };

  constructor() { }

  ngOnInit() {
    this.init();
  }

  init() {
    //  On page init, define canvas & mouse & touch events
    console.log(document.getElementById('myCanvas'));
    this.canvas = document.getElementById('myCanvas');
    this.ctx = this.canvas.getContext('2d');
    this.w = this.canvas.width;
    this.h = this.canvas.height;

    this.canvas.addEventListener('mousemove', (e) => {
        if (!this.drawingFinished) {
          this.findxy('move', e);
        }
    }, false);

    this.canvas.addEventListener('touchmove', (e) => {
        if (!this.drawingFinished) {
          this.findxy('move', e);
        }
    }, false);

    this.canvas.addEventListener('mousedown', (e) => {
        if (!this.drawingFinished) {
          this.findxy('down', e);
        }
    }, false);

    this.canvas.addEventListener('touchstart', (e) => {
        if (!this.drawingFinished) {
          this.findxy('down', e);
        }
    }, false);

    this.canvas.addEventListener('mouseup', (e) => {
        if (!this.drawingFinished) {
          this.findxy('up', e);
        }
    }, false);

    this.canvas.addEventListener('touchend', (e) => {
        if (!this.drawingFinished) {
          this.findxy('up', e);
        }
    }, false);

    this.canvas.addEventListener('mouseout', (e) => {
        if (!this.drawingFinished) {
          this.findxy('out', e);
        }
    }, false);

    this.canvas.addEventListener('touchcancel', (e) => {
        if (!this.drawingFinished) {
          this.findxy('out', e);
        }
    }, false);
}

  findxy(res, e) {
    if (res === 'down') {
      this.prevX = this.currX;
      this.prevY = this.currY;
      this.currX = e.clientX - this.canvas.offsetLeft || e['targetTouches'][0].clientX - this.canvas.offsetLeft;
      this.currY = e.clientY - this.canvas.offsetTop || e['targetTouches'][0].clientY - this.canvas.offsetTop;

      this.lineStart(this.currX, this.currY);

      this.flag = true;
      this.dot_flag = true;
        if (this.dot_flag) {
          this.ctx.beginPath();
          this.ctx.fillStyle = this.x;
          this.ctx.fillRect(this.currX, this.currY, 4, 4);
          this.ctx.closePath();
          this.dot_flag = false;
        }
    }
    if (res === 'up' || (res === 'out' && this.drawing)) {
        this.lineEnd(this.currX, this.currY);
        this.flag = false;
    }
    if (res === 'move') {
        if (this.flag) {
          this.prevX = this.currX;
          this.prevY = this.currY;
          this.currX = e.clientX - this.canvas.offsetLeft || e['targetTouches'][0].clientX - this.canvas.offsetLeft;
          this.currY = e.clientY - this.canvas.offsetTop || e['targetTouches'][0].clientY - this.canvas.offsetTop;
          this.draw();
        }
    }
}

draw() {
  this.ctx.beginPath();
  this.ctx.moveTo(this.prevX, this.prevY);
  this.ctx.lineTo(this.currX, this.currY);
  this.ctx.strokeStyle = this.x;
  this.ctx.lineWidth = this.y;
  this.ctx.stroke();
  this.ctx.closePath();
}

lineStart(X, Y) {
  this.drawing = true;
  this.startX = X;
  this.startY = Y;
  // console.log('start drawing from ', X, Y);
}

lineEnd(X, Y) {
  this.drawing = false;
  this.endX = X;
  this.endY = Y;
  this.numberOfDrawings ++;

  //  Find which line should have just been drawn
  const currentLine = this.oneCharacter.lines.filter((line) => {
      return (line['pos'] === (this.numberOfDrawings - 1));
  })[0];

  //  Check if the direction is good
  this.checkDirection(currentLine);

  if (this.numberOfDrawings === this.oneCharacter.numberOfLines) {
      console.log('drawing stops there');
      this.drawingFinished = true;
      this.drawingEnd();
  }
}
checkDirection(line) {
  if (line) {
      switch (line['direction']) {
          case 'left to right':
              (this.endX > this.startX) ? console.log('valid line') : (this.drawingValid = false);
              break;
          case 'top to bottom':
              (this.endY > this.startY) ? console.log('valid line') : (this.drawingValid = false);
              break;
      }
  }
}

drawingEnd() {
  this.saveImage().then((result) => {
      console.log(result);
      console.log(result['symbols'][0]['text']);
      console.log(this.oneCharacter['name']);
      console.log(result['symbols'][0]['text'] !== this.oneCharacter['name']);
      if (result['symbols'][0]['text'] !== this.oneCharacter['name']) {
        this.drawingValid = false;
      }
      if (!this.drawingValid) {
        this.drawingEventualyNotValid();
      } else {
        this.drawingEventualyValid();
      }
  });
}

drawingEventualyNotValid() {
  console.log('Drawing Invalid');
}

drawingEventualyValid() {
  console.log('Drawing Valid');
}

saveImage() {

  //  Get the current canvas
  this.canvas = document.getElementById('myCanvas');
  this.ctx = this.canvas.getContext('2d');

  const newTesseract = Tesseract.create({
      workerPath: 'https://cdn.rawgit.com/naptha/tesseract.js/1.0.10/dist/worker.js',
      langPath: 'https://cdn.rawgit.com/naptha/tessdata/gh-pages/3.02/',
      corePath: 'https://cdn.rawgit.com/naptha/tesseract.js-core/0.1.0/index.js',
  });

  //  Set up the recognition with japanese
  return newTesseract.recognize(this.ctx, {lang: 'jpn'}).progress(function (message) {
      // console.log(message);
  });
}

}
