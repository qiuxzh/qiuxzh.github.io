'use strict';

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

hexo.extend.helper.register('column_nav', function (page) {
  const cfg = hexo.theme.config.column;
  if (!cfg || !cfg.enable) return '';
  const columns = Array.isArray(cfg.columns) ? cfg.columns : [];
  if (!columns.length) return '';

  const source = (page.source || '').replace(/^_posts[\\/]+/, '');
  const column = columns.find(item => item.path && source.startsWith(item.path.replace(/[\\/]+$/, '') + '/'));
  if (!column) return '';

  const base = column.path.replace(/[\\/]+$/, '');
  const posts = hexo.locals.get('posts').data
    .filter(p => p.source && p.source.replace(/^_posts[\\/]+/, '').startsWith(base + '/'))
    .sort((a, b) => {
      const dirA = a.source.replace(/^_posts[\\/]+/, '').split('/').slice(1, -1).join('/');
      const dirB = b.source.replace(/^_posts[\\/]+/, '').split('/').slice(1, -1).join('/');
      if (dirA !== dirB) return dirA.localeCompare(dirB, 'zh-CN');
      return b.date - a.date;
    });
  if (!posts.length) return '';

  const currentRel = source.slice(base.length + 1);
  const currentDirs = currentRel.split('/').slice(0, -1);
  const currentPath = currentDirs.join('/');

  const tree = {};
  posts.forEach(p => {
    const rel = p.source.replace(/^_posts[\\/]+/, '').slice(base.length + 1);
    const parts = rel.split('/');
    const fileName = parts.pop().replace(/\.md$/i, '');
    let node = tree;
    parts.forEach(part => {
      if (!node[part]) node[part] = {};
      node = node[part];
    });
    node.__posts = node.__posts || [];
    const title = p.title && p.title !== 'No title' ? p.title : fileName;
    node.__posts.push({ title: title, link: p.permalink, active: rel === currentRel });
  });

  function renderDir(node, level, pathArr) {
    let html = '';
    const dirs = Object.keys(node).filter(k => k !== '__posts').sort((a, b) => a.localeCompare(b, 'zh-CN'));
    dirs.forEach(dir => {
      const newPath = pathArr.concat(dir);
      const newPathStr = newPath.join('/');
      const isOnPath = currentPath === newPathStr || currentPath.startsWith(newPathStr + '/');
      html += '<details class="column-branch"' + (isOnPath ? ' open' : '') + '>';
      html += '<summary class="column-dir" style="padding-left:' + (level * 12) + 'px"><span class="column-dir-arrow">&#9662;</span><span>' + escapeHtml(dir) + '</span></summary>';
      html += '<div class="column-branch-children">' + renderDir(node[dir], level + 1, newPath) + '</div>';
      html += '</details>';
    });
    if (node.__posts) {
      node.__posts.forEach(p => {
        html += '<a class="column-link' + (p.active ? ' active' : '') + '" href="' + p.link + '" style="padding-left:' + (level * 12 + 8) + 'px">' + escapeHtml(p.title) + '</a>';
      });
    }
    return html;
  }

  return '<div class="column-nav-inner"><div class="column-nav-title">' + escapeHtml(column.name || column.path) + '</div><nav class="column-nav-list">' + renderDir(tree, 0, []) + '</nav></div>';
});