# Restaurant List - v1

## 軟體及模組版本

```
"express": "V4.18.1",
"express-handlebars": "V3.0.0"
"bootstrap": "V5.1.3"
"popper": "V2.9.1"
"font awesome": V6.1.1"
```

## 安裝及執行

- 下載至本地指定資料夾

```
git clone https://github.com/wuwachon/Restaurant_List_v1.git
```

- 安裝相關套件

```
cd Restaurant_List
npm install
```

- 執行

```
npm run dev
```

Terminal 顯示 http://localhost:3000 即表示啟動完成，可至此網址網頁觀看畫面測試功能

## 專案功能描述

- 由指定 restaurant.json 檔案作為餐廳名單基本資料

- 使用者可以在首頁看到所有餐廳與它們的簡單資料：
  餐廳照片、餐廳名稱、餐廳分類、餐廳評分
- 使用者可以再點進去看餐廳的詳細資訊：
  類別、地址、電話、描述、圖片
- 使用者可以透過搜尋餐廳名稱及類別來找到特定的餐廳

## 練習技巧

- 載入 JSON 檔案做種子資料來源
- 正確運用 Express 及 Express-handlebars
- 以檔案形式使用 bootstrap
- 應用 params 及 query
- 練習 github 上傳及 README.md 撰寫
