# HCI Portfolio

人機互動與 Creative Technology 作品集。網站以「把數位邏輯，做成可以摸得到的互動」為主軸，呈現從使用者研究、問題定義，到介面、硬體與實體回饋整合的跨域能力。

## 技術架構

- React 19
- Next-compatible App Router（vinext）
- Vite 8
- Tailwind CSS 4
- Sites / Cloudflare Workers 相容建置

所有版面與響應式設計都直接使用 Tailwind utilities；`app/globals.css` 僅保留 Tailwind 匯入與全站顏色變數。

## 資料夾結構

```text
hci-portfolio/
├─ app/
│  ├─ components/
│  │  ├─ SiteHeader.tsx       # 共用導覽列
│  │  └─ SiteFooter.tsx       # 共用頁尾
│  ├─ work/
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
├─ .openai/hosting.json       # Sites 專案設定
├─ build/                     # Sites 建置整合
├─ worker/                    # Cloudflare Worker 入口
├─ vite.config.ts             # vinext、Vite 與 Sites 設定
├─ package.json
└─ README.md
```

## 視覺與內容原則

- 白底、深灰文字與低彩度綠色，讓研究脈絡和個人貢獻比裝飾更突出。
- 作品使用完全相同的封面比例、資訊順序與互動方式。
- 每個個案依「問題 → 設計原則 → 個人貢獻 → 反思」組織，方便老師快速閱讀。
- 團隊成果與個人工作分開標示，避免模糊實際負責範圍。
- 手機、平板與桌機皆有對應版面，並尊重 `prefers-reduced-motion`。

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
