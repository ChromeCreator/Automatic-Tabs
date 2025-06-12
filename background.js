chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (
    changeInfo.status === 'complete' &&
    tab.url &&
    tab.url.includes('geo-fs.com')
  ) {
    chrome.tabs.create({
      url: 'https://docs.google.com/document/d/1NJ68oCQGadlqvgtit7N64uWR0B1R9qSvO8ZJLUO1p1U/edit?usp=sharing'
    });
  }
});
