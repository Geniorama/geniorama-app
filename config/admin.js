module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '6e1396457f7f99c9a07f3992cc6c8748'),
  },
});
