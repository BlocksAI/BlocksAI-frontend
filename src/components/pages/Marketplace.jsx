import React from 'react';
import MoreButton from '../shared/moreButton';
import ListView from '../shared/listView';
import { faker } from '@faker-js/faker';

const Marketplace = () => {
  let fakeData = [
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
      <ListView title="Popular" items={fakeData} />
      <ListView title="Education" items={fakeData2} />
      <ListView title="Environment" items={fakeData3} />
      <ListView title="Healthcare" items={fakeData4} />
      <MoreButton />
    </div>
  );
};

export default Marketplace;
