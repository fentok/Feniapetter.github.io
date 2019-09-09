//import Fenia from './fenia';
import Counter from './counter';

const counter = new Counter($('#countNum'));
counter.addEventListener(updateMeter);
counter.addEventListener(updateResetButton);
var fenia = document.getElementById("feniabody");

// フェニアをクリック
function feniaclick(){
  counter.add();
  counter.update();
  alert("クリックしました!");
}

fenia.onclick = feniaclick();
