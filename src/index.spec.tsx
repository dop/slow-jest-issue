import React from 'react';
import {render, waitFor} from '@testing-library/react';
import {Button} from '@wix/design-system';
import {ButtonTestkit} from '@wix/design-system/dist/testkit';

describe('Index', () => {
  it('runs', async () => {
   const effect = jest.fn();
    const {baseElement} = render(<App sideEffect={effect} />);
    const button = ButtonTestkit({wrapper: baseElement, dataHook: 'side-effect-button'});
    await waitFor(() =>  button.click())
    expect(effect).toHaveBeenCalled();
  });
});

interface AppProps {
  sideEffect(): void;
}

const App: React.FC<AppProps> = ({sideEffect}) => {
  return (
    <div>
      <Button dataHook="side-effect-button" onClick={sideEffect}>Click me</Button>
    </div>
  )
}
