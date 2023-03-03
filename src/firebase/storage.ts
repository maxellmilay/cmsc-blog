import app from '.';
import { getStorage, ref } from 'firebase/storage';

const storage = getStorage(app);

const postPicture = (fileName: string) => {
  const picRef = ref(storage, 'images/' + fileName);
};
