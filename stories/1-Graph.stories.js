import React from 'react';
import { action } from '@storybook/addon-actions';
import { Button } from '@storybook/react/demo';
import { withKnobs, text, boolean, color, number  } from "@storybook/addon-knobs";
import Skillbar from '../src/components/graph/bar'

export default {
  title: 'Skill Graph',
  decorators: [withKnobs]
};


export const ButtonText = () => (
  <Button>Hello</Button>
)

export const SkillBar = () => (
  <div style={{height: "30px"}}>
  <Skillbar  name={text("Name", "HTML")} level={number("Level", 1)} color={color("Color", "#bbb")}/>
  </div>
);

export const withAButton = () => (
  <button disabled={boolean("Disabled", false)}>
    {text("Label", "Hello Storybook")}
  </button>
);
