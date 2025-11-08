import { Content } from "./Content/Content";
import { Sidebar } from "./Sidebar/Sidebar";

export const MainLayout = () => {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-gradient-to-b from-gray-800 via-gray-900 to-gray-800 w-full">
      <Sidebar />
      <Content />
    </div>
  );
};
