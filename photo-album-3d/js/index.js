window.onload = function () {
  const { RainyDay } = window;
  const $ = window.jQuery;
  const engine = new RainyDay('canvas', 'demo', window.innerWidth, window.innerHeight);
  engine.gravity = engine.GRAVITY_NON_LINEAR;
  engine.trail = engine.TRAIL_DROPS;

  engine.rain([
    engine.preset(0, 2, 500),
  ]);

  engine.rain([
    engine.preset(3, 3, 0.88),
    engine.preset(5, 5, 0.9),
    engine.preset(6, 2, 1),
  ], 100);
  const imgL = $('.pic img').size();
  const deg = 360 / imgL;
  let roY = 0;
  let roX = -10;
  let xN = 0;
  let yN = 0;
  const play = null;

  $('.pic img').each(function (i) {
    $(this).css({ transform: `rotateY(${i * deg}deg) translateZ(300px)` });
    $(this).attr('ondragstart', 'return false');
  });

  $(document).mousedown(function (ev) {
    let x_ = ev.clientX;
    let y_ = ev.clientY;
    clearInterval(play);
    console.log('我按下了');
    $(this).bind('mousemove', (ev) => {
      /* 获取当前鼠标的坐标 */
      const x = ev.clientX;
      const y = ev.clientY;
      /* 两次坐标之间的距离 */
      xN = x - x_;
      yN = y - y_;

      roY += xN * 0.2;
      roX -= yN * 0.1;
      console.log('移动');
      // $('body').append('<div style="width:5px;height:5px;position:absolute;top:'+y+'px;left:'+x+'px;background-color:red"></div>');

      $('.pic').css({
        transform: `perspective(800px) rotateX(${roX}deg) rotateY(${roY}deg)`,
      });
      /* 之前的鼠标坐标 */
      x_ = ev.clientX;
      y_ = ev.clientY;
    });
  }).mouseup(function () {
    $(this).unbind('mousemove');
    var play = setInterval(() => {
      xN *= 0.95;
      yN *= 0.95;
      if (Math.abs(xN) < 1 && Math.abs(yN) < 1) {
        clearInterval(play);
      }
      roY += xN * 0.2;
      roX -= yN * 0.1;
      $('.pic').css({
        transform: `perspective(800px) rotateX(${roX}deg) rotateY(${roY}deg)`,
      });
    }, 30);
  });
};
