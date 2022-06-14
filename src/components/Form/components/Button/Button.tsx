import { FC } from 'react';
import MUIButton from '@mui/material/Button';

import style from './Button.module.scss';

interface ButtonProps {
  label: string;
  disabled?: boolean;
  click?: () => void;
}

export const Button: FC<ButtonProps> = ({ label, disabled = false, click }) => {
  return (
    <MUIButton
      disabled={disabled}
      className={style.button}
      variant="contained"
      type="submit"
      onClick={click}
      data-testid="button"
    >
      {label}
    </MUIButton>
  );
};
