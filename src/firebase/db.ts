import {
  collection,
  doc,
  getDocs,
  getDoc,
  getFirestore,
  query,
  where,
  addDoc,
  deleteDoc,
  updateDoc,
} from 'firebase/firestore';
import app from '.';
import { BlogInterface } from '@/interface/BlogInterface';
import { QueryFunctionContext } from '@tanstack/react-query';

const db = getFirestore(app);

const authEmail = 'milaymaxell@gmail.com';

const filterUserID = async (authEmail: string) => {
  const userQuery = query(collection(db, 'users'), where('email', '==', authEmail));
  const userSnapshot = await getDocs(userQuery);
  let authID = '';

  userSnapshot.forEach((user) => {
    const userData = user.data();
    if (userData.email == authEmail) {
      authID = user.id;
    }
  });

  return authID;
};

export const fetchBlogs = async () => {
  const authID = await filterUserID(authEmail);

  const blogs: BlogInterface[] = [];
  const blogQuery = query(collection(db, `users/${authID}/blogs`));
  const blogSnapshot = await getDocs(blogQuery);

  blogSnapshot.forEach((blog) => {
    const blogData = blog.data();
    blogs.push({ id: blog.id, ...blogData } as BlogInterface);
  });

  return blogs;
};

export const fetchSingleBlog = async (blogID: string) => {
  const authID = await filterUserID(authEmail);
  const blogRef = doc(db, `users/${authID}/blogs/${blogID}`);
  const blogSnap = await getDoc(blogRef);
  if (blogSnap.exists()) {
    const blogData = blogSnap.data();
    return { id: blogSnap.id, ...blogData } as BlogInterface;
  } else {
    console.error('Fetch Single Blog Error: Specific blog not found');
  }
};

export const postBlog = async (blog: BlogInterface) => {
  const authID = await filterUserID(authEmail);
  const { title, picURL, description, imageCaption, previewText, date, type } = blog;

  await addDoc(collection(db, `users/${authID}/blogs`), {
    title,
    picURL,
    description,
    imageCaption,
    previewText,
    date,
    type,
  });
};

export const updateBlog = async (blogID: string, updatedBlog: BlogInterface) => {
  const authID = await filterUserID(authEmail);
  const blogRef = doc(db, `users/${authID}/blogs/${blogID}`);

  const { title, picURL, description, imageCaption, previewText, date, type } = updatedBlog;

  await updateDoc(blogRef, { title, picURL, description, imageCaption, previewText, date, type });
};

export const deleteBlog = async (blogID: string) => {
  const authID = await filterUserID(authEmail);
  await deleteDoc(doc(db, `users/${authID}/blogs/${blogID}`));
};

export default db;
