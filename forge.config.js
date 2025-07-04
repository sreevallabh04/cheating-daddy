const { FusesPlugin } = require('@electron-forge/plugin-fuses');
const { FuseV1Options, FuseVersion } = require('@electron/fuses');

module.exports = {
    packagerConfig: {
        asar: true,
        extraResource: ['./src/assets/SystemAudioDump'],
        name: 'Cheating Daddy',
        icon: 'src/assets/logo',
        // Production settings
        ignore: [
            /^\/(?!src|package\.json|forge\.config\.js)/,
            /node_modules\/(?!@google\/genai)/,
            /\.git/,
            /\.vscode/,
            /\.github/,
            /README\.md/,
            /LICENSE/,
            /\.prettierrc/,
            /\.prettierignore/,
            /\.gitignore/
        ],
        // use `security find-identity -v -p codesigning` to find your identity
        // for macos signing
        // also fuck apple
        // osxSign: {
        //    identity: '<paste your identity here>',
        //   optionsForFile: (filePath) => {
        //       return {
        //           entitlements: 'entitlements.plist',
        //       };
        //   },
        // },
        // notarize if off cuz i ran this for 6 hours and it still didnt finish
        // osxNotarize: {
        //    appleId: 'your apple id',
        //    appleIdPassword: 'app specific password',
        //    teamId: 'your team id',
        // },
    },
    rebuildConfig: {},
    makers: [
        {
            name: '@electron-forge/maker-squirrel',
            config: {
                name: 'cheating-daddy',
                productName: 'Cheating Daddy',
                shortcutName: 'Cheating Daddy',
                createDesktopShortcut: true,
                createStartMenuShortcut: true,
                // Production settings
                iconUrl: 'https://raw.githubusercontent.com/your-repo/cheating-daddy/main/src/assets/logo.ico',
                setupIcon: 'src/assets/logo.ico',
            },
        },
        {
            name: '@electron-forge/maker-dmg',
            platforms: ['darwin'],
            config: {
                // Production settings
                icon: 'src/assets/logo.icns',
                background: 'src/assets/logo.png',
                contents: [
                    {
                        x: 130,
                        y: 220,
                    },
                    {
                        x: 410,
                        y: 220,
                        type: 'link',
                        path: '/Applications',
                    },
                ],
            },
        },
        {
            name: '@electron-forge/maker-deb',
            config: {
                // Production settings
                options: {
                    icon: 'src/assets/logo.png',
                    categories: ['Utility', 'Office'],
                    maintainer: 'sohzm',
                    homepage: 'https://cheatingdaddy.com',
                },
            },
        },
        {
            name: '@electron-forge/maker-rpm',
            config: {
                // Production settings
                options: {
                    icon: 'src/assets/logo.png',
                    categories: ['Utility', 'Office'],
                    maintainer: 'sohzm',
                    homepage: 'https://cheatingdaddy.com',
                },
            },
        },
    ],
    plugins: [
        {
            name: '@electron-forge/plugin-auto-unpack-natives',
            config: {},
        },
        // Fuses are used to enable/disable various Electron functionality
        // at package time, before code signing the application
        new FusesPlugin({
            version: FuseVersion.V1,
            [FuseV1Options.RunAsNode]: false,
            [FuseV1Options.EnableCookieEncryption]: true,
            [FuseV1Options.EnableNodeOptionsEnvironmentVariable]: false,
            [FuseV1Options.EnableNodeCliInspectArguments]: false,
            [FuseV1Options.EnableEmbeddedAsarIntegrityValidation]: true,
            [FuseV1Options.OnlyLoadAppFromAsar]: true,
        }),
    ],
};
