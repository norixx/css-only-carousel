
document.addEventListener('DOMContentLoaded', () => {
    const carousel = document.querySelector('.carousel');
    const carouselItems = carousel.querySelectorAll('.card');
    const testBtn = document.querySelector('.test-btn');
    testBtn.addEventListener('click', () => {
        console.log('test btn')

        // bodyの位置は動かさない処理
        const originalScrollTop = document.body.scrollTop || document.documentElement.scrollTop;
        setTimeout(() => {
            // スクロール後にbodyの位置を復元
            document.body.scrollTop = originalScrollTop;
            document.documentElement.scrollTop = originalScrollTop;
        }, 0);

        
        carouselItems[4].scrollIntoView({
            block: 'nearest',
            inline: 'center'
        })
    })
    /*
  const itemCount = carouselItems.length; // アイテムの総数
  let currentIndex = 0; // 現在表示中のアイテムのインデックス

  // 自動スクロールを実行する関数
  function autoScroll() {
    // 次のアイテムのインデックスを計算
    currentIndex = (currentIndex + 1) % itemCount; // 最後まで行ったら最初に戻る

    // 次のアイテムまでスクロール
    // scrollIntoView() メソッドが最も簡単で、scroll-snap-align と相性が良いです。
    carouselItems[currentIndex].scrollIntoView({
      behavior: 'smooth', // なめらかにスクロールする
      inline: 'start'     // アイテムの開始位置（左端）にスクロールする
    });
  }

  // 指定した間隔（例: 3秒 = 3000ミリ秒）で autoScroll 関数を繰り返し実行
  // clearInterval() を使って止められるように、intervalId を変数に格納
  let intervalId = setInterval(autoScroll, 3000); // ここで時間を調整 (ミリ秒単位)

  // オプション：ユーザーが手動でスクロールした時に自動スクロールを一時停止/再開する
  // ユーザー体験を向上させます。
  carouselContainer.addEventListener('mouseenter', () => {
    clearInterval(intervalId); // マウスが乗ったら自動スクロールを停止
  });

  carouselContainer.addEventListener('mouseleave', () => {
    intervalId = setInterval(autoScroll, 3000); // マウスが離れたら再開
  });

  // オプション：ユーザーが手動でスクロールした時も一時停止/再開
  // scroll イベントは頻繁に発生するため、スロットリング/デバウンスを考慮するとより良いですが、
  // 簡単な例としてここでは直接記述します。
  let userScrollTimeout;
  carouselContainer.addEventListener('scroll', () => {
    clearInterval(intervalId); // ユーザーがスクロールしたら自動スクロールを停止
    clearTimeout(userScrollTimeout); // 以前のタイマーをクリア

    // スクロール停止後、一定時間経過したら自動スクロールを再開
    userScrollTimeout = setTimeout(() => {
      // 現在のスクロール位置から、最も近いアイテムのインデックスを特定
      // （ここでは単純化のため、アイテムの幅とスクロール位置から概算）
      const scrollLeft = carouselContainer.scrollLeft;
      const itemWidth = carouselContainer.clientWidth; // コンテナの表示幅
      currentIndex = Math.round(scrollLeft / itemWidth);

      intervalId = setInterval(autoScroll, 3000); // 自動スクロールを再開
    }, 5000); // ユーザーがスクロールを止めてから5秒後に再開
  });
  */
});