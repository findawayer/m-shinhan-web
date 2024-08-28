import { useToastState, type ToastState } from '@react-stately/toast';
import { createContext, useContext } from 'react';
import * as config from '~/config';
import { ToastRegion } from './toast-region';
import type { AppToast } from './toast.types';

type ToastContextValue = ToastState<AppToast>;

const ToastContext = createContext<ToastContextValue | null>(null);

const useToastContext = () => {
  const state = useContext(ToastContext);

  if (!state) {
    throw new Error(
      'Toast components should be inside <ToastProvider /> tree.'
    );
  }

  return state;
};

type ToastProviderProps = {
  children?: React.ReactNode;
};

function ToastProvider(props: ToastProviderProps) {
  const { children, ...otherProps } = props;

  const state = useToastState<AppToast>({
    maxVisibleToasts: config.TOAST_MAX_VISIBLE_COUNT,
  });

  return (
    <ToastContext.Provider value={state}>
      {children}
      {state.visibleToasts.length > 0 && (
        <ToastRegion {...otherProps} state={state} />
      )}
    </ToastContext.Provider>
  );
}

export { ToastProvider, useToastContext as useToast, type ToastProviderProps };
