import { forwardRef } from 'react';
import {
  Switch as AriaSwitch,
  type SwitchProps as AriaSwitchProps,
} from 'react-aria-components';
import { cn } from '../utilities/classnames';

type SwitchProps = Omit<AriaSwitchProps, 'children'> & {
  children?: React.ReactNode;
};

const Switch = forwardRef<HTMLLabelElement, SwitchProps>(
  function Switch(props, ref) {
    const { children, className, ...otherProps } = props;

    const active = props.isSelected;
    const disabled = !props.isDisabled && !props.isReadOnly;

    return (
      <AriaSwitch
        ref={ref}
        className={cn('flex items-center gap-2', className)}
        {...otherProps}
      >
        <span
          className={cn(
            'border-box relative h-6 w-[46px] rounded-full bg-current p-0.5 transition-all duration-150',
            active && '!text-primary',
            disabled ? 'text-muted-light' : 'text-muted-dark'
          )}
        >
          <span
            className={cn(
              'block h-[20px] w-[20px] rounded-full bg-white transition-transform duration-150',
              active && 'translate-x-[22px]'
            )}
          />
        </span>
        {children}
      </AriaSwitch>
    );
  }
);

export { Switch, type SwitchProps };
