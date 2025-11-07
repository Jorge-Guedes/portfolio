import { Content } from "./Content/Content";
import { Sidebar } from "./Sidebar/Sidebar";

export const MainLayout = () => {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-gray-900">
      <Sidebar />
      <Content />
    </div>
  );
};
