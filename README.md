# 📸 Instagram Photo Gallery Downloader

This is a simple static web page built using **HTML, CSS, and JavaScript** that showcases selected Instagram posts and allows users to **View and Download** them easily.

## 🔍 Features

- Displays a gallery of Instagram-style photo posts
- Hover to reveal **Download** and **View Full Image** buttons
- Fast loading and mobile-friendly
- No backend or database — completely static

## 🚀 Live Demo

👉 [Visit the Live Page](https://ecoshutterzz.netlify.app)  

## 📁 Project Structure
 📦 Ecoshutterz

    📁Clicks/ (Containes Media files and 00.json)

    📄index.html

    📄style.css
    
    📄script.js

- The `00.json` file stores information about each image.
- Structure:
  ```json
  {
  "1.jpeg"
    -
    -
    -
   "img.jpeg"
  }

## 🛠 How It Works
- On page load, JavaScript fetches 00.json.
- For each entry, it creates a card element that includes the image and action buttons.
- On hover, Download and View Image buttons appear using CSS/JS.

- This method makes it easy to update the gallery — just edit the JSON file.

## 🌐 Hosting
The site is hosted on Netlify as a static website.
