load("@yarn//jest-cli:index.bzl", "jest", _jest_test = "jest_test")

def jest_test(name, srcs = [], deps = [], visibility = None, **kwargs):
    if len(srcs) < 1:
        srcs = native.glob(["src/**"])

    templated_args = [
        "--no-cache",
        "--no-watchman",
        "--ci",
        "--colors",
        "--roots",
        "--config",
        "$(execpath //jest-config:jest.config.js)",
    ]

    for src in srcs:
        templated_args.extend(["--runTestsByPath", "$(execpath %s)" % src])

    _jest_test(
        name = name,
        data = srcs + deps,
        templated_args = templated_args,
        visibility = visibility,
        **kwargs
    )
