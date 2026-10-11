# Stella — official SFW entrance

Stella 是 AI 虛擬模特兒與演員。本頁是她的 SFW 官方入口，包含形象照、自介、Instagram、X 與 Fanvue 外部入口。

自介：**Hi, I’m Stella — an AI virtual model and actress. Welcome to my world. Stay a little while.**

頁尾：**18+ · Fictional AI-generated character**

已配置三張經挑選的 SFW 圖片：黑衣夜景主圖、微笑小頭像、沙發橫幅。原始圖片完整複製至 assets，網站依桌面與手機尺寸裁切顯示。三個社群入口已接上使用者提供的個人頁，均在新分頁開啟：

- Instagram：https://www.instagram.com/satin_gaze/
- X：https://x.com/SatinGaze
- Fanvue：https://www.fanvue.com/satin_gaze

## 本機預覽

`npm start` 後開啟 http://127.0.0.1:4173 。無需安裝套件，亦可直接開啟 `index.html`。

## 中英文切換

右上角 EN／中文可切換英文與繁體中文。首次開啟預設英文，之後以瀏覽器 localStorage 記住所選語言。若瀏覽器禁止儲存，仍可在當次瀏覽切換。平台名稱及 Stella 品牌保持原文。

文案位於 `i18n.js`；切換時會同步更新頁面語言、標題、介紹、圖片替代文字與無障礙標籤。無 JavaScript 時保留可用的英文頁面與社群連結。

## 補齊資料

1. 在 `site.config.js` 填入 Instagram、X 與 Fanvue 的完整 HTTPS 個人頁網址。X 支援 x.com 與 twitter.com。未設定的入口會繼續顯示 Coming soon。
2. 主圖設定位於 `site.config.js` 的 `portrait`；小頭像與橫幅使用 `index.html` 的 assets 相對路徑。
3. 確認形象、英文介紹與連結後再正式發佈。

## GitHub Pages

可部署檔案都位於儲存庫根目錄，所有資源均使用相對路徑，適用 `https://martin102179chung.github.io/Satin_Gaze/`。不需要建置流程或後端。`.nojekyll` 避免額外的 Jekyll 處理。

GitHub 儲存庫：https://github.com/martin102179chung/Satin_Gaze

在儲存庫 Settings → Pages，將 Source 設為 Deploy from a branch，Branch 選 main，Folder 選 /(root)，儲存後即可由 GitHub Pages 發佈。本版本不連接先前的 ChatGPT Sites 作品集網站。
