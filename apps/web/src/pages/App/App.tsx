import { userUtils } from '@monorepo/core';
import { Sample } from '@monorepo/ui';
import { useCallback, useMemo, useState } from 'react';

interface AppProps {
  name?: string;
}

export const appTestId = 'app';
export const greetingTestId = 'greeting-text';
export const buttonTestId = 'increment-button';

export function App(props: AppProps) {
  const { name } = props;

  const [count, setCount] = useState(0);

  const increment = useCallback(() => {
    setCount((count) => count + 1);
  }, []);

  const renderGreeting = useMemo(() => {
    const message = 'Welcome to Vite + React';

    if (name) {
      return `${message}, ${name}!`;
    }

    return `${message}!`;
  }, [name]);

  console.log(
    userUtils.formatName({
      firstName: 'First',
      lastName: 'Last',
    }),
  );

  return (
    <div data-testid={appTestId}>
      <Sample />
      <header>
        <div>
          <p data-testid={greetingTestId}>{renderGreeting}</p>
        </div>
        <div>
          <button type="button" onClick={increment} data-testid={buttonTestId}>
            count is: {count}
          </button>
        </div>
      </header>
    </div>
  );
}
