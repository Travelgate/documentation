---
sidebar_position: 4
---

# How to Obtain Browser Logs

### Why Are Travelgate Browser Logs Important?

In some cases, our support team may ask you to provide **two types of browser logs** to better analyze and resolve issues on our web platform:

1. **HAR (HTTP Archive) file**: A record of all requests your browser makes to our website. It includes detailed information about performance and possible loading errors.  
2. **Console log**: A record of JavaScript errors and warnings that can help identify problems with the page's execution.

#### To obtain web logs, you should follow these steps in sequence:
1. Open the developer tools.
2. Reproduce the error.
3. Save the log files.
4. Send the files (the .har and the .log) to our support email, along with the email address you used to log in when the issue occurred.

:::warning Open Tools *Before* Reproducing the Error:
Developer tools **only capture what happens while they are open**. If you open them *after* the error occurs, the necessary information will not be recorded.
:::

## How to Export Browser Logs

### Google Chrome

To obtain browser logs in Google Chrome, follow these steps:

#### 1. Open Developer Tools
- Right-click anywhere on the page and select **Inspect**, or  
- Use the shortcut: `Ctrl+Shift+I` (Windows/Linux) or `Cmd+Option+I` (Mac).  

<img src="https://storage.travelgate.com/kbase/chrome-1-logs.png" alt="chrome-1-logs" width="500" height=""/>

#### 2. Obtain the HAR File (Network Tab)
1. Open the **Network** tab.  
2. Ensure the recording button (●) is **red**. If gray, click it to start recording.  
3. Check **Preserve log**.  
4. Clear existing logs with the 🚫 icon.  
5. Reproduce the issue while tools are recording.  
6. Click the ⬇️ **Export HAR…** icon to save the file.  

<img src="https://storage.travelgate.com/kbase/chrome-2-logs.png" alt="chrome-2-logs" width="500" height=""/>

#### 3. Obtain the Console Log (Console Tab)
1. Open the **Console** tab.  
2. Right-click any message and select **Save as…**.  
3. Save the `.log` file to your computer.  

<img src="https://storage.travelgate.com/kbase/chrome-3-logs.png" alt="chrome-3-logs" width="500" height=""/>

### Mozilla Firefox

To obtain browser logs in Mozilla Firefox, follow these steps:

#### 1. Open Developer Tools
- Open the menu (☰) → **More tools** → **Web Developer Tools**, or  
- Use the shortcut: `Ctrl+Shift+I` (Windows/Linux) or `Cmd+Option+I` (Mac).  

<img src="https://storage.travelgate.com/kbase/mozilla-1-logs.png" alt="mozilla-1-logs" width="500" height=""/>

#### 2. Obtain the HAR File (Network Tab)
1. Go to the **Network** tab.  
2. With tools open, refresh the page and reproduce the issue.  
3. Right-click inside the request list and select **Save All As HAR**.  
4. Save the file.  

<img src="https://storage.travelgate.com/kbase/mozilla-2-logs.png" alt="mozilla-2-logs" width="500" height=""/>

#### 3. Obtain the Console Log (Console Tab)
1. Open the **Console** tab.  
2. Right-click inside the messages area and select **Save all messages to file**.  
3. Save the file.  

<img src="https://storage.travelgate.com//kbase/mozilla-logs-3.png" alt="mozilla-logs-3" width="500" height=""/>

### Microsoft Edge

To obtain browser logs in Microsoft Edge, follow these steps:

#### 1. Open Developer Tools
- Menu (…) → **More tools** → **Developer Tools**, or  
- Use shortcut: `F12` or `Ctrl+Shift+I`.  

<img src="https://storage.travelgate.com/kbase/edge-1-logs.png" alt="edge-1-logs" width="500" height=""/>

#### 2. Obtain the HAR File (Network Tab)
1. Go to the **Network** tab.  
2. Ensure recording is active (▶️ gray / ■ red).  
3. Check **Preserve log**.  
4. Clear existing logs with 🚫.  
5. Reproduce the issue while recording.  
6. Export using the ⬇️ **Export HAR** icon.  

<img src="https://storage.travelgate.com/kbase/edge-2-logs.png" alt="edge-2-logs" width="500" height=""/>


#### 3. Obtain the Console Log (Console Tab)
1. Open the **Console** tab.  
2. Right-click the messages area and select **Save as…**.  
3. Save the `.log` file.  

<img src="https://storage.travelgate.com/kbase/edge-3-logs.png" alt="edge-3-logs" width="500" height=""/>

### Apple Safari

To obtain browser logs in Apple Safari, follow these steps:

#### 1. Enable the Develop Menu
1. In the top menu, go to **Safari** → **Settings** (or **Preferences**).  
2. Open the **Advanced** tab.  
3. Check **Show Develop menu in menu bar**.  

<img src="https://storage.travelgate.com/kbase/safari-1-logs.png" alt="safari-1-logs" width="500" height=""/>

<img src="https://storage.travelgate.com/kbase/safari-2-logs.png" alt="safari-2-logs" width="500" height=""/>

#### 2. Open the Web Inspector
- Menu bar: **Develop** → **Show Web Inspector**, or  
- Shortcut: `Cmd+Option+I`.  

<img src="https://storage.travelgate.com/kbase/safari-3-logs.png" alt="safari-3-logs" width="500" height=""/>

### Obtain the HAR File (Network Tab)
1. In the **Network** tab, check **Preserve Log**.  
2. Clear existing logs with 🗑️.  
3. Reproduce the issue.  
4. Use the **Export** icon (square with arrow up) to save the `.har` file.  

![safari-4-logs](https://storage.travelgate.com//kbase/safari-4-logs.png)

#### 3. Obtain the Console Log (Console Tab)
1. Open the **Console** tab.  
2. Click inside the log area.  
3. Select all (`Cmd+A`) and copy (`Cmd+C`).  
4. Open a plain text editor (e.g., TextEdit, Notes).  
5. Paste (`Cmd+V`) and save the file.  

![safari-5-logs](https://storage.travelgate.com//kbase/safari-5-logs.png)
