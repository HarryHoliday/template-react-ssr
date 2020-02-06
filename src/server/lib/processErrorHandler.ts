export default (): void => {
  const logger = console;
  // TODO: check below
  // https://medium.com/@iaincollins/error-handling-in-javascript-a6172ccdf9af
  //
  // eslint-disable-next-line
  process.on('unhandledRejection', (reason: Error | any, promise?: Promise<void>): void => {
    logger.error('unhandledRejection');
    logger.error(reason || {});
    // unhandledRejections.set(promise, reason);
  });
  //
  process.on('rejectionHandled', (promise: Promise<void>): void => {
    logger.error('rejectionHandled');
    logger.error(promise);
    // unhandledRejections.delete(promise);
  });
  //
  process.on('uncaughtException', (err: Error, origin?: string): void => {
    logger.error('uncaughtException');
    const message = `\nCaught exception: ${err.message}\nException origin: ${origin}`;
    logger.error(message);
    // process.exit(1);
  });

  logger.info('set process error handler');
};
