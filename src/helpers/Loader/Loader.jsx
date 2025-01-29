import { theme } from 'components/baseStyles/Variables.styled';
import { Loading } from 'notiflix/build/notiflix-loading-aio';

const onLoading = () => {
  return Loading.circle('Loading...', {
    backgroundColor: 'transparent',
    svgSize: '160px',
    svgColor: `${theme.colors.white}`,
    messageFontSize: '20px',
  });
};

const onLoaded = () => {
  return Loading.remove();
};

export { onLoading, onLoaded };
