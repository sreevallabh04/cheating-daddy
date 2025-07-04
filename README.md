# Cheating Daddy

> [!NOTE]  
> Use latest MacOS and Windows version, older versions have limited support

> [!NOTE]  
> During testing it wont answer if you ask something, you need to simulate interviewer asking question, which it will answer

A real-time AI assistant that provides contextual help during video calls, interviews, presentations, and meetings using screen capture and audio analysis.

## Features

- **Live AI Assistance**: Real-time help powered by Google Gemini 2.0 Flash Live
- **Screen & Audio Capture**: Analyzes what you see and hear for contextual responses
- **Multiple Profiles**: Interview, Sales Call, Business Meeting, Presentation, Negotiation
- **Transparent Overlay**: Always-on-top window that can be positioned anywhere
- **Click-through Mode**: Make window transparent to clicks when needed
- **Cross-platform**: Works on macOS, Windows, and Linux (kinda, dont use, just for testing rn)
- **Production Ready**: Secure, optimized, and ready for distribution

## Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn
- Gemini API Key from [Google AI Studio](https://aistudio.google.com/apikey)

### Development Setup
```bash
# Clone the repository
git clone <repository-url>
cd cheating-daddy

# Install dependencies
npm install

# Start development server
npm start
```

### Production Build
```bash
# Build for current platform
npm run build

# Build for specific platform
npm run build:win    # Windows
npm run build:mac    # macOS
npm run build:linux  # Linux

# Build all platforms
npm run dist
```

## Usage

1. **Get API Key**: Visit [Google AI Studio](https://aistudio.google.com/apikey) to get your Gemini API key
2. **Enter API Key**: Paste your API key in the main window
3. **Choose Profile**: Select your use case (Interview, Sales, etc.)
4. **Start Session**: Click "Start Session" to begin
5. **Position Window**: Use keyboard shortcuts to move the window
6. **Get Help**: The AI will provide real-time assistance based on your screen and audio

## Keyboard Shortcuts

- **Window Movement**: `Ctrl/Cmd + Arrow Keys` - Move window
- **Click-through**: `Ctrl/Cmd + M` - Toggle mouse events
- **Close/Back**: `Ctrl/Cmd + \` - Close window or go back
- **Send Message**: `Enter` - Send text to AI
- **Start Session**: `Ctrl/Cmd + Enter` - Start session from main view

## Audio Capture

- **macOS**: [SystemAudioDump](https://github.com/Mohammed-Yasin-Mulla/Sound) for system audio
- **Windows**: Loopback audio capture
- **Linux**: Microphone input

## Security Features

- ✅ Context isolation enabled
- ✅ Preload script with whitelisted IPC channels
- ✅ Secure Electron configuration
- ✅ No direct nodeIntegration
- ✅ Content protection enabled
- ✅ Updated dependencies with security fixes

## Troubleshooting

### Start Session Button Not Working
1. Check browser console for errors (F12)
2. Ensure API key is entered correctly
3. Verify internet connection
4. Check if Gemini API is accessible

### Audio Issues
- **Windows**: Ensure "Stereo Mix" is enabled in sound settings
- **macOS**: Grant microphone permissions to the app
- **Linux**: Check microphone permissions

### Build Issues
```bash
# Clean and reinstall
npm run clean

# Rebuild native dependencies
npm rebuild
```

## Development

### Project Structure
```
src/
├── components/          # UI components
│   ├── app/           # Main app component
│   └── views/         # View components
├── utils/             # Utility functions
├── assets/            # Static assets
└── index.js           # Main process entry
```

### Key Files
- `src/index.js` - Main process
- `src/components/app/CheatingDaddyApp.js` - Main UI component
- `src/utils/gemini.js` - AI integration
- `src/utils/renderer.js` - Renderer utilities
- `src/preload.js` - Secure IPC bridge

### Adding Features
1. Update preload script with new IPC channels
2. Add handlers in main process
3. Update renderer process
4. Test thoroughly

## Requirements

- Electron-compatible OS (macOS, Windows, Linux)
- Gemini API key
- Screen recording permissions
- Microphone/audio permissions
- 4GB RAM minimum
- Stable internet connection

## License

GPL-3.0 License - see LICENSE file for details

## Support

For issues and questions:
- Check the troubleshooting section
- Review console logs for errors
- Ensure all prerequisites are met
- Verify API key is valid and has sufficient quota
