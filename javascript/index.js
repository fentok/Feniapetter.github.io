//import Fenia from './fenia';
import Counter from './counter';

const counter = new Counter($('#countNum'));
counter.addEventListener(updateMeter);
counter.addEventListener(updateResetButton);
var fenia = document.getElementById("feniabody");

// フェニアをクリック
function feniaclick() {
  counter.add();
  counter.update();
}

fenia.onclick = feniaclick();


function setTweetButton(text) {
  $('#tweet-area').empty(); //既存のボタン消す
  // htmlでスクリプトを読んでるからtwttがエラーなく呼べる
  // オプションは公式よんで。
  twttr.widgets.createShareButton(
    "",
    document.getElementById("tweet-area"),
    {
      size: "large", //ボタンはでかく
      text: text, // 狙ったテキスト
      hashtags: "ハッシュタグ", // ハッシュタグ
      url: "//url" // URL
    }
  );
}