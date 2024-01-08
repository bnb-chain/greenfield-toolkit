import React from 'react';
import { clsButton } from './styles.css';
import { Box, BoxProps } from '../Box';
import { cx } from '@/base/utils/css';

export type ButtonProps = BoxProps;

export const Button = React.forwardRef<HTMLElement, ButtonProps>((props: ButtonProps, ref: any) => {
  const { className, ...restProps } = props;

  return (
    <Box ref={ref} as="button" className={cx('uk-button', clsButton, className)} {...restProps} />
  );
});

Button.displayName = 'Button';
