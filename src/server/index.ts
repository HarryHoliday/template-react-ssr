import processErrorHanlder from './lib/processErrorHandler';
import app from './app';
import errorHandler from './lib/errorHandler';
import render from './render';
import api from './api';

const port = process.env.PORT || 3000;
//
processErrorHanlder();
// api
app.use('/api', api);
// render
app.get('/*', render);
// errorhandle
app.use(errorHandler);
// listen
app.listen(port, () => {
  console.log('= process.env    ===================');
  console.log(process.env);
  console.log('====================================');
  console.log(`=> Started on port ${port}`);
});
