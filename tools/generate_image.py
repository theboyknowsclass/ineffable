from PIL import Image, ImageDraw, ImageFont
import os

def get_max_font_size(text, font_path, image_width, image_height, margin):
    # Dynamically find the largest font size that fits the image with margin
    min_size, max_size = 10, min(image_width, image_height)
    best_size = min_size
    while min_size <= max_size:
        mid_size = (min_size + max_size) // 2
        font = ImageFont.truetype(font_path, mid_size)
        bbox = font.getbbox(text)
        text_width = bbox[2] - bbox[0]
        text_height = bbox[3] - bbox[1]
        if text_width <= image_width - 2 * margin and text_height <= image_height - 2 * margin:
            best_size = mid_size
            min_size = mid_size + 1
        else:
            max_size = mid_size - 1
    return best_size

def generate_centered_image(text, font_path, width, height, margin, output_path):
    ivory_color = (255, 255, 240)
    image = Image.new('RGB', (width, height), ivory_color)
    draw = ImageDraw.Draw(image)
    font_size = get_max_font_size(text, font_path, width, height, margin)
    font = ImageFont.truetype(font_path, font_size)
    bbox = font.getbbox(text)
    text_width = bbox[2] - bbox[0]
    text_height = bbox[3] - bbox[1]
    x = (width - text_width) // 2 - bbox[0]
    y = (height - text_height) // 2 - bbox[1]
    draw.text((x, y), text, font=font, fill=(50, 50, 50))
    os.makedirs(os.path.dirname(output_path), exist_ok=True)
    image.save(output_path)
    print(f"Image saved to {output_path}")

def main():
    # Font path is now under tools/fonts/
    script_dir = os.path.dirname(os.path.abspath(__file__))
    project_root = os.path.abspath(os.path.join(script_dir, '..'))
    font_path = os.path.join(script_dir, 'fonts', 'PlayfairDisplay-Bold.ttf')
    if not os.path.exists(font_path):
        raise FileNotFoundError(f"Font file not found: {font_path}")
    text = "ineffable"
    # Icon (512x512)
    icon_output = os.path.join(project_root, 'public', 'images', 'ineffable-icon-google.png')
    generate_centered_image(
        text, font_path, 512, 512, 32, icon_output
    )
    # Header (4096x2304)
    header_output = os.path.join(project_root, 'public', 'images', 'ineffable-header-google.png')
    generate_centered_image(
        text, font_path, 4096, 2304, 96, header_output
    )

if __name__ == "__main__":
    main() 