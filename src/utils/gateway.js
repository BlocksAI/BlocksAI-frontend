import instance from './axiosInstance';

const blockPicker = async (prompt) => {
  const response = await instance.post('/blocks-gateway/gateway', {
    user_prompt: prompt,
  });
  return response.data;
};

const chosenBlock = async (blockName, userPrompt) => {
  console.log(blockName.trim());
  const response = await instance.post('/blocks-gateway/chosen-block', {
    block_name: 'PersonalEducationPlanner',
    user_prompt: userPrompt,
  });
  return response.data;
};

export { blockPicker, chosenBlock };
