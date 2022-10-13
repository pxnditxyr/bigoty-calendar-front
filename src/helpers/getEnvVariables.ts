import 'vite/client';

export const getEnvVariables = () => {
  import.meta.env;
  return { ...import.meta.env };
};
