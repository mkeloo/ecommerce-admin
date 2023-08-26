import { UserButton } from '@clerk/nextjs';

const SetupPage = () => {
  return (
    <div>
      <h1>This is a protected route!</h1>
      <UserButton afterSignOutUrl="/" />
    </div>
  );
};

export default SetupPage;
