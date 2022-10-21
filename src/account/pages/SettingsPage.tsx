import { AccountLayout } from '../layout';


export const SettingsPage = () => {
  return (
    <AccountLayout title="Settings">
      <div
        className="w-full flex flex-col items-center justify-center gap-4 h-full animate-pulse"
      >
        <h3
          className="text-2xl font-semibold text-gray-700"
        > Settings will be added soon </h3>
        <p
          className="text-xl font-semibold text-gray-700"
        > This page is under construction </p>
      </div>
    </AccountLayout>
  );
};
