// Generates PWA icons (192 & 512, normal + maskable) from the app icon.
// Run with: node scripts/make-icons.mjs
import sharp from "sharp";
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const src = readFileSync(join(root, "public", "app-icon.jpg"));

for (const size of [192, 512]) {
  await sharp(src)
    .resize(size, size)
    .png()
    .toFile(join(root, "public", `icon-${size}.png`));
}

// Maskable: add safe-zone padding (~12%) on a brand background.
for (const size of [192, 512]) {
  const pad = Math.round(size * 0.12);
  const inner = size - pad * 2;
  const icon = await sharp(src).resize(inner, inner).png().toBuffer();
  await sharp({
    create: {
      width: size,
      height: size,
      channels: 4,
      background: { r: 109, g: 40, b: 217, alpha: 1 },
    },
  })
    .composite([{ input: icon, top: pad, left: pad }])
    .png()
    .toFile(join(root, "public", `icon-maskable-${size}.png`));
}

console.log("Wrote PWA icons: 192, 512, maskable 192, maskable 512");
