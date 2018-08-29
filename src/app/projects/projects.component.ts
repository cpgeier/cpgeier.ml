import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointState, BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'SantosNet',
            subtitle: 'A simple self driving car',
            cols: 1,
            rows: 1,
            image: '../../assets/images/sample.gif',
            url: 'https://github.com/cpgeier/SantosNet' },
          { title: '#MeToo',
            subtitle: 'A visualization of tweets that sparked a movement',
            cols: 1,
            rows: 1,
            image: '../../assets/images/sampleHoya.PNG',
            url: 'https://github.com/cpgeier/HoyaHacks2018' },
          { title: 'Binary Relations',
            subtitle: 'An interactive teaching tool for discrete math',
            cols: 1,
            rows: 1,
            image: '../../assets/images/sampleBinaryRelation.PNG',
            url: 'https://github.com/cpgeier/BinaryRelation' },
          { title: 'Neural Images',
            subtitle: 'Some cool pictures I made using code from A Nerual Implimentation of Artistic Style',
            cols: 1,
            rows: 1,
            image: '../../assets/images/Rotunda + Circuit.jpg',
            url: 'https://github.com/cpgeier/NeuralImages' }
        ];
      }

      return [
        { title: 'SantosNet',
          subtitle: 'A simple self driving car',
          cols: 1,
          rows: 1,
          image: '../../assets/images/sample.gif',
          url: 'https://github.com/cpgeier/SantosNet' },
        { title: '#MeToo',
          subtitle: 'A visualization of tweets that sparked a movement',
          cols: 1,
          rows: 1,
          image: '../../assets/images/sampleHoya.PNG',
          url: 'https://github.com/cpgeier/HoyaHacks2018' },
        { title: 'Binary Relations',
          subtitle: 'An interactive teaching tool for discrete math',
          cols: 1,
          rows: 1,
          image: '../../assets/images/sampleBinaryRelation.PNG',
          url: 'https://github.com/cpgeier/BinaryRelation' },
        { title: 'Neural Images',
          subtitle: 'Some cool pictures I made using code from A Nerual Implimentation of Artistic Style',
          cols: 1,
          rows: 1,
          image: '../../assets/images/Rotunda + Circuit.jpg',
          url: 'https://github.com/cpgeier/NeuralImages' }
      ];
    })
  );

  constructor(private breakpointObserver: BreakpointObserver) {}
}
