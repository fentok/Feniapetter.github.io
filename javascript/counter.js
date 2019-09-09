export default class Counter {
  constructor() {
    this.count = 0;
    this.actionListeners = [];
    this.$countNum = $('#count-num');
  }

  // �J�E���^�[�𑝂₷
  add(value = 1) {
    this.count += value;
    this.updateCount();
  }

  reset() {
    this.count = 0;
    this.updateCount();
  }
  
  showCount() {
    document.getElementById("clicknum").innerHTML = this.count;
  }

  // �A�N�V�����𑗐M����
  updateCount() {
    this.$countNum.text(this.count);
    this.actionListeners.map(callback => callback(this.count));
  }

  // �J�E���g�A�b�v���̃C�x���g���X�i�[��o�^����
  // �R�[���o�b�N�̑�������count������
  addEventListener(callback) {
    this.actionListeners.push(callback);
  }
}