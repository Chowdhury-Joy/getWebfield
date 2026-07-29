#!/usr/bin/env bash
set -eo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
OUT="$ROOT/roofer3/images"
mkdir -p "$OUT"

download() {
  local name="$1"
  local url="$2"
  local max="$3"
  local tmp="$OUT/.tmp-$name"
  echo "→ $name"
  curl -fsSL "$url" -o "$tmp"
  sips -Z "$max" "$tmp" --out "$OUT/$name.jpg" >/dev/null
  cwebp -q 82 "$OUT/$name.jpg" -o "$OUT/$name.webp" >/dev/null
  rm -f "$tmp"
}

download "hero-crew" "https://www.figma.com/api/mcp/asset/0a432b7c-c0d9-4933-8044-00aa4709c54d" 1400
download "hero-aerial" "https://www.figma.com/api/mcp/asset/4ea94199-7be9-42c4-8917-4e30f02b8a30" 1400
download "about-house" "https://www.figma.com/api/mcp/asset/71a64671-a1db-4afa-ba12-2cc0624a255d" 1400
download "project-team" "https://www.figma.com/api/mcp/asset/d19304b7-4143-4797-b233-20744783d82c" 1400
download "service-work" "https://www.figma.com/api/mcp/asset/f07d5af0-9bf1-44c0-acb7-d085da47f5ca" 1400
download "residential" "https://www.figma.com/api/mcp/asset/7ebc01e7-dc8e-40e9-a284-baf3a8080e3f" 1400
download "commercial" "https://www.figma.com/api/mcp/asset/28b56b8d-6512-40ae-be6f-d4c2fa2feddd" 1400
download "workers" "https://www.figma.com/api/mcp/asset/185ef1cf-3f3b-47b9-acb8-03ca2f8dedb0" 1400
download "logo" "https://www.figma.com/api/mcp/asset/cc513739-db39-4b6d-986f-c4c34895f070" 240

echo "Done. Files in $OUT:"
ls -lh "$OUT"
