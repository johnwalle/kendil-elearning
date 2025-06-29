type Props = {
  children: React.ReactNode;
};

export default function AuthPageWrapper({ children }: Props) {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      {children}
    </div>
  );
}
