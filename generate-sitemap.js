const fs = require('fs');
const path = require('path');

// Define the path to the 'views' directory inside 'app'
const viewsPath = path.join(__dirname, 'app', 'views');

// Function to get all HTML files in the views directory
const getHtmlFiles = (dir) => {
  const files = fs.readdirSync(dir);
  let htmlFiles = [];
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stats = fs.statSync(filePath);
    
    if (stats.isDirectory()) {
      // Recurse into subdirectories if there are any
      htmlFiles = htmlFiles.concat(getHtmlFiles(filePath));
    } else if (filePath.endsWith('.html')) {
      // Only add .html files
      htmlFiles.push(filePath);
    }
  });
  
  return htmlFiles;
};

// Get all HTML files in the 'views' directory
const htmlFiles = getHtmlFiles(viewsPath);

// Print out each page URL
htmlFiles.forEach(file => {
  const relativePath = path.relative(viewsPath, file).replace(/\\/g, '/').replace('.html', '');
  console.log(`http://localhost:3000/${relativePath}`);
});

const outputFile = path.join(__dirname, 'sitemap.txt');
const outputStream = fs.createWriteStream(outputFile);

htmlFiles.forEach(file => {
  const relativePath = path.relative(viewsPath, file).replace(/\\/g, '/').replace('.html', '');
  outputStream.write(`http://localhost:3000/${relativePath}\n`);
});

console.log(`Sitemap saved to ${outputFile}`);