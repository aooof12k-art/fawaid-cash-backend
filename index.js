const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// حساب تجريبي
let user = {
  id: 1,
  name: "مستخدم فوائد",
  balance: 100,
  profitRate: 0.10 // 10% أرباح
};

// الصفحة الرئيسية لتأكيد عمل السيرفر
app.get('/', (req, res) => {
  res.send('خادم تطبيق فوائد كاش يعمل بنجاح 🚀');
});

// مسار معرفة الرصيد الحالي
app.get('/balance', (req, res) => {
  res.json({ name: user.name, balance: user.balance });
});

// مسار إضافة الأرباح الشهرية (10%)
app.post('/add-profit', (req, res) => {
  const profit = user.balance * user.profitRate;
  user.balance += profit;
  res.json({ message: `تمت إضافة $${profit} أرباح`, newBalance: user.balance });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
