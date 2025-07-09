export function ProfilePicture() {
  return (
    <div className="ml-2 hidden min-w-fit items-center lg:flex">
      <img
        src="https://github.com/andersonmmdev.png?size=244"
        alt="Profile"
        className="z-10 size-64 rounded-full"
      />
      <div className="-ml-36 size-56 rounded-full bg-cyan-400" />
    </div>
  );
}
