import instance from './axiosInstance';

const login = async (username, password) => {
  const response = await instance.post('/users/login', {
    username,
    password,
  });
  return response.data;
};

const register = async (username, password) => {
  const response = await instance.post('/users/register', {
    username,
    password,
    role: 'DEV',
  });
  return response.data;
};

const chatHistory = async (userId) => {
  const response = await instance.get(`/users/${userId}/chat-history`);
  return response.data;
};

const uploadFile = async (file) => {
  const form = new FormData();
  form.append('user_file', file);
  const response = await instance.post('/users/file-upload', form);
  return response.data;
};

export { login, register, chatHistory, uploadFile };
