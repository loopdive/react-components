module.exports = {
  stories: [
    "../elements/**/*.story.@(js|jsx|ts|tsx)",
    "../elements/**/story.@(js|jsx|ts|tsx)",
    "../hooks/**/*.story.@(js|jsx|ts|tsx)",
    "../hooks/**/story.@(js|jsx|ts|tsx)",
    "../layouts/**/*.story.@(js|jsx|ts|tsx)",
    "../layouts/**/story.@(js|jsx|ts|tsx)",
  ],
  addons: ["@storybook/addon-links"],
};
