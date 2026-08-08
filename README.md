# HCI Portfolio

人機互動與 Creative Technology 作品集。網站以「把數位邏輯，做成可以摸得到的互動」為主軸，呈現從使用者研究、問題定義，到介面、硬體與實體回饋整合的跨域能力。

## 技術架構

- React 19
- Next.js 16（App Router）
- Tailwind CSS 4
- Vercel 零設定部署

所有版面與響應式設計都直接使用 Tailwind utilities；`app/globals.css` 僅保留 Tailwind 匯入與全站顏色變數。

## 資料夾結構

```text
hci-portfolio/
├─ app/
│  ├─ components/
│  │  ├─ CaseElements.tsx     # 作品頁基礎排版元件
│  │  ├─ CaseStudyBlocks.tsx  # 可填資料的作品頁區塊
│  │  ├─ SiteHeader.tsx       # 共用導覽列
│  │  └─ SiteFooter.tsx       # 共用頁尾
│  ├─ component-preview/
│  │  └─ page.tsx             # 內部元件預覽頁（noindex）
│  ├─ work/
│  │  ├─ _template/page.example.tsx  # 新作品頁範本
│  │  ├─ nooka/page.tsx               # OpenHCI 個案頁
│  │  ├─ make-ntu/page.tsx            # MakeNTU 個案頁
│  │  ├─ soul-atelier/page.tsx        # 3D Web 與 AI 個案頁
│  │  ├─ pixel-art-generator/page.tsx # 線上創作工具個案頁
│  │  └─ r3f-practice/page.tsx        # 3D Web 實驗個案頁
│  ├─ globals.css             # Tailwind 匯入與全站顏色變數
│  ├─ layout.tsx              # 全站語系、SEO 與社群預覽設定
│  └─ page.tsx                # 首頁
├─ public/
│  ├─ assets/                 # 網站實際使用的專案圖片
│  └─ og.png                  # 社群分享預覽圖
├─ next.config.ts             # Next.js 設定
├─ postcss.config.mjs         # Tailwind CSS / PostCSS 設定
├─ package.json
└─ README.md
```

## 本機開發

需要 Node.js 22.13 以上版本。

```bash
npm install
npm run dev
```

正式建置：

```bash
npm run build
```

## 作品頁元件預覽

啟動本機開發伺服器後，開啟：

[http://localhost:3000/component-preview](http://localhost:3000/component-preview)

這個頁面不會出現在網站導覽，並設定為 `noindex`。它仍是一個可直接輸入網址開啟的路由，因此用途是內部預覽，不是密碼保護頁面。

預覽頁包含以下可重用區塊：

- `CaseStudyShell`：導覽列、所有作品連結與頁尾
- `CaseHero`：標題、摘要、三欄資訊與外部連結
- `CaseCover`：保留原圖比例的作品封面
- `CaseSection`：一般文字章節
- `PrincipleGrid`：三欄設計原則
- `ProcessSection`：三欄或四欄流程
- `NumberedList`、`DefinitionList`、`ToolList`
- `MediaGallery`、`FlowSteps`、`ProjectDeck`

## 新增作品

1. 複製 `app/work/_template/page.example.tsx`。
2. 建立 `app/work/作品網址/page.tsx`，把範本內容貼入。
3. 填寫頁面上方的 metadata，以及各元件的文字、圖片、連結與陣列資料。
4. 把圖片放進 `public/assets/`，並在 `CaseCover` 或 `MediaGallery` 填入路徑。
5. 在首頁 `app/page.tsx` 的 `projects` 陣列加入作品卡片資料。

作品頁不需要新增自訂 CSS；區塊的 responsive layout、線條、padding 與 primary 色彩都由 `CaseStudyBlocks.tsx` 統一管理。
