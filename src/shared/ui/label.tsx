import { forwardRef } from 'react';
import { Label as AriaLabel, type LabelProps } from 'react-aria-components';
import { cn } from '../utilities/classnames';

const Label = forwardRef<HTMLLabelElement, LabelProps>(
  function Label(props, ref) {
    const { className, ...otherProps } = props;

    return (
      <AriaLabel
        ref={ref}
        className={cn(
          'text-muted text-body font-bold peer-disabled:cursor-not-allowed',
          className
        )}
        {...otherProps}
      />
    );
  }
);

export { Label, type LabelProps };
