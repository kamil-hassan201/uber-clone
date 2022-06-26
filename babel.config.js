module.exports = function (api) {
    api.cache(true);
    return {
        presets: ["babel-preset-expo"],
        plugins: [
            [
                "module-resolver",
                {
                    alias: {
                        assets: "./assets",
                        components: "./src/components",
                        modules: "./src/modules",
                        types: "./src/types",
                        constants: "./src/constants",
                        src: "./src/",
                    },
                },
            ],
        ],
    };
};
