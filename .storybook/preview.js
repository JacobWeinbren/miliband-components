export const parameters = {
    actions: { argTypesRegex: "^on[A-Z].*" },
    viewMode: "docs",
    docs: {
        inlineStories: false,
    },
    options: {
        storySort: {
            order: [
                "Getting Started",
                ["Introduction", "Install"],
                "Components",
            ],
        },
    },
};
