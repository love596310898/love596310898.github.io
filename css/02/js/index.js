window.onload = function () {
  const paths = [{
    name: '生活的开始',
    path: './confession/index.html',
  }, {
    name: '过往的故事',
    path: './photo-album-3d/index.html',
  }];
  const fragment = document.createDocumentFragment();
  paths.forEach((i) => {
    const li = document.createElement('li');
    li.className = 'special-effects-item';
    const a = document.createElement('a');
    const textNode = document.createTextNode(i.name);
    a.alt = i.name;
    a.href = i.path;
    a.target = '_blank';
    a.appendChild(textNode);
    li.appendChild(a);
    fragment.appendChild(li);
  });
  const wrap = document.getElementById('ul');
  wrap.appendChild(fragment);
};
