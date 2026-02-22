#!/usr/bin/env node
/**
 * Download all Anima assets to public/landing/ and output URL -> local path mapping.
 * Run: node scripts/download-anima-assets.mjs
 */
import https from "https"
import fs from "fs"
import path from "path"
import { fileURLToPath } from "url"

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const BASE = "https://c.animaapp.com/wDnFaDjy/img"
const OUT_DIR = path.join(__dirname, "..", "public", "landing")

// Safe filename: replace leading dashes and problematic chars
function safeName(name) {
  let s = name.replace(/^-+/, "").replace(/^\-+/, "")
  if (!s) s = name.replace(/-/g, "_")
  return s
}

const assets = [
  "bg.svg",
  "logo.svg",
  "hero-banner-placeholder.png",
  "social-icon-facebook.svg",
  "social-icon-twitter.svg",
  "social-icon-instagram.svg",
  "union-1.svg", "union-2.svg", "union-3.svg", "union-4.svg", "union-5.svg",
  "union-6.svg", "union-7.svg", "union-8.svg", "union-9.svg", "union-10.svg",
  "union-11.svg",
  "image-1268363829@2x.png", "image-1268363832@2x.png", "image-1268363831@2x.png",
  "image-1268363830@2x.png", "image-1268363825-1@2x.png", "image-1268363826@2x.png",
  "image-1268363826-1@2x.png", "image-1268363827-4@2x.png",
  "image-1268363829-1@2x.png", "image-1268363830-1@2x.png", "image-1268363831-1@2x.png",
  "image-1268363834-13@2x.png", "image-1268363841@2x.png", "image-1268363842@2x.png",
  "image-1268363843@2x.png", "image-1268363844@2x.png", "image-1268363845@2x.png",
  "image-1268363846@2x.png", "image-1268363847@2x.png",
  "group-1307.png", "group-1307-1.png", "group-1307-2.png", "group-1308@2x.png", "group-1310.png",
  "mask-group-1@2x.png", "mask-group-2.png", "mask-group-3.png", "mask-group-4@2x.png", "mask-group-5.png",
  "vector-3.svg", "vector-5.svg", "vector-5-1.svg", "vector-6.svg",
  "polygon-2.svg", "polygon-2-1.svg", "polygon-2-2.svg", "polygon-2-3.svg", "polygon-2-4.svg", "polygon-2-5.svg", "polygon-2-6.svg",
  "solid-communication-user.svg", "solid-status-university@2x.png", "solid-general-chart-pie@2x.png",
  "solid-status-lightbulb@2x.png", "solid-status-lightbulb-3.svg",
  "rectangle@2x.png", "rectangle-1@2x.png", "rectangle-4@2x.png", "rectangle-23796.png",
  "frame-2122074392.svg", "frame-2122074392-1.svg", "frame-2122074392-2.svg", "frame-2122074392-3.svg",
  "line-1-2.svg", "line-3-1.svg", "line-3-3.svg", "badget-solid-1.svg",
  "quote-left-svgrepo-com-1-1.svg", "rectangle-23796.png",
  "bg-1.svg", "bg-2.svg", "qr-code.svg", "qr-code-1.svg",
]
// Special names on server (with leading dashes or many dashes)
const specialUrls = [
  "-----------------------194491479-1.png",
  "--icon-left.svg",
  "--icon-left-1.svg",
]
const specialToFile = {
  "-----------------------194491479-1.png": "image-194491479-1.png",
  "--icon-left.svg": "icon-left.svg",
  "--icon-left-1.svg": "icon-left-1.svg",
}

function download(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      if (res.statusCode === 301 || res.statusCode === 302) {
        return download(res.headers.location).then(resolve).catch(reject)
      }
      const chunks = []
      res.on("data", (c) => chunks.push(c))
      res.on("end", () => resolve(Buffer.concat(chunks)))
      res.on("error", reject)
    }).on("error", reject)
  })
}

async function main() {
  if (!fs.existsSync(OUT_DIR)) fs.mkdirSync(OUT_DIR, { recursive: true })

  const all = [...assets]
  for (const u of specialUrls) all.push(u)

  for (const name of all) {
    const saveAs = specialToFile[name] || safeName(name) || name
    const url = `${BASE}/${encodeURIComponent(name)}`
    const outPath = path.join(OUT_DIR, saveAs)
    try {
      const buf = await download(url)
      fs.writeFileSync(outPath, buf)
      console.log("OK", saveAs)
    } catch (e) {
      console.error("FAIL", name, e.message)
    }
  }
  console.log("Done. Files in public/landing/")
}

main()
