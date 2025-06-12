# Automatic-Tabs

This Chrome extension automatically opens a tab of your choice (e.g., youtube.com) whenever you open a specific trigger tab.

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

## How to Activate (Chrome Instructions)

1. Go to `chrome://extensions/` in your Chrome browser.  
2. Enable **Developer mode** (toggle in the top right corner).  
3. Click **Load unpacked** and select the folder containing `background.js` and `manifest.json`.  
4. Open the trigger website, and watch the chosen site open automatically alongside it!

---

Enjoy your automatic tabs setup!  
