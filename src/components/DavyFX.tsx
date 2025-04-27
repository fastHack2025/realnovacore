export default function DavyFX() {
    return (
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 w-[300px] h-[300px] animate-pulse rounded-full bg-indigo-500 blur-3xl opacity-20 translate-x-[-50%] translate-y-[-50%]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-400/10 via-transparent to-transparent" />
      </div>
    );
  }
  