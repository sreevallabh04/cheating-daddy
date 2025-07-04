# Debugging Guide - Start Session Button

## Quick Tests

1. **Check if the app is running:**
   - Look for the Electron window
   - Check if you see the "Welcome" screen with API key input

2. **Test basic button functionality:**
   - Click the "Test Button (Check Console)" button
   - You should see "Test button clicked!" in the console
   - If this doesn't work, there's a basic event handling issue

3. **Test the Start Session button:**
   - Click the "Start Session" button
   - You should see an alert saying "Start button clicked! Check console for details"
   - Check the browser console (F12) for detailed logs

## Console Debugging

Open the browser console (F12) and look for these log messages:

### Expected Logs:
```
MainView: Constructor called
MainView: connectedCallback called
MainView: window.electronAPI available = true/false
MainView: render called
MainView: onStart function in render = [function]
MainView: Button text = Start Session Ctrl[icon]
```

### When you click the Start Session button:
```
MainView: handleStartClick called
MainView: isInitializing = false
MainView: onStart function = [function]
MainView: Button click detected!
MainView: Calling onStart function
CheatingDaddyApp: handleStart called
```

## Common Issues

### 1. Button not responding to clicks
- Check if the button is visible and clickable
- Look for CSS issues that might prevent clicks
- Check if the button has `pointer-events: none`

### 2. onStart function not being called
- Check if `window.cheddar` is available
- Check if the function is properly passed from parent component
- Look for JavaScript errors in console

### 3. API key issues
- Make sure you have entered a valid Gemini API key
- Check if the API key is being read from localStorage
- Look for "API Key: Missing" in console logs

### 4. Electron API issues
- Check if `window.electronAPI` is available
- Look for IPC communication errors
- Check if the preload script is working

## Manual Testing Steps

1. **Start the app:** `npm start`
2. **Open console:** Press F12 in the app window
3. **Enter API key:** Paste a valid Gemini API key
4. **Click Start Session:** Should trigger alert and console logs
5. **Check logs:** Look for the detailed debug messages

## If Button Still Doesn't Work

1. **Check the test button:** Click "Test Button (Check Console)" first
2. **Check console errors:** Look for any red error messages
3. **Try keyboard shortcut:** Press Ctrl+Enter to trigger start
4. **Check window.cheddar:** Type `window.cheddar` in console to see if it exists

## Emergency Fix

If the button still doesn't work, try this temporary fix:

1. Open the browser console (F12)
2. Type: `document.querySelector('#start-session-button').click()`
3. This should manually trigger the button click

## Contact Support

If none of the above works, please provide:
1. Screenshot of the console logs
2. Screenshot of any error messages
3. Steps you followed
4. Your operating system and Electron version 