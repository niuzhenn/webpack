import _ from 'lodash';
import demoIcon from './images/demo.svg';

class App {
  showName = () => {
    _.map([6,7,8,9,0], (item) => {
      console.log(item);
    });
    console.error('aaaaaaa');
  }
  append = () => {
    let rootDom = document.getElementById('root');
    let a = new Image();
    a.src = demoIcon;
    rootDom.appendChild(a);
  }
}

let a = new App();
a.showName();
a.append();