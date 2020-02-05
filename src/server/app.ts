import path from 'path';
import express from 'express';
import helmet from 'helmet';
import compression from 'compression';
import cookieParser from 'cookie-parser';
import csurf from 'csurf';
import manifestHelpers from 'express-manifest-helpers';

const app = express();
const publicDir: string = process.env.APP_PUBLIC_DIR || '';

app.use(helmet());
app.use(compression());
app.use(
  manifestHelpers({
    manifestPath: path.resolve(__dirname, process.env.ASSETS_MANIFEST || ''),
    prependPath:
      process.env.NODE_ENV === 'development'
        ? `http://${process.env.HOST}:${process.env.PORT_DEV}`
        : '',
  }),
);

app.use(express.static(path.resolve(__dirname, publicDir)));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
//
const csrfOption = {
  sameSite: true,
  httpOnly: true,
  maxAge: 86400,
  secure: process.env.NODE_ENV === 'production',
};
//
app.use(csurf({ cookie: csrfOption }));
//
export default app;
