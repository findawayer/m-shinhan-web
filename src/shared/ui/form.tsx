import { forwardRef } from 'react';
import {
  FieldError as AriaFieldError,
  type FieldErrorProps,
  Form,
  type FormProps,
} from 'react-aria-components';
import { cn } from '~/shared/utilities/classnames';

const FieldError = forwardRef<HTMLSpanElement, FieldErrorProps>(
  function FieldError(props, ref) {
    const { className, ...otherProps } = props;

    return (
      <AriaFieldError
        ref={ref}
        className={cn('text-caption text-error', className)}
        {...otherProps}
      />
    );
  }
);

export { FieldError, Form };
export type { FieldErrorProps, FormProps };
