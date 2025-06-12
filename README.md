# Automatic-Tabs

This browser extension automatically opens a tab of your choice (e.g., youtube.com) whenever you open a specific trigger tab.

---

## Instructions for Use

1. Download the ZIP file and extract its contents.  
2. Open `background.js` in a text editor (like Notepad).  
3. Replace the **first URL** with the trigger site (the site you want to monitor).  
4. Replace the **second URL** with the site you want to open automatically alongside the trigger site.  
5. Open `manifest.json` in a text editor.  
6. Update `"name"` to change the extension title.  
7. Update `"description"` to add your own description.  
8. Update `"default_title"` with your preferred title.  
9. Update `"host_permissions"` to include the trigger website URL.

---

## How to Activate the Extension

### Google Chrome

1. Open `chrome://extensions/` in your browser.  
2. Enable **Developer mode** (toggle in the top right corner).  
3. Click **Load unpacked** and select the folder containing your extension files.  
4. Open the trigger website — the chosen site will open automatically alongside it!

---

### Microsoft Edge

1. Open `edge://extensions/` in your browser.  
2. Enable **Developer mode** (toggle in the bottom left corner).  
3. Click **Load unpacked** and select your extension folder.  
4. Open the trigger website to see the second site open automatically!

---

### Mozilla Firefox

1. Open `about:debugging#/runtime/this-firefox` in your browser.  
2. Click **Load Temporary Add-on**.  
3. Select the `manifest.json` file from your extension folder.  
4. Open the trigger website and watch the automatic tab open.

> **Note:** Firefox temporary extensions will disable after restarting the browser. To install permanently, you need to submit the extension to [addons.mozilla.org](https://addons.mozilla.org/).

---

Enjoy your automatic tab launcher!  
