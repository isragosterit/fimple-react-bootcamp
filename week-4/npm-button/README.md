# Custom Button Component
This package provides a customizable React button component with various styles and sizes.

# Buttons
![screenshot](./src/npm-buttons.PNG)

# Installation
To install the package, use npm:

```npm i buttons-rbw```

# Usage
text (string): Text displayed on the button.
color (string): Color scheme for the button (e.g., 'unicorn-pink', 'mystic-purple').
type (string): Type of button (e.g., 'primary', 'default', 'dashed', 'text', 'link').
size (string): Size of the button ('small', 'large', default is normal size).
```
import Button from 'buttons-rbw';
 
const YourComponent = () => {
  return (
    <div>
      <Button text="primary" type="primary" />
      <Button text="default" type="default" />
      <Button text="dashed" type="dashed" />
      <Button text="text" type="text" />
      <Button text="link" type="link" />
      <Button text="mystic-purple" color="mystic-purple" type="primary" size="large"/>
      <Button text="small" type="primary" size="small"/>
      <Button text="large" type="primary" size="large"/>
    </div>
  );
};
```
<h2>Available Colors</h2>

- unicorn-pink
- mystic-purple
- candy-lemon
- alien-green
- pirate-red
- dream-blue
- mermaid-green
- coconut-white
- cookie-brown
- pumpkin-orange

<h2>Available Types</h2>

- primary
- default
- dashed
- text
- link

<h2>Available Sizes</h2>

- small
- large