import React, { FC, useState, useEffect } from 'react';
import TopProgress from '~components/ui/TopProgress';
import sleep from '~shared/lib/sleep';
import useAppSet from './useAppSet';

const AppSet: FC = ({ children }) => {
  const { set, checkHealth } = useAppSet();
  const [isAvailable, setAvailable] = useState(false);
  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      await Promise.all([checkHealth(), sleep(1000)]);
      setAvailable(true);
    };
    fetchData();
  }, [checkHealth]);

  return (
    <React.Fragment>
      <TopProgress value={isAvailable ? 100 : 2.7} height={3.7} />
      {set && isAvailable && children}
    </React.Fragment>
  );
};

export default AppSet;
