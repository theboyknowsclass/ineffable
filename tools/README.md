# Tools Folder

This folder contains Python scripts and requirements for generating branded images for the Ineffable project.

## Image Generation

The main script here is `generate_image.py`, which creates two images with the word "ineffable" in Playfair Display Bold:

- `public/images/ineffable-icon-google.png` (512x512, icon)
- `public/images/ineffable-header-google.png` (4096x2304, header)

Both images are maximized and centered for a clean, iconic look.

## Requirements

- Python 3.8+
- [Pillow](https://python-pillow.org/)
- [PlayfairDisplay-Bold.ttf](https://fonts.google.com/specimen/Playfair+Display) font file in `tools/fonts/`

Install dependencies:
```sh
pip install -r requirements.txt
```

## Usage

From the project root, run:
```sh
cd tools
python generate_image.py
```

The generated images will appear in `public/images/`.

## Customization
- To change the word, edit the `text` variable in `generate_image.py`.
- To adjust margins or output sizes, modify the parameters in the script.

---

For questions or improvements, please update this README or the script as needed. 