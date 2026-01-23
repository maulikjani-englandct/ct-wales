const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

// Read URLs from 'sitemap.txt'
const urls = fs.readFileSync('sitemap.txt', 'utf-8').split('\n');

// Directory to save the screenshots
const screenshotDir = path.join(__dirname, 'screenshots');

// Create the 'screenshots' folder if it doesn't exist
if (!fs.existsSync(screenshotDir)) {
  fs.mkdirSync(screenshotDir);
}

// Sanitize the filename from the URL
const sanitizeFilename = (url) => {
  return url
    .replace(/^https?:\/\//, '')        // Remove protocol (http:// or https://)
    .replace(/\//g, '_')                // Replace slashes with underscores
    .replace(/[^\w\s-]/g, '')            // Remove non-alphanumeric characters
    .replace(/\s+/g, '_')               // Replace spaces with underscores
    .toLowerCase();                     // Convert to lowercase
};

const appendLanguageQueryParam = (url, lang) => {
  try {
    const urlObj = new URL(url);
    urlObj.search = `?languagePreference=${lang}`;
    return urlObj.toString();
  } catch {
    return url;
  }
};

const getRelativePath = (url) => {
  try {
    const urlObj = new URL(url);
    // Remove leading slash from pathname to avoid absolute path issues
    return urlObj.pathname.replace(/^\/+/, '');
  } catch {
    return '';
  }
};

(async () => {
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  const page = await browser.newPage();

  // Set the viewport for high resolution (for example, 1920x1080)
  await page.setViewport({ width: 1920, height: 1080 });

  for (let i = 0; i < urls.length; i++) {
    let url = urls[i].trim();
    if (url) {
      // Removed skipping of 'start_' pages, so always take screenshots

      // Capture screenshots for both 'en' and 'cy' versions
      for (const lang of ['en', 'cy']) {
        const langUrl = appendLanguageQueryParam(url, lang);
        let attempts = 0;
        let success = false;

        while (attempts < 3 && !success) {
          try {
            await page.goto(langUrl, { waitUntil: 'networkidle2' });  // Wait until the page loads completely
            
            // Determine relative path from URL pathname
            const relativePath = getRelativePath(langUrl);

            // Determine the directory path inside the language folder
            const langDir = path.join(screenshotDir, lang, relativePath);

            // Extract directory part (exclude filename)
            const dirPath = path.dirname(langDir);

            // Create language subfolder with relative path if it doesn't exist
            if (!fs.existsSync(dirPath)) {
              fs.mkdirSync(dirPath, { recursive: true });
            }

            // Extract last part of the URL path and use it as filename with .png extension
            const urlObj = new URL(langUrl);
            let lastPathPart = path.basename(urlObj.pathname);
            if (!lastPathPart) {
              lastPathPart = 'index.html';
            }
            const filename = `${path.parse(lastPathPart).name}.png`;

            const screenshotPath = path.join(dirPath, filename);

            // Take a full-page screenshot and save it to the language subfolder with relative path
            await page.screenshot({ path: screenshotPath, fullPage: true });
            console.log(`Screenshot saved: ${screenshotPath}`);
            success = true;
          } catch (error) {
            attempts++;
            if (attempts < 3) {
              console.warn(`Attempt ${attempts} failed for ${langUrl}. Retrying...`);
            } else {
              console.error(`Failed to capture screenshot for ${langUrl} after 3 attempts:`, error);
            }
          }
        }
      }
    }
  }

  await browser.close();
})();