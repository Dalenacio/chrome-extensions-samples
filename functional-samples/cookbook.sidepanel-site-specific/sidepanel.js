// Function to copy text to clipboard
async function copyTextToClipboard(text) {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch (err) {
    console.error('Failed to copy text:', err);
    return false;
  }
}

// Add click handler to the container
document.getElementById('copyContainer').addEventListener('click', async function() {
  const textElement = document.getElementById('customTextDisplay');
  const statusElement = document.getElementById('copyStatus');
  
  if (textElement.textContent) {
    const success = await copyTextToClipboard(textElement.textContent);
    if (success) {
      statusElement.textContent = 'Copied!';
      setTimeout(() => {
        statusElement.textContent = '';
      }, 2000);
    } else {
      statusElement.textContent = 'Failed to copy';
      setTimeout(() => {
        statusElement.textContent = '';
      }, 2000);
    }
  }
});

// Load and display the custom text
chrome.storage.sync.get(
  {
    customText: 'This side panel will display only on www.google.com' // default value
  },
  (items) => {
    document.getElementById('customTextDisplay').textContent = items.customText;
  }
);