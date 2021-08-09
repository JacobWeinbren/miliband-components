import '../dist/mili-button';

export default {
    title: "Components / Button",
    argTypes: { clickHandler: { action: "Clicked the button!" } },
};

const Template = (args) => {
    const button = document.createElement("mili-button");
    button.onclick = args.clickHandler;
    return button;
};

export const Button = Template.bind({});
Button.args = {};