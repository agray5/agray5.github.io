import React from 'react';
import { action } from '@storybook/addon-actions';
import { Button } from '@storybook/react/demo';
import { withKnobs, text, boolean, color, number  } from "@storybook/addon-knobs";
import Skillbar from '../src/components/graph/bar'

export default {
  title: 'Skill Graph',
  decorators: [withKnobs]
};

const GenSkillBar = ({index = 1, Name = "HTML", Level = 1, Color = "#bbb"}) => (
  <div style={{height: "30px"}}>
    <Skillbar  name={text("Name "+index, Name)} level={number("Level "+index, Level)} color={color("Color "+index, Color)}/>
  </div>
)

export const SkillBar = () => (
  <GenSkillBar />
);

export const SkillBars = () => (
  <div>
      <GenSkillBar index={1}  Name="HTML" Color="#12c2e6"/>
      <GenSkillBar index={2} Name="JS" Level={2} Color="#4f0445"/>
  </div>
);

export const withAButton = () => (
  <button disabled={boolean("Disabled", false)}>
    {text("Label", "Hello Storybook")}
  </button>
);
