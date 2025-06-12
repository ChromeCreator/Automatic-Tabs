chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (
    changeInfo.status === 'complete' &&
    tab.url &&
    tab.url.includes('www.example.com')
  ) {
    chrome.tabs.create({
      url: 'www.example.com'
    });
  }
});
