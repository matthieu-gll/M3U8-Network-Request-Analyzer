let uniq = (a) => [...new Set(a)];

const addVideo = (url) => {
  chrome.storage.local.get("videos", function (data) {
    const currentVideos = data.videos || [];
    chrome.storage.local.set({ videos: uniq([...currentVideos, url]) });
  });
};

const handleVideoRequest = (details) => {
  addVideo(details.url);
};

chrome.webRequest.onCompleted.addListener(
  function (details) {
    if (details.url.includes(".m3u8")) {
      handleVideoRequest(details);
    }
  },
  { urls: ["<all_urls>"] }
);

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === "getVideos") {
    chrome.storage.local.get("videos", function (data) {
      sendResponse({ videos: data.videos || [] });
    });
    return true;
  }
  if (message.action === "clearVideos") {
    chrome.storage.local.set({ videos: [] });
    sendResponse({ videos: [] });
    return true;
  }
});
