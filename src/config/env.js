import {DEV_BACKEND_URL, PRO_BACKEND_URL} from '@env';

const devEnivronmentVariable = {
  BACKEND_URL: DEV_BACKEND_URL,
};

const prodEnivronmentVariable = {
  BACKEND_URL: PRO_BACKEND_URL,
};

export default __DEV__ ? devEnivronmentVariable : prodEnivronmentVariable;
