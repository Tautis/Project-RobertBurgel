export default function Loading() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-[#8d8d8d] z-50">
      <div className="h-16 w-16 animate-spin rounded-full border-4 border-blue-500 border-t-transparent"></div>
    </div>
  );
}
