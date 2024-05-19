chrome.runtime.onInstalled.addListener(() => {
    console.log("Extension installed");
  });
  
  // Listener para receber mensagens do popup.js
  chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === "openVideo") {
      chrome.tabs.create({ url: "https://www.youtube.com/watch?v=UedTcufyrHc" }, (tab) => {
        console.log(`YouTube tab created with ID: ${tab.id}`);
      });
    }
  });
  