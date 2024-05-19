document.getElementById("chillButton").addEventListener("click", () => {
    console.log("Chill button clicked");
    chrome.runtime.sendMessage({ action: "openVideo" }, (response) => {
      console.log('Message sent to background script', response);
    });
  });
  