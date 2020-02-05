import { object, string /* setLocale */ } from 'yup';
/**
 * email: email format
 * password:
 * - min 8, max 20
 * - should contain at least one digit
 * - should contain at least one lower case
 * - should contain at least one upper case
 */
// setLocale({
//   string: {
//     matches: params => {
//       console.log('====================================');
//       console.log(params);
//       console.log('====================================');
//       return 'test';
//     },
//   },
// });
// const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,20}$/;
const passwordPattern = /^1$/;

const schema = object().shape({
  email: string()
    .trim()
    .required('이메일을 입력해주세요')
    .email(),
  password: string()
    .trim()
    .required('비밀번호를 입력해주세요')
    .matches(passwordPattern, {
      message: '최소 8, 최대 20',
      excludeEmptyString: true,
    }),
});

export default schema;
