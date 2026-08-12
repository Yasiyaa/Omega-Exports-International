import os
import io
import base64
from PIL import Image

def generate_favicons():
    # Primary logo file: logo-01.png or 1 logo_Logo concept 1 copy 2.png
    logo_path = 'public/assets/logo-01.png'
    if not os.path.exists(logo_path):
        logo_path = 'public/assets/1 logo_Logo concept 1 copy 2.png'

    print(f"Loading logo from: {logo_path}")
    img = Image.open(logo_path)
    
    # Get tight bounding box of visible graphic
    bbox = img.getbbox()
    if bbox:
        cropped = img.crop(bbox)
    else:
        cropped = img

    w, h = cropped.size
    max_dim = max(w, h)
    
    # Add subtle 4% padding around logo for aesthetic breathing room
    pad = int(max_dim * 0.04)
    side = max_dim + (pad * 2)

    # Place centered on square transparent background
    sq = Image.new('RGBA', (side, side), (0, 0, 0, 0))
    sq.paste(cropped, ((side - w) // 2, (side - h) // 2))

    # Generate PNG favicons
    sizes = {
        'public/favicon-16x16.png': (16, 16),
        'public/favicon-32x32.png': (32, 32),
        'public/apple-touch-icon.png': (180, 180),
        'public/android-chrome-192x192.png': (192, 192),
        'public/android-chrome-512x512.png': (512, 512),
    }

    for path, sz in sizes.items():
        resized = sq.resize(sz, Image.Resampling.LANCZOS)
        resized.save(path, format='PNG')
        print(f"[OK] Created {path} ({sz[0]}x{sz[1]})")

    # Generate multi-resolution favicon.ico
    sq.save('public/favicon.ico', format='ICO', sizes=[(16, 16), (32, 32), (48, 48), (64, 64)])
    print("[OK] Created public/favicon.ico")

    # Generate vector wrapper SVG favicon
    hres = sq.resize((512, 512), Image.Resampling.LANCZOS)
    buf = io.BytesIO()
    hres.save(buf, format='PNG')
    b64_str = base64.b64encode(buf.getvalue()).decode('utf-8')

    svg_content = f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="100%" height="100%">
  <image href="data:image/png;base64,{b64_str}" width="512" height="512" />
</svg>'''

    with open('public/favicon.svg', 'w', encoding='utf-8') as f:
        f.write(svg_content)
    print("[OK] Created public/favicon.svg")

    # Clean up temp test files if any
    for tmp in ['public/favicon_logo01_512.png', 'public/favicon_emblem_512.png', 'public/favicon_emblem_top_512.png']:
        if os.path.exists(tmp):
            os.remove(tmp)

if __name__ == '__main__':
    generate_favicons()
