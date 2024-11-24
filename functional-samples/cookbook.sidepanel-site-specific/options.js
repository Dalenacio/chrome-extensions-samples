// Saves options to chrome.storage
function saveOptions() {
  const customText = document.getElementById('customText').value;
  chrome.storage.sync.set(
    {
      customText: customText || 'This side panel will display only on www.google.com'
    },
    () => {
      // Update status to let user know options were saved
      const status = document.getElementById('status');
      status.textContent = 'Options saved.';
      setTimeout(() => {
        status.textContent = '';
      }, 2000);
    }
  );
}

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
function restoreOptions() {
  chrome.storage.sync.get(
    {
      customText: 'This side panel will display only on www.google.com' // default value
    },
    (items) => {
      document.getElementById('customText').value = items.customText;
    }
  );
}

document.addEventListener('DOMContentLoaded', restoreOptions);
document.getElementById('save').addEventListener('click', saveOptions);