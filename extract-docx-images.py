"""
Extract images from a .docx file and save them to public/images/.
Uses python-docx to read the document and extract all embedded images.

Usage:
    pip install python-docx Pillow
    python extract-docx-images.py
"""

import os
import sys
from docx import Document
from docx.opc.constants import RELATIONSHIP_TYPE as RT

DOCX_PATH = os.path.join(".recebidos", "fotos-cliente.docx")
OUTPUT_DIR = os.path.join("public", "images")


def extract_images(docx_path: str, output_dir: str):
    if not os.path.exists(docx_path):
        print(f"ERROR: File not found: {docx_path}")
        sys.exit(1)

    os.makedirs(output_dir, exist_ok=True)

    doc = Document(docx_path)
    image_count = 0

    # Extract all images from the document's relationships
    for rel in doc.part.rels.values():
        if "image" in rel.reltype:
            image_data = rel.target_part.blob
            # Get the original filename from the relationship target
            original_name = os.path.basename(rel.target_ref)
            # Clean up the name
            ext = os.path.splitext(original_name)[1].lower()
            if not ext:
                ext = ".png"

            image_count += 1
            filename = f"foto-{image_count:02d}{ext}"
            filepath = os.path.join(output_dir, filename)

            with open(filepath, "wb") as f:
                f.write(image_data)

            print(f"  [{image_count}] Saved: {filepath} ({len(image_data):,} bytes)")

    if image_count == 0:
        print("No images found in the document.")
    else:
        print(f"\nDone! Extracted {image_count} images to {output_dir}/")
        print("\nNext steps:")
        print("  1. Review the extracted images")
        print("  2. Rename them to match products (e.g., perfis-pultrudados-1.jpg)")
        print("  3. Tell the assistant which image goes to which product page")


if __name__ == "__main__":
    print(f"Extracting images from: {DOCX_PATH}")
    print(f"Output directory: {OUTPUT_DIR}\n")
    extract_images(DOCX_PATH, OUTPUT_DIR)
