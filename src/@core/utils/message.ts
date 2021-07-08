import Snackbar from 'react-native-snackbar';

export const sendMessageSnackbar = (title: string, variant: string, duration: number) => {
  switch (variant) {
    case 'success':
      Snackbar.show({
        text: title,
        duration: duration,
        backgroundColor: '#49A744',
        action: {
          text: 'OK',
          textColor: 'white',
          onPress: () => {},
        },
      });
      break;
    case 'warn':
      Snackbar.show({
        text: title,
        duration: duration,
        backgroundColor: '#ffb300',
        action: {
          text: 'OK',
          textColor: 'white',
          onPress: () => {},
        },
      });
      break;
    case 'error':
      Snackbar.show({
        text: title,
        duration: duration,
        backgroundColor: '#ff0000',
        action: {
          text: 'OK',
          textColor: 'white',
          onPress: () => {},
        },
      });
      break;

    default:
      Snackbar.show({
        text: title,
        duration: duration,
        action: {
          text: 'OK',
          textColor: 'white',
          onPress: () => {},
        },
      });
      break;
  }
}