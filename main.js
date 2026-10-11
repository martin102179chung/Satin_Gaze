const config = window.STELLA_SITE || {};
const profileHosts = {instagram: ['instagram.com', 'www.instagram.com'], x: ['x.com', 'www.x.com', 'twitter.com', 'www.twitter.com'], fanvue: ['fanvue.com', 'www.fanvue.com']};
let activeLinks = 0;
for (const platform of ['instagram', 'x', 'fanvue']) {
  if (!config[platform]) continue;
  try {
    const url = new URL(config[platform]);
    if (url.protocol !== 'https:' || !profileHosts[platform].includes(url.hostname) || url.username || url.password) continue;
    const link = document.getElementById(`${platform}-link`);
    link.href = url.href;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    link.removeAttribute('aria-disabled');
    const isXHome = platform === 'x' && url.pathname === '/';
    document.getElementById(`${platform}-status`).dataset.i18n = isXHome ? 'openX' : 'visitProfile';
    if (platform === 'x') document.getElementById('x-description').dataset.i18n = isXHome ? 'xPending' : 'xDescription';
    if (!isXHome) activeLinks++;
  } catch { /* Keep an invalid or unfinished URL disabled. */ }
}
document.getElementById('social-note').dataset.i18n = activeLinks ? 'socialNote' : 'socialPending';
if (typeof config.portrait === 'string' && /^\.\/assets\/[a-zA-Z0-9_./-]+\.(webp|jpg|jpeg|png)$/i.test(config.portrait) && !config.portrait.includes('..')) {
  const portrait = document.getElementById('stella-portrait');
  portrait.addEventListener('load', () => {
    const placeholder = document.getElementById('portrait-placeholder');
    if (placeholder) placeholder.hidden = true;
    portrait.hidden = false;
    portrait.closest('.portrait-panel').classList.add('has-portrait');
  }, {once:true});
  portrait.src = config.portrait;
}
document.getElementById('year').textContent = String(new Date().getFullYear());
