// { defaultConfig }
module.exports = {
  trailingSlash: true,
  async rewrites() {
    return [
      {
        source: '/api/:path*/',
        destination: 'https://www.oneone.fun/api/:path*/',
      },
    ];
  },
};

// // next.config.js
// const withTM = require('next-transpile-modules');
//
// // // next.config.js
// // const withTM = require('next-transpile-modules');
//
// // module.exports = withTM({
// //   transpileModules: ['@app/editor-lib'],
// // });
//
// // module.exports = () => {
// //   const a = withTM({
// //     transpileModules: ['@app/editor-lib'],
// //   });
// //   return {
// //     ...a,
// //     // experimental: {
// //     //   esmExternals: 'loose',
// //     // },
// //   };
// // };
//
// module.exports = () => {
//   return {
//     experimental: {
//       esmExternals: 'loose',
//     },
//   };
// };
