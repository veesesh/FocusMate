/*
// tabTracking.js
const classifyTabTitle = async (tabTitle) => {
  const apiKey = "your-openai-api-key";

  try {
    const response = await fetch("https://api.openai.com/v1/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "text-davinci-003",
        prompt: `Is this title "${tabTitle}" related to study? Respond with Yes or No.`,
        max_tokens: 5,
      }),
    });

    const data = await response.json();
    const classification = data.choices[0].text.trim();

    console.log(`Tab Title: "${tabTitle}", Classified as: ${classification}`);

    // Send a message to the Pomodoro component to start or pause the timer
    if (classification === "Yes") {
      chrome.runtime.sendMessage({ action: "startTimer" });
    } else {
      chrome.runtime.sendMessage({ action: "pauseTimer" });
    }
  } catch (error) {
    console.error("Error classifying tab:", error);
  }
};

// Track when the user activates a new tab
chrome.tabs.onActivated.addListener((activeInfo) => {
  chrome.tabs.get(activeInfo.tabId, (tab) => {
    console.log("Active Tab:", tab.title);
    classifyTabTitle(tab.title);
  });
});
*/

// background.js
chrome.runtime.onInstalled.addListener(() => {
  console.log("Extension installed");
});

async function getCurrentTab() {
  let queryOptions = { active: true, lastFocusedWindow: true };
  // `tab` will either be a `tabs.Tab` instance or `undefined`.
  let [tab] = await chrome.tabs.query(queryOptions);
  return tab;
}
getCurrentTab().then((res) => console.log(res));
