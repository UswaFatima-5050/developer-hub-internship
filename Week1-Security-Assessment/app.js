const express = require('express');
const helmet = require('helmet');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const validator = require('validator');
const winston = require('winston');

const app = express();
app.use(express.json());
app.use(helmet());

// Logger setup
const logger = winston.createLogger({
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: 'security.log' })
  ]
});

const users = [];

// Signup Route
app.post('/signup', async (req, res) => {
  const { email, password } = req.body;
  if (!validator.isEmail(email)) {
    return res.status(400).send('Invalid email');
  }
  const hashedPassword = await bcrypt.hash(password, 10);
  users.push({ email, password: hashedPassword });
  logger.info(`New user signed up: ${email}`);
  res.send('User created successfully');
});

// Login Route
app.post('/login', async (req, res) => {
  const { email, password } = req.body;
  const user = users.find(u => u.email === email);
  if (!user) return res.status(400).send('User not found');
  const match = await bcrypt.compare(password, user.password);
  if (!match) return res.status(400).send('Wrong password');
  const token = jwt.sign({ email }, 'your-secret-key');
  logger.info(`User logged in: ${email}`);
  res.send({ token });
});

app.get('/', (req, res) => {
  res.send('User Management System Running!');
});

app.listen(3000, () => {
  logger.info('Application started on http://localhost:3000');
  console.log('App running at http://localhost:3000');
});