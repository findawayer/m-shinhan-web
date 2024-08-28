import type { AriaToastRegionProps } from '@react-aria/toast';
import { useToastRegion } from '@react-aria/toast';
import type { ToastState } from '@react-stately/toast';
import { useRef } from 'react';
import { Toast } from './toast';
import type { AppToast } from './toast.types';

type ToastRegionProps = AriaToastRegionProps & {
  state: ToastState<AppToast>;
};

function ToastRegion(props: ToastRegionProps) {
  const { state, ...otherProps } = props;

  const ref = useRef(null);
  const { regionProps } = useToastRegion<AppToast>(otherProps, state, ref);

  return (
    <div
      {...regionProps}
      ref={ref}
      className="fixed bottom-4 right-4 flex flex-col gap-2"
    >
      {state.visibleToasts.map((toast) => (
        <Toast key={toast.key} toast={toast} state={state} />
      ))}
    </div>
  );
}

export { ToastRegion, type ToastRegionProps };
