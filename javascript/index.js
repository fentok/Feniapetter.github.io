//import Fenia from './fenia';
import Counter from './counter';

const counter = new Counter($('#countNum'));
counter.addEventListener(updateMeter);
counter.addEventListener(updateResetButton);
var fenia = document.getElementById("feniabody");

// �t�F�j�A���N���b�N
function feniaclick() {
  counter.add();
  counter.update();
}

fenia.onclick = feniaclick();


function setTweetButton(text) {
  $('#tweet-area').empty(); //�����̃{�^������
  // html�ŃX�N���v�g��ǂ�ł邩��twtt���G���[�Ȃ��Ăׂ�
  // �I�v�V�����͌������ŁB
  twttr.widgets.createShareButton(
    "",
    document.getElementById("tweet-area"),
    {
      size: "large", //�{�^���͂ł���
      text: text, // �_�����e�L�X�g
      hashtags: "�n�b�V���^�O", // �n�b�V���^�O
      url: "//url" // URL
    }
  );
}