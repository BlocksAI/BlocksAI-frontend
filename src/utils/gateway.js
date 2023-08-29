import instance from './axiosInstance';

const blockPicker = async (prompt) => {
  var response = await instance.post('/blocks-gateway/gateway', {
    user_prompt: prompt,
  });
  while (
    response.data.chosen_block !== ' PersonalEducationPlanner' &&
    response.data.chosen_block !== ' CarbonFootprintTracker'
  ) {
    response = await instance.post('/blocks-gateway/gateway', {
      user_prompt: prompt,
    });
  }
  return response.data;
};

const chosenBlock = async (blockName, userPrompt) => {
  const response = await instance.post('/blocks-gateway/chosen-block', {
    block_name: blockName.trim(),
    user_prompt: userPrompt,
  });
  return response.data;
};

export { blockPicker, chosenBlock };
