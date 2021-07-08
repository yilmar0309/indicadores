import { useEffect, useState } from 'react';
import { Platform, useColorScheme } from 'react-native';

export interface ConfigEntity {
  primary: string;
  secondary: string;
  backgroundScreens: string;
  textLight: string;
  textDark: string;
  textPrimary: string;
  textSecondary: string;
  textButtonPrimary: string;
  textButtonSecondary: string;
  textInputTitle: string;
  textInputText: string;
  card: string;
  /* fontLight: string;
  fontRegular: string;
  fontBold: string; */
  alingContentCenter?: Alings;
  alingContentBetweenRow: Alings;
}

interface Alings {
  justifyContent?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly';
  alignItems?: 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline';
}

export default () => {
  const isDarkMode = useColorScheme();

  const [mode, setMode] = useState<string | null | undefined>(isDarkMode)

  const [configTheme, setConfigTheme] = useState<ConfigEntity>({
    primary: '#FE4A01',
    secondary: '#FEE2CE',
    backgroundScreens: '#f2f2f4',
    textLight: 'white',
    textDark: 'black',
    textPrimary: '#000000',
    textSecondary: '#B9B9BB',
    textButtonPrimary: 'white',
    textButtonSecondary: '#1e344f',
    textInputTitle: '#B9B9BB',
    textInputText: 'black',
    card: 'white',
    /* fontLight: Platform.OS === 'ios' ? 'SonnyGothic-UltraLight' : 'W Foundry - Sonny Gothic Ultra Light',
    fontRegular: Platform.OS === 'ios' ? 'SonnyGothic-Regular' : 'W Foundry - Sonny Gothic Regular',
    fontBold: Platform.OS === 'ios' ? 'SonnyGothic-Bold' : 'W Foundry - Sonny Gothic Bold', */
    alingContentCenter: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    alingContentBetweenRow: {
      justifyContent: 'space-between',
      alignItems: 'center',
    },
  })

  useEffect(() => {
    if (mode === 'dark') {
      setConfigTheme({
        ...configTheme,
      })
    } else {
      setConfigTheme({
        ...configTheme,
      })
    }
  }, [mode])

  const setTheme = (theme: string) => setMode(theme);

  return {
    mode,
    configTheme,
    setTheme,
  }
}