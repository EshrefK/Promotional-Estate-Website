// pages/admin/index.tsx
import { GetServerSideProps, NextPage } from 'next';
import { getCookie } from 'cookies-next';

interface AdminProps {
  isAuthenticated: boolean;
}

const AdminDashboard: NextPage<AdminProps> = ({ isAuthenticated }) => {
  if (!isAuthenticated) {
    // Çerez yoksa, kullanıcıya login sayfasını göster
    return <h1>Giriş Yapılmadı. <a href="/login">Giriş Sayfasına Git</a></h1>;
  }

  // Çerez varsa, admin içeriğini göster
  return (
    <div>
      <h1>Yönetim Paneli (Gizli İçerik)</h1>
      {/* Güncelleme formları ve Firebase işlemleri buraya gelecek */}
    </div>
  );
};

// Next.js'in Sunucu Tarafı İşleme (SSR) fonksiyonu
export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  // auth çerezini kontrol et
  const authCookie = getCookie('auth', { req, res });

  return {
    props: {
      isAuthenticated: authCookie === 'true',
    },
  };
};

export default AdminDashboard;