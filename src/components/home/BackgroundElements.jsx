export function BackgroundElements({ isClient }) {
  if (!isClient) return null;
  
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-cyan-200 to-blue-200 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-r from-blue-200 to-purple-200 rounded-full blur-3xl opacity-30"></div>
    </div>
  );
}