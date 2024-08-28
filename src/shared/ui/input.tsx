import { forwardRef } from 'react';
import { Input as AriaInput, type InputProps } from 'react-aria-components';
import { cn } from '../utilities/classnames';

const Input = forwardRef<HTMLInputElement, InputProps>(
  function Input(props, ref) {
    const { className, type = 'text', ...otherProps } = props;

    const disabled = Boolean(props.disabled || props.readOnly);

    return (
      <div
        className={cn([
          'box-border flex h-[54px] overflow-hidden rounded align-top',
          'border-muted-dark placeholder:text-muted-dark focus-within:border-primary border',
          '[&.disabled]:bg-muted-light [&.disabled]:text-muted-dark',
          disabled && 'disabled',
        ])}
      >
        <AriaInput
          ref={ref}
          className="placeholder:text-muted-dark box-border flex-1 border-none bg-transparent px-4 text-[inherit] focus:outline-none disabled:pointer-events-none"
          type={type}
          {...otherProps}
        />
      </div>
    );
  }
);

export { Input, type InputProps };
