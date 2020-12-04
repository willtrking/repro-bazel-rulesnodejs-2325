const path = require('path');

module.exports = {
    testEnvironment: 'jsdom',
    reporters: ['default', path.resolve(__dirname, 'bazelReporter.js')],
    testMatch: [
        "**/__tests__/**/*.+(ts|tsx|js|jsx)",
        "**/?(*.)+(spec|test).+(ts|tsx|js|jsx|snap)"
    ],
    transform: {
        '^.+\\.[tj]sx?$': 'ts-jest',
        '^.+\\.css$': '<rootDir>/cssTransform.js',
        '^(?!.*\\.(js|jsx|ts|tsx|css|json)$)': '<rootDir>/fileTransform.js'
    },
    transformIgnorePatterns: [
        "[/\\\\]node_modules[/\\\\].+\\.(js|jsx|ts|tsx)$",
        "^.+\\.module\\.(css|sass|scss)$"
    ],
    setupFilesAfterEnv: [
        process.cwd()+"/src/setupTests.ts"
    ],
    globals: {
        'ts-jest': {
            diagnostics: {
                // Required for CSS modules, otherwise typescript will complain
                ignoreCodes: [2307]
            },
            babelConfig: {
                presets: [
                    "@babel/preset-env", 
                    "@babel/preset-react",
                ],
                plugins: [
                    ["babel-plugin-named-asset-import", {
                        loaderMap: {
                            svg: {
                                ReactComponent:
                                    '@svgr/webpack?-svgo,+titleProp,+ref![path]',
                            },
                        },
                    }],
                    ["@babel/plugin-proposal-class-properties", { "loose" : true }]
                ]
            }
        }
    },
    modulePaths: [],
    moduleNameMapper: {
        "^.+\\.module\\.(css|sass|scss)$": "identity-obj-proxy"
    },
    moduleFileExtensions: [
        "ts",
        "tsx",
        "js",
        "jsx",
        "web.tsx",
        "web.js",
        "web.ts",
        "json",
        "web.jsx",
        "node"
      ],
};