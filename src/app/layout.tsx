import Header from './components/Header';

import './globals.css';

export const metadata = {
  title: 'recruitment-app3-review',
  description: '求人検索・投稿',
}

export default function Rootlayout ({ children }: { children: React.ReactNode}) {
  return (
    <html>
      <body>
        <div>
          <Header />
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}