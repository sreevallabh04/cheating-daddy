// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts

const { contextBridge, ipcRenderer } = require('electron');

// Expose protected methods that allow the renderer process to use
// the ipcRenderer without exposing the entire object
contextBridge.exposeInMainWorld('electronAPI', {
    // IPC handlers
    send: (channel, data) => {
        // whitelist channels
        const validChannels = [
            'start-session',
            'stop-session',
            'send-text',
            'update-keybinds',
            'update-content-protection',
            'quit-application',
            'open-external',
            'view-changed',
            'update-sizes',
            'initialize-gemini',
            'start-macos-audio',
            'close-session',
            'send-audio-content',
            'send-image-content',
            'send-text-message',
            'stop-macos-audio'
        ];
        if (validChannels.includes(channel)) {
            ipcRenderer.send(channel, data);
        }
    },
    
    invoke: (channel, data) => {
        // whitelist channels
        const validChannels = [
            'start-session',
            'stop-session',
            'send-text',
            'update-content-protection',
            'quit-application',
            'open-external',
            'toggle-window-visibility',
            'update-sizes',
            'initialize-gemini',
            'start-macos-audio',
            'close-session',
            'window-minimize',
            'send-audio-content',
            'send-image-content',
            'send-text-message',
            'stop-macos-audio'
        ];
        if (validChannels.includes(channel)) {
            return ipcRenderer.invoke(channel, data);
        }
    },
    
    // Listeners
    on: (channel, func) => {
        const validChannels = [
            'update-response',
            'update-status',
            'session-initializing',
            'session-started',
            'session-stopped',
            'click-through-toggled',
            'save-conversation-turn'
        ];
        if (validChannels.includes(channel)) {
            ipcRenderer.on(channel, (event, ...args) => func(...args));
        }
    },
    
    removeAllListeners: (channel) => {
        const validChannels = [
            'update-response',
            'update-status',
            'session-initializing',
            'session-started',
            'session-stopped',
            'click-through-toggled',
            'save-conversation-turn'
        ];
        if (validChannels.includes(channel)) {
            ipcRenderer.removeAllListeners(channel);
        }
    }
});
