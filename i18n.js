const translations = {
  en: {
    title: 'Stella — Welcome to my world',
    description: 'Hi, I’m Stella — an AI virtual model and actress. Welcome to my world. Stay a little while.',
    home: 'Stella home', languageLabel: 'Language',
    masthead: 'A VIRTUAL MUSE. A WORLD OF STORIES.', edition: 'THE OFFICIAL SPACE',
    portraitLabel: 'Stella portrait', portraitAlt: 'Stella in a black long-sleeved dress against warm city lights',
    portraitCaption: 'STELLA / VIRTUAL MODEL & ACTRESS', niceToMeet: 'NICE TO MEET YOU', aiLabel: 'FICTIONAL · AI-GENERATED',
    avatarAlt: 'Stella smiling with a hand near her mouth', hello: 'Hi, I’m', model: 'AI VIRTUAL MODEL', and: '&', actress: 'ACTRESS',
    welcome: 'Welcome to my world.', stay: 'Stay a little while.', findMe: 'FIND A LITTLE MORE OF ME', socialLabel: 'Stella social accounts',
    instagramDescription: 'Daily life, moods & funny videos.', xDescription: 'A more open, daring side of me.', xPending: 'Stella’s profile is coming soon.',
    fanvueDescription: 'Completely uninhibited. Nothing held back.', visitProfile: 'VISIT PROFILE', openX: 'OPEN X.COM', comingSoon: 'COMING SOON',
    socialNote: 'A new window, a little closer.', socialPending: 'My next chapter is on its way.', introBottom: 'A NAME. A CHARACTER. A NEW PERSPECTIVE.',
    loungeTitle: 'A moment, ', loungeTitleEm: 'off-script.', loungeSubtitle: 'THE QUIETER SIDE OF STELLA',
    loungeAlt: 'Stella relaxing on a brown leather sofa in a cream blouse', betweenScenes: 'BETWEEN SCENES',
    disclosure: 'Fictional AI-generated character', footerNote: 'IMAGINED WITH AI. MADE TO TELL STORIES.', announcement: 'Language changed to English.'
  },
  'zh-Hant': {
    title: 'Stella — 歡迎走進我的世界',
    description: '嗨，我是 Stella，一位 AI 虛擬模特兒與演員。歡迎走進我的世界，多停留一會兒。',
    home: 'Stella 首頁', languageLabel: '語言選擇',
    masthead: '虛擬的靈感，真切的故事。', edition: 'STELLA 官方空間',
    portraitLabel: 'Stella 形象照', portraitAlt: 'Stella 穿著黑色長袖洋裝，身後是溫暖的城市燈光',
    portraitCaption: 'STELLA ／ 虛擬模特兒與演員', niceToMeet: '很高興遇見你', aiLabel: '虛構角色 · AI 生成',
    avatarAlt: 'Stella 以手輕掩嘴角，露出微笑', hello: '嗨，我是', model: 'AI 虛擬模特兒', and: '與', actress: '演員',
    welcome: '歡迎走進我的世界。', stay: '多停留一會兒。', findMe: '在這裡，多認識我一點', socialLabel: 'Stella 社群帳號',
    instagramDescription: '分享日常、心情與搞笑影片', xDescription: '更開放、更大膽的一面', xPending: 'Stella 的個人頁即將公開。',
    fanvueDescription: '完全解放，毫無保留', visitProfile: '前往個人頁', openX: '開啟 X.COM', comingSoon: '即將公開',
    socialNote: '在新分頁，與我再靠近一點。', socialPending: '下一段故事，即將開始。', introBottom: '一個名字，一位角色，一種新的視角。',
    loungeTitle: '劇本之外，', loungeTitleEm: '片刻自在。', loungeSubtitle: 'STELLA 安靜的另一面',
    loungeAlt: 'Stella 穿著奶油白襯衫，在棕色皮沙發上放鬆休息', betweenScenes: '鏡頭之外',
    disclosure: '虛構 AI 生成角色', footerNote: '以 AI 構想，讓故事成形。', announcement: '已切換為繁體中文。'
  }
};

const languageStorageKey = 'stella-language';
function setLanguage(language, announce = false) {
  const selected = Object.hasOwn(translations, language) ? language : 'en';
  const text = translations[selected];
  document.documentElement.lang = selected;
  document.title = text.title;
  document.querySelector('meta[name="description"]').content = text.description;
  document.querySelectorAll('[data-i18n]').forEach(element => {
    const value = text[element.dataset.i18n];
    if (value !== undefined) element.textContent = value;
  });
  for (const attribute of ['alt', 'aria-label']) {
    document.querySelectorAll(`[data-i18n-${attribute}]`).forEach(element => {
      const value = text[element.getAttribute(`data-i18n-${attribute}`)];
      if (value !== undefined) element.setAttribute(attribute, value);
    });
  }
  document.querySelectorAll('[data-language]').forEach(button => {
    button.setAttribute('aria-pressed', String(button.dataset.language === selected));
  });
  if (announce) document.getElementById('language-announcement').textContent = text.announcement;
  try { localStorage.setItem(languageStorageKey, selected); } catch { /* Language switching also works when storage is unavailable. */ }
}
document.querySelectorAll('[data-language]').forEach(button => {
  button.addEventListener('click', () => setLanguage(button.dataset.language, true));
});
let initialLanguage = 'en';
try { initialLanguage = localStorage.getItem(languageStorageKey) || 'en'; } catch { /* Use the English default. */ }
setLanguage(initialLanguage);
