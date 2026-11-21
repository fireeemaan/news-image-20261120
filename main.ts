// Writes this repository's picture of Friday 20 November 2026's world news to /output/entry.png.
// entry.png is rendered from poster.html (see README.md); the program copies it byte for byte, so every run
// writes the same bytes. Outside the grader, MAKEFUN_OUTPUT_DIR stands in for /output.
import { readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const MAX_BYTES = 1024 * 1024; // the gate's limit: at most 1 MiB
const MAX_SIDE = 1024; // and at most 1024 by 1024 pixels
const PNG_SIGNATURE = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);

const image = readFileSync(new URL('./entry.png', import.meta.url));

// Fail loudly on a bad re-render rather than hand the gate an image it would refuse.
if (!image.subarray(0, 8).equals(PNG_SIGNATURE)) throw new Error('entry.png is not a PNG');
if (image.length > MAX_BYTES) throw new Error(`entry.png is ${image.length} bytes, over 1 MiB`);
const width = image.readUInt32BE(16);
const height = image.readUInt32BE(20);
if (width > MAX_SIDE || height > MAX_SIDE) throw new Error(`entry.png is ${width}x${height}, over 1024x1024`);

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
writeFileSync(join(outDir, 'entry.png'), image);
