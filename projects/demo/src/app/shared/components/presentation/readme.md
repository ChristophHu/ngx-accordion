# Presentation Component

This component is designed to capture a screenshot of its content and download it as an image file (png) with transparent background. It uses the `html2canvas-pro` library to render the HTML content into a canvas element, which is then converted to a downloadable image format.


## Usage
To use the `presentation` component, include it in your Angular application as follows:

```html
<presentation>
    <!-- Your content goes here -->
</presentation>
```

## Installation
Make sure to install the `html2canvas-pro` library in your Angular project:

```bash
npm install html2canvas-pro --save
```

## Features
- **Screenshot Capture**: The component captures by the ID-capture and allows users to download it as a PNG image.
- **Custom Styling**: You can style the component using SASS. The example includes a border radius for the capture area.