import { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { iRootState, Dispatch } from '~shared/configureStore';
import { AppState } from '~shared/models/app/app.d.ts';

interface ReturnValue extends AppState {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  checkHealth: any;
}

export default (): ReturnValue => {
  const set = useSelector(({ app: { set } }: iRootState) => set);
  const dispatch = useDispatch<Dispatch>();
  const checkHealth = useCallback(
    (_payload, rootState: iRootState) => dispatch.app.checkHealth(null, rootState),
    [dispatch],
  );
  return {
    set,
    checkHealth,
  };
};
