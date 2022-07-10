import { Transform } from 'class-transformer';
export const UrlTransform = () => {
  return Transform((tr) => {
    if (!tr) return '';
    const url = tr.value.replace('watch?v=', 'embed/');
    return url;
  });
};
