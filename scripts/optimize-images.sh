#!/bin/bash
# Batch convert all PNG/JPG images in public/blog-images to WebP (skips if WebP exists)
# Usage: bash scripts/optimize-images.sh

set -e

IMG_DIR="public/blog-images"

find "$IMG_DIR" -type f \( -iname "*.png" -o -iname "*.jpg" -o -iname "*.jpeg" \) | while read -r img; do
  webp_img="${img%.*}.webp"
  if [ ! -f "$webp_img" ]; then
    echo "Converting $img -> $webp_img"
    cwebp -q 80 "$img" -o "$webp_img"
  else
    echo "WebP already exists for $img, skipping."
  fi
done
