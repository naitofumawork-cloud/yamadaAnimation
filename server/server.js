// server.js
const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// publicフォルダを静的ファイルとして公開
app.use(express.static(path.join(__dirname, '../public')));

// ルートアクセスでindex.htmlを返す
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/html/index.html'));//パス指定
});

// サーバー起動
app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
