import React, { Fragment } from 'react';
import { LatestReleasedComponent } from './LatestReleased';
import { TopRatedComponent } from './TopRated';

export const HomeComponent = () => {
  return (
    <Fragment>
      <LatestReleasedComponent />
      <TopRatedComponent />
    </Fragment>
  );
}