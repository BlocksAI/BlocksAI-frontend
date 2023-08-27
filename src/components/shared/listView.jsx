import React, { useState } from 'react';
import LeftArrow from '../../assets/leftArrow.png';
import RightArrow from '../../assets/rightArrow.png';
import Confirmation from './confirmation';
import { subscribeToBlock } from '../../utils/blocks';
import Block from './block';
import { useNavigate } from 'react-router-dom';

const ListView = ({ items, title }) => {
  const [position, setPosition] = useState(0);

  const moveLeft = () => {
    setPosition(Math.max(0, position - 272));
  };

  const moveRight = () => {
    setPosition(
      Math.min(position + 272, 272 * items.length - screen.width + 32)
    );
  };

  const navigate = useNavigate();
  const subscribe = async (id) => {
    try {
      await subscribeToBlock(1);
      navigate('/chat');
    } catch (err) {
      console.log(err);
      if (err.response.data.error.includes('already subscribed')) {
        navigate('/chat');
      }
    }
  };

  return (
    <>
      {items.length > 0 && (
        <div className="w-full my-4 mx-8">
          <p className="text-xl">{title}</p>
          <div className="flex gap-4">
            <div
              className="flex absolute left-0 bg-black bg-opacity-20 w-16 h-32 ml-8 items-center justify-center rounded-l-lg cursor-pointer z-10"
              onClick={moveLeft}
            >
              <img src={LeftArrow} alt="left arrow" />
            </div>
            <div
              style={{ transform: `translate(-${position}px, 0)` }}
              className="flex gap-4"
            >
              {items.map((item, index) => {
                return (
                  <Block
                    key={index}
                    item={item}
                    index={index}
                    subscribe={subscribe}
                  />
                );
              })}
            </div>
            <div
              className="flex absolute right-0 bg-black bg-opacity-20 w-16 h-32 items-center justify-center rounded-l-lg cursor-pointer z-10"
              onClick={moveRight}
            >
              <img src={RightArrow} alt="right arrow" />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ListView;
