module.exports = {
    stories: [
        "../stories/**/*.stories.mdx",
        "../stories/**/*.stories.@(js|jsx|ts|tsx)"
    ],
    addons: [
        '@storybook/addon-knobs',
        '@storybook/addon-actions',
        '@storybook/addon-docs',
        '@storybook/addon-links',
        '@storybook/addon-a11y',
        '@storybook/addon-storysource',
        '@storybook/addon-viewport'
    ],
}