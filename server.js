const express = require("express");
const dotenv = require("dotenv");
const morgan = require('morgan')
const connectDB = require('./config/db')

// load env files
dotenv.config({ path: './config/config.env' });

// connect to db
connectDB()



const app = express();

// dev logger middleware
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}
// route files
const calls = require("./routes/calls");
// mount routers
app.use("/api/v1/calls", calls);

const PORT = process.env.PORT || 5000;

const server = app.listen(
  PORT,
  console.log(
    `Server is running in ${process.env.NODE_ENV} mode on port: ${PORT}`
  )
);

// Handle unhandled promise rejection
process.on('unhandledRejection', (err, promise) => {
  console.log(`Error: ${err.message}`)
  server.close(() => process.exit(1))
})