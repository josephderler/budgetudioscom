// Generates a 1200x630 social share (Open Graph) image into public/og.png.
// Run with: node scripts/make-og.mjs
import sharp from "sharp";
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const iconBuf = readFileSync(join(root, "public", "app-icon.jpg"));

// Round the app icon with a rounded-rect mask.
const iconSize = 200;
const roundedIcon = await sharp(iconBuf)
  .resize(iconSize, iconSize)
  .composite([
    {
      input: Buffer.from(
        `<svg width="${iconSize}" height="${iconSize}"><rect width="${iconSize}" height="${iconSize}" rx="48" ry="48"/></svg>`
      ),
      blend: "dest-in",
    },
  ])
  .png()
  .toBuffer();

const bg = Buffer.from(`
<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#8b5cf6"/>
      <stop offset="0.55" stop-color="#6d28d9"/>
      <stop offset="1" stop-color="#ec4899"/>
    </linearGradient>
    <radialGradient id="glow" cx="20%" cy="25%" r="60%">
      <stop offset="0" stop-color="#ffffff" stop-opacity="0.18"/>
      <stop offset="1" stop-color="#ffffff" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="1200" height="630" fill="url(#g)"/>
  <rect width="1200" height="630" fill="url(#glow)"/>
  <circle cx="1050" cy="520" r="200" fill="#ffffff" opacity="0.08"/>
  <circle cx="1120" cy="110" r="120" fill="#ffffff" opacity="0.06"/>

  <text x="100" y="430" font-family="Arial, sans-serif" font-size="72" font-weight="800" fill="#ffffff">Dora: Explore and Play!</text>
  <text x="102" y="492" font-family="Arial, sans-serif" font-size="32" font-weight="600" fill="#ffffff" opacity="0.9">An interactive learning adventure for little explorers</text>

  <rect x="100" y="534" width="470" height="60" rx="30" fill="#ffffff"/>
  <text x="335" y="573" font-family="Arial, sans-serif" font-size="26" font-weight="800" fill="#6d28d9" text-anchor="middle">Free on App Store &amp; Google Play</text>
</svg>
`);

await sharp(bg)
  .composite([{ input: roundedIcon, top: 80, left: 100 }])
  .png()
  .toFile(join(root, "public", "og.png"));

console.log("Wrote public/og.png (1200x630)");
