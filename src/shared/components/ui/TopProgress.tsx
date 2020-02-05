import React, { ReactElement, useState, useEffect } from 'react';
import sleep from '~shared/lib/sleep';

import LoadingBar from 'react-top-loading-bar';

export default ({ value = 0, color = '#00783E', height = 3 }): ReactElement => {
  const [loadingBarProgress, setLoadingBarProgress] = useState(value);
  useEffect(() => {
    const fetch = async (): Promise<void> => {
      await sleep(70);
      if (value !== 100 && loadingBarProgress < 50) {
        setLoadingBarProgress(loadingBarProgress + 5);
      } else if (value !== 100 && loadingBarProgress < 90) {
        setLoadingBarProgress(loadingBarProgress + 3);
      } else if (value !== 100 && loadingBarProgress < 99.8) {
        setLoadingBarProgress(loadingBarProgress + 0.1);
      } else if (value === 100) {
        setLoadingBarProgress(value);
      }
    };
    fetch();
  }, [value, loadingBarProgress]);
  return <LoadingBar progress={loadingBarProgress} height={height} color={color} />;
};
