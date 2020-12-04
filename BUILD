load(":jest.bzl", "jest_test")

# Note this also exports a jest_test.updateSnap name
jest_test(
    name = "jest",
    deps = [
        "//jest-config:jest.config.js",
        "//jest-config:cssTransform.js",
        "//jest-config:fileTransform.js",
        "//jest-config:bazelReporter.js",
        "//:tsconfig.json",
        "@yarn//@testing-library/react",
        "@yarn//@types/testing-library__react",
        "@yarn//@babel/preset-env",
        "@yarn//@babel/preset-react",
        "@yarn//@babel/plugin-proposal-class-properties",
        "@yarn//@types/jest",
        "@yarn//@types/react",
        "@yarn//@types/react-dom",
        "@yarn//babel-jest",
        "@yarn//babel-plugin-named-asset-import",
        "@yarn//identity-obj-proxy",
        "@yarn//jest",
        "@yarn//react",
        "@yarn//react-dom",
        "@yarn//ts-jest",
        "@yarn//typescript",
        "@yarn//typescript-plugin-css-modules",
    ],
)