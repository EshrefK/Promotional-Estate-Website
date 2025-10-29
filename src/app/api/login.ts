// pages/api/login.ts
import { NextApiRequest, NextApiResponse } from 'next';
import { setCookie } from 'cookies-next';

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { username, password } = req.body;

  // Ortam değişkenlerinden sabit bilgileri al
  const ADMIN_USER = process.env.ADMIN_USERNAME;
  const ADMIN_PASS = process.env.ADMIN_PASSWORD;

  if (username === ADMIN_USER && password === ADMIN_PASS) {
    // 1. Şifre doğruysa, tarayıcıya bir oturum çerezi ayarla
    setCookie('auth', 'true', { 
        req, 
        res, 
        maxAge: 60 * 60 * 24 * 7, // 7 gün
        httpOnly: true, // Güvenlik için sadece sunucu erişebilir
        secure: process.env.NODE_ENV === 'production', // HTTPS'de çalışır
        path: '/',
    });

    return res.status(200).json({ success: true });
  } else {
    return res.status(401).json({ success: false, message: 'Geçersiz kimlik bilgileri' });
  }
};

export default handler;