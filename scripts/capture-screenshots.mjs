import { chromium } from "playwright";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outDir = path.join(__dirname, "..", "public", "screenshots");

const targets = [
  { url: "https://visionary-mvp50.vercel.app/demo", file: "visionary-demo.png" },
  { url: "https://visionary-mvp50.vercel.app/demo/areas/your_work", file: "visionary-your-work.png" },
];

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1280, height: 800 } });

for (const { url, file } of targets) {
  await page.goto(url, { waitUntil: "networkidle" });
  await page.screenshot({ path: path.join(outDir, file) });
  console.log(`Saved ${file}`);
}

await browser.close();
