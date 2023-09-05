import React, {useState, createContext, PropsWithChildren} from 'react';

type CalenderContextType = PropsWithChildren<{
  text: string;
  setText: (color: string) => void;
  isLoading: boolean;
  setIsLoading: (isLoading: boolean) => void;
  isLoggedIn: boolean;
  setIsLoggedIn: (setIsLoading: boolean) => void;
}>;

type CalenderContextProviderProps = {
  children: React.ReactNode;
};

const initialValue: CalenderContextType = {
  text: '',
  setText: () => {},
  isLoading: false,
  setIsLoading: () => {},
  isLoggedIn: false,
  setIsLoggedIn: () => {},
};

export const CalenderContext = createContext<CalenderContextType>(initialValue);

export const CalenderContextProvider = ({
  children,
}: CalenderContextProviderProps) => {
  const [text, setText] = useState(
    'hello, the values can be sent across the component',
  );
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  const calenderContextValue: CalenderContextType = {
    text,
    setText,
    isLoading,
    setIsLoading,
    isLoggedIn,
    setIsLoggedIn,
  };

  return (
    <CalenderContext.Provider value={calenderContextValue}>
      {children}
    </CalenderContext.Provider>
  );
};
