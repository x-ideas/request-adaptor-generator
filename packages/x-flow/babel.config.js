module.exports = {
  presets: [
    [
      'latest',
      {
        es2015: {
          modules: false,
        },
      },
    ],
  ],
  plugins: ['external-helpers'],
};
