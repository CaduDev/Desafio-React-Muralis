import { IoSunnyOutline, IoMoonOutline } from "react-icons/io5";

import type { IconType } from "react-icons";

import { useAppTheme } from '@/context/Theme';

import { Button } from '@core/Button';

type SwitchThemeProps = {
  /**
   * Ícone para o modo claro.
   */
  lightIcon?: IconType;
  /**
   * Ícone para o modo escuro.
   */
  darkIcon?: IconType;
}

export function SwitchTheme({
  lightIcon,
  darkIcon,
}: SwitchThemeProps) {
  const { toggleTheme, themeName } = useAppTheme();

  const LightIcon = lightIcon ? lightIcon : IoMoonOutline
  const NightIcon = darkIcon ? darkIcon : IoSunnyOutline

  return (
    <Button
      size='md'
      radius={'full'}
      isIconOnly
      onClick={toggleTheme}
    >
      {themeName === 'light' ? <LightIcon /> : <NightIcon />}
    </Button>
  );
}