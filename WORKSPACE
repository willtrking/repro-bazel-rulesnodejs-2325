load("@bazel_tools//tools/build_defs/repo:http.bzl", "http_archive")

http_archive(
    name = "build_bazel_rules_nodejs",
    sha256 = "121f17d8b421ce72f3376431c3461cd66bfe14de49059edc7bb008d5aebd16be",
    url = "https://artifactory.cloudkitchens.internal/artifactory/github-release/bazelbuild/rules_nodejs/releases/download/2.3.1/rules_nodejs-2.3.1.tar.gz",
)

load("@build_bazel_rules_nodejs//:index.bzl", "node_repositories", "yarn_install")

node_repositories(
    node_version = "14.6.0",
    yarn_version = "1.22.4",
    # From https://nodejs.org/download/release/latest-v14.x/SHASUMS256.txt:
    node_repositories = {
        "14.6.0-darwin_amd64": ("node-v14.6.0-darwin-x64.tar.gz", "node-v14.6.0-darwin-x64", "7907a18605b900ce977ff4c7e67f7507f937f85738659865d31779c3b2990756"),
        "14.6.0-linux_amd64": ("node-v14.6.0-linux-x64.tar.xz", "node-v14.6.0-linux-x64", "b8a39b2dac8e200e96586356c5525d20b0b43dba8bf9f7eb4e8c2d5366be2bb2"),
        "14.6.0-windows_amd64": ("node-v14.6.0-win-x64.zip", "node-v14.6.0-win-x64", "57ea75a7ec70cc8158e6f9774f9728fb9e3d08212b1af3e206db2de46ca304ca"),
    },
    # Manually determined using `shasum -a 256`:
    yarn_repositories = {
        "1.22.4": ("yarn-v1.22.4.tar.gz", "yarn-v1.22.4", "bc5316aa110b2f564a71a3d6e235be55b98714660870c5b6b2d2d3f12587fb58"),
    },
    node_urls = ["https://nodejs.org/dist/v{version}/{filename}"],
    yarn_urls = ["https://github.com/yarnpkg/yarn/releases/download/v{version}/{filename}"],
    preserve_symlinks = True,
)

yarn_install(
    name = "yarn",
    use_global_yarn_cache = False,
    package_json = "//:package.json",
    yarn_lock = "//:yarn.lock",
)

load("@yarn//@bazel/cypress:index.bzl", "cypress_repository")

cypress_repository(
    name = "cypress",
    cypress_bin = "@yarn//:node_modules/cypress/bin/cypress",
)