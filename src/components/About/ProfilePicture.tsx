export function ProfilePicture() {
  return (
    <div className="ml-2 hidden min-w-fit items-center lg:flex">
      <img
        src="https://github.com/andersonmdev.png?size=244"
        alt="Profile"
        className="z-10 h-64 w-64 rounded-full"
      />
      <div className="-ml-36 h-56 w-56 rounded-full bg-cyan-400" />
    </div>
  );
}
