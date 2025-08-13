import './globals.css';

export const metadata = {
  title: 'Codeflix Portal',
  description: 'A portal for Codeflix users',
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
        <body className='scrollbar-hide bg-black text-white'>
            {children}
        </body>
    </html>
  );
}