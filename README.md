# Arman Forouzesh - Personal Academic Portfolio

This repository hosts the personal academic and research website for **Arman Forouzesh**, M.Sc. in Electrical Engineering (Control Systems & Deep Learning) from K. N. Toosi University of Technology.

Website URL: **[https://armanfz.github.io](https://armanfz.github.io)**

## Features
- **Zero Build Dependencies**: Pure HTML5, modern CSS, and JavaScript. No Ruby, Bundler, or Node.js required.
- **Instant GitHub Pages Deployment**: Automatically served via GitHub Pages with `.nojekyll`.
- **Dark & Light Mode**: Built-in theme toggle with automatic persistence and OS preference detection.
- **Interactive Lightbox**: Click any figure or GIF to view it in full resolution.
- **Mobile Responsive**: Clean layout optimized across desktop, tablet, and mobile browsers.

## Directory Structure
```
clean_site_to_upload/
├── index.html                   # Main single-page academic portfolio
├── .nojekyll                    # Tells GitHub Pages to serve static files directly
├── README.md                    # Repository documentation
├── assets/
│   ├── BoneErosion.gif          # CT scan bone erosion segmentation GIF
│   ├── MS.gif                   # MRI MS lesion segmentation GIF
│   ├── hankel.png               # Hankel-norm interaction index plot
│   ├── 3r_robot/                # 3R non-planar robot schematics & simulation plots
│   ├── css/
│   │   └── portfolio.css        # Clean, modern stylesheet (Dark/Light mode)
│   └── js/
│       └── portfolio.js         # Theme toggle, image zoom modal, interactive logic
└── images/
    ├── favicon.ico              # Site favicon
    ├── profile.JPG              # Profile photograph
    └── profile.png              # Profile backup
```

## Local Development
To preview the website locally on any machine with Python:
```bash
python -m http.server 8000
```
Then navigate to `http://localhost:8000` in your web browser, or simply double-click `index.html`.
