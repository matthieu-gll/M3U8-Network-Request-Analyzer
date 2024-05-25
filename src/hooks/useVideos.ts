import { useEffect, useState } from "react";

export const useVideos = () => {
  const [videos, setVideos] = useState<string[]>([]);

  const getVideos = () => {
    try {
      chrome.runtime.sendMessage({ action: "getVideos" }, function (response) {
        setVideos(response.videos);
      });
    } catch (error) {
      console.error("getVideos error", error);
      setVideos([]);
    }
  };

  const clearVideos = () => {
    try {
      chrome.runtime.sendMessage(
        { action: "clearVideos" },
        function (response) {
          setVideos(response.videos);
        }
      );
    } catch (error) {
      console.error("clearVideos error", error);
      setVideos([]);
    }
  };

  useEffect(() => {
    getVideos();
  }, []);

  return { clearVideos, videos, getVideos };
};
