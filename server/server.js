// // const express = require('express');
// // const cors = require('cors');
// // const app = express();
// // const PORT = process.env.PORT || 5000;
// // //cors و express.json(): هما Middleware لمساعدة الخادم في التعامل مع الطلبات القادمة 
// // // من الواجهة الأمامية (من الدومينات المختلفة) والتعامل مع البيانات بصيغة JSON.
// // // Middleware
// // app.use(cors());
// // app.use(express.json());
// // //app.get('/'): يحدد مسارًا أساسيًا يعرض رسالة بسيطة للتأكد من أن الخادم يعمل
// // // Basic route
// // app.get('/', (req, res) => {
// //   res.send('Server is running');
// // });

// // // Start server
// // app.listen(PORT, () => {
// //   console.log(`Server is running on http://localhost:${PORT}`);
// // });


// const express = require('express');
// const userRoutes = require('./Routes/userRoutes');
// require('dotenv').config({ path: 'config.env' });

// const app = express();
// app.use(express.json());

// // Mount routes
// app.use('/api', userRoutes);

// const PORT = process.env.PORT || 5002;
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });

//test
// const express = require('express');
// const cors = require('cors');
// const userRoutes = require('./Routes/userRoutes');
// require('dotenv').config({ path: 'config.env' });

// const app = express();
// const PORT = process.env.PORT || 5002;

// // Middleware
// app.use(cors()); // Enable CORS
// app.use(express.json()); // Parse JSON bodies

// // Basic route (optional)
// app.get('/', (req, res) => {
//   res.send('Server is running');
// });

// // Mount routes
// app.use('/api', userRoutes);

// // Global error handler (optional)
// app.use((err, req, res, next) => {
//   console.error(err.stack);
//   res.status(500).json({ error: 'Something went wrong!' });
// });

// // Start server
// app.listen(PORT, () => {
//   console.log(`Server is running on http://localhost:${PORT}`);
// });
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

const userRoutes = require('./Routes/userRoutes');

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use('/api/users', userRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
