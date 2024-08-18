# react-modal-component-matthieugh

react-modal-component-matthieugh is a simple and reusable modal component for React

## Installation

The package can be installed via [npm](https://www.npmjs.com)

```bash
npm i react-modal-component-matthieugh
```

## Configuration

#### 1. import

When you need the modal component, you have to import the component in your file

```js
import { Modal } from "react-modal-component-matthieugh";
```

#### 2. Required state

To run this modal,

```js
isOpen, // State with Boolean
setIsOpen, // Function to update isOpen
```

## Example

Basic example

```js
import React, { useState } from "react";
import { Modal } from "react-modal-component-matthieugh";

const Example = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <button onClick={() => setIsOpen(true)}>Open modal</button>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <h2>Modal test</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
      </Modal>
    </>
  );
};
```

Add className to customize modal with css

```js
<Modal className="customModal" isOpen={isOpen} setIsOpen={setIsOpen}>
  ...
</Modal>
```

```css
.customModal .reactModalLib__container {
  background-color: #c1121f;
}
```
