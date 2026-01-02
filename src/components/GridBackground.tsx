export function GridBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* 메인 배경 그라디언트 */}
      <div className="absolute inset-0 bg-[#0a0a0f]" />
      
      {/* 격자 패턴 */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(139, 92, 246, 0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(139, 92, 246, 0.5) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />
      
      {/* 보라색 그라디언트 글로우 (좌상단) */}
      <div 
        className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full opacity-20 blur-[120px]"
        style={{
          background: 'radial-gradient(circle, rgba(139, 92, 246, 0.8) 0%, transparent 70%)',
        }}
      />
      
      {/* 초록색 그라디언트 글로우 (우하단) */}
      <div 
        className="absolute -bottom-40 -right-40 w-[500px] h-[500px] rounded-full opacity-15 blur-[100px]"
        style={{
          background: 'radial-gradient(circle, rgba(16, 185, 129, 0.8) 0%, transparent 70%)',
        }}
      />

      {/* 추가 보라색 악센트 (중앙 우측) */}
      <div 
        className="absolute top-1/2 right-1/4 w-[300px] h-[300px] rounded-full opacity-10 blur-[80px]"
        style={{
          background: 'radial-gradient(circle, rgba(124, 58, 237, 0.6) 0%, transparent 70%)',
        }}
      />
    </div>
  );
}

