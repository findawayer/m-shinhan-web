import {
  Checkbox as AriaCheckbox,
  type CheckboxProps as AriaCheckboxProps,
} from 'react-aria-components';
import { cn } from '../utilities/classnames';

type Variant = 'bare' | 'circular';

type CheckboxProps = Omit<AriaCheckboxProps, 'children'> & {
  children?: React.ReactNode;
  variant?: Variant;
};

function Checkbox(props: CheckboxProps) {
  const { children, variant = 'circular', ...otherProps } = props;

  return (
    <AriaCheckbox
      className={cn([
        'flex items-center gap-2',
        otherProps.isDisabled && 'text-inactive',
      ])}
      {...otherProps}
    >
      {({ isDisabled, isSelected }) => (
        <>
          <span className="flex h-6 w-6 items-center justify-center">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              {variant === 'circular' && (
                <circle
                  className={cn([
                    'transition-all duration-200',
                    isDisabled
                      ? [
                          isSelected
                            ? 'fill-inactive stroke-inactive'
                            : 'stroke-inactive fill-white',
                        ]
                      : [
                          isSelected
                            ? 'fill-primary stroke-primary'
                            : 'stroke-inactive fill-white',
                        ],
                  ])}
                  cx="12"
                  cy="12"
                  r="11.3"
                  strokeWidth="1.4"
                />
              )}
              <path
                className={cn([
                  'transition-all duration-200',
                  isSelected ? 'stroke-white' : 'stroke-inactive',
                ])}
                d="M7.2002 12.225L10.8002 15.825L17.0252 9.6"
                fill="none"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </span>
          {children}
        </>
      )}
    </AriaCheckbox>
  );
}

export { Checkbox, type CheckboxProps };
