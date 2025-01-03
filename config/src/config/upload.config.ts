export default () => ({
  upload: {
    allowTypes: ['image/jpeg', 'image/png', 'image/gif'],
    maxSize: 1024 * 1024 * 5,
  },
});
