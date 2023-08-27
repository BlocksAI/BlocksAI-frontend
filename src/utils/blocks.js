import instance from './axiosInstance';

const getBlocks = async () => {
  const response = await instance.get('/blocks');
  return response.data;
};

const createBlock = async (block) => {
  const response = await instance.post('/blocks/create', block);
  return response.data;
};

const manufactureBlock = async (file) => {
  const form = new FormData();
  form.append('block_file', file);
  const response = await instance.post('/blocks/manufacture', form);
  return response.data;
};

const subscribeToBlock = async (blockId) => {
  const response = await instance.post(`/blocks/subscribe/${blockId}`, {
    username: 'bobby',
  });
  return response.data;
};

const unsubscribeFromBlock = async (blockId) => {
  const response = await instance.post(`/blocks/unsubscribe/${blockId}`, {
    username: 'bobby',
  });
  return response.data;
};

export {
  getBlocks,
  createBlock,
  manufactureBlock,
  subscribeToBlock,
  unsubscribeFromBlock,
};
