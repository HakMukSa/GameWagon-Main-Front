export default function Nav() {
  return (
    <div className="w-full h-[50px] bg-gray color-white flex">
      <a href="/" className="mr-[50px]">
        <span className="text-[30px]">Gamewagon</span>
      </a>
      <a href="/games" className="mr-[50px]">
        <span className="text-[20px]">Games</span>
      </a>
      <a href="/community" className="mr-[50px]">
        <span className="text-[20px]">Community</span>
      </a>
      <a href="/database">
        <span className="text-[20px]">Database</span>
      </a>
      <a href="/login" className="absolute top-0 right-[30px]">
        <span className="text-[20px]">Login</span>
      </a>
    </div>
  );
}
