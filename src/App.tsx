import React from 'react';
// @ts-ignore
import Button from './button.tsx';

function App() {
  return (
    <div className="App">
      <div>
        <h2>Primary</h2>
        <Button clickHandler={() => console.log('Contact Us was clicked')} type="primary" state="default" icon="./phone.svg" text="Contact Us" />
        <Button clickHandler={() => console.log('Submit was clicked')} type="primary" state="disabled" icon="./submit.svg" text="Submit" />
        <Button clickHandler={() => console.log('Loading was clicked')} type="primary" state="loading" icon="./spinner.svg" text="Loading" />
      </div>
      <div>
        <h2>Secondary</h2>
        <Button clickHandler={() => console.log('Contact Us was clicked')} type="secondary" state="default" icon="./phone.svg" text="Contact Us" />
        <Button clickHandler={() => console.log('Submit was clicked')} type="secondary" state="disabled" icon="./submit.svg" text="Submit" />
        <Button clickHandler={() => console.log('Loading was clicked')} type="secondary" state="loading" icon="./spinner.svg" text="Loading" />
      </div>
      <div>
        <h2>Tertiary</h2>
        <Button clickHandler={() => console.log('Contact Us was clicked')} type="tertiary" state="default" icon="./phone.svg" text="Contact Us" />
        <Button clickHandler={() => console.log('Submit was clicked')} type="tertiary" state="disabled" icon="./submit.svg" text="Submit" />
        <Button clickHandler={() => console.log('Loading was clicked')} type="tertiary" state="loading" icon="./spinner.svg" text="Loading" />
      </div>
    </div>
  );
}

export default App;
