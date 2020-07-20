const router = require('express').Router();

router.get('/', (req, res) => {
  const result = { hello: 'Olá' };
  return res.status(200).json(result);
});

router.get('/health', (req, res) => res.status(204).send());

module.exports = router;
