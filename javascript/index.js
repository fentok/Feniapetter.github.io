//import Fenia from './fenia';
import Counter from './counter';

const counter = new Counter($('#countNum'));
counter.addEventListener(updateMeter);
counter.addEventListener(updateResetButton);
var fenia = document.getElementById("feniabody");

// �t�F�j�A���N���b�N
function feniaclick(){
  counter.add();
  counter.update();
  alert("�N���b�N���܂���!");
}

fenia.onclick = feniaclick();
