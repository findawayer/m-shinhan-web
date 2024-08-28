import { useToast, type AriaToastProps } from '@react-aria/toast';
import type { ToastState } from '@react-stately/toast';
import { useRef } from 'react';
import { Button } from './button';
import type { AppToast } from './toast.types';

type ToastProps = AriaToastProps<AppToast> & {
  state: ToastState<AppToast>;
};

function Toast(props: ToastProps) {
  const { state, ...otherProps } = props;

  const ref = useRef<HTMLDivElement | null>(null);

  const {
    toastProps,
    contentProps,
    descriptionProps,
    titleProps,
    closeButtonProps,
  } = useToast<AppToast>(otherProps, state, ref);

  return (
    <div
      {...toastProps}
      ref={ref}
      className="bg-primary flex w-full min-w-60 items-center rounded px-4 py-3 text-white"
    >
      <div {...contentProps}>
        <div {...titleProps} className="text-body font-bold">
          {props.toast.content.title}
        </div>
        <div
          {...descriptionProps}
          className="text-caption text-muted font-normal"
        >
          {props.toast.content.description}
        </div>
      </div>
      <Button {...closeButtonProps} className="text-inactive ml-auto h-4 w-4">
        <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
          <path
            d="M3.33203 3.33594L12.6654 12.6693"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinecap="round"
          />
          <path
            d="M3.33203 12.6693L12.6654 3.33594"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinecap="round"
          />
        </svg>
      </Button>
    </div>
  );
}

export { Toast, type ToastProps };
