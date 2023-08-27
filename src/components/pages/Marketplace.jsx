import React, { useEffect, useState } from 'react';
import MoreButton from '../shared/moreButton';
import ListView from '../shared/listView';
import { faker } from '@faker-js/faker';
import { getBlocks } from '../../utils/blocks';

const Marketplace = () => {
  const [newBlocks, setNewBlocks] = useState([]);

  useEffect(() => {
    const getBlock = async () => {
      const blocks = await getBlocks();
      blocks.map((block) => {
        block.image = faker.image.urlPicsumPhotos(64, 32);
      });
      setNewBlocks(blocks);
    };
    getBlock();
  }, []);

  let fakeData = [
    { image: faker.image.urlPicsumPhotos(64, 32) },
    { image: faker.image.urlPicsumPhotos(64, 32) },
    { image: faker.image.urlPicsumPhotos(64, 32) },
    { image: faker.image.urlPicsumPhotos(64, 32) },
    { image: faker.image.urlPicsumPhotos(64, 32) },
    { image: faker.image.urlPicsumPhotos(64, 32) },
    { image: faker.image.urlPicsumPhotos(64, 32) },
    { image: faker.image.urlPicsumPhotos(64, 32) },
    { image: faker.image.urlPicsumPhotos(64, 32) },
    { image: faker.image.urlPicsumPhotos(64, 32) },
    { image: faker.image.urlPicsumPhotos(64, 32) },
    { image: faker.image.urlPicsumPhotos(64, 32) },
    { image: faker.image.urlPicsumPhotos(64, 32) },
    { image: faker.image.urlPicsumPhotos(64, 32) },
    { image: faker.image.urlPicsumPhotos(64, 32) },
    { image: faker.image.urlPicsumPhotos(64, 32) },
  ];

  let fakeData2 = [
    { image: faker.image.urlPicsumPhotos(64, 32) },
    { image: faker.image.urlPicsumPhotos(64, 32) },
    { image: faker.image.urlPicsumPhotos(64, 32) },
    { image: faker.image.urlPicsumPhotos(64, 32) },
    { image: faker.image.urlPicsumPhotos(64, 32) },
    { image: faker.image.urlPicsumPhotos(64, 32) },
    { image: faker.image.urlPicsumPhotos(64, 32) },
    { image: faker.image.urlPicsumPhotos(64, 32) },
  ];

  let fakeData3 = [
    { image: faker.image.urlPicsumPhotos(64, 32) },
    { image: faker.image.urlPicsumPhotos(64, 32) },
    { image: faker.image.urlPicsumPhotos(64, 32) },
    { image: faker.image.urlPicsumPhotos(64, 32) },
    { image: faker.image.urlPicsumPhotos(64, 32) },
    { image: faker.image.urlPicsumPhotos(64, 32) },
    { image: faker.image.urlPicsumPhotos(64, 32) },
    { image: faker.image.urlPicsumPhotos(64, 32) },
  ];

  let fakeData4 = [
    { image: faker.image.urlPicsumPhotos(64, 32) },
    { image: faker.image.urlPicsumPhotos(64, 32) },
    { image: faker.image.urlPicsumPhotos(64, 32) },
    { image: faker.image.urlPicsumPhotos(64, 32) },
    { image: faker.image.urlPicsumPhotos(64, 32) },
    { image: faker.image.urlPicsumPhotos(64, 32) },
    { image: faker.image.urlPicsumPhotos(64, 32) },
    { image: faker.image.urlPicsumPhotos(64, 32) },
  ];
  return (
    <div className="w-full h-full overflow-x-hidden">
      <ListView title="New" items={newBlocks} />
      <ListView title="Popular" items={fakeData} />
      <ListView title="Education" items={fakeData2} />
      <ListView title="Environment" items={fakeData3} />
      <ListView title="Healthcare" items={fakeData4} />
      <MoreButton />
    </div>
  );
};

export default Marketplace;
