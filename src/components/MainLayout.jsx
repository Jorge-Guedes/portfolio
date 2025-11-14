import { Content } from "./Content/Content";
import { Sidebar } from "./Sidebar/Sidebar";
import { Navigation } from "./Navigation/Navigation";

export const MainLayout = () => {
  return (
    <div
      className="min-h-screen w-full bg-pink-300"
      style={{
        background: `
          linear-gradient(135deg, #374151 0%, #111827 50%, #1f2937 100%),
          url("data:image/svg+xml,%3Csvg width='6' height='6' viewBox='0 0 6 6' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%239C92AC' fill-opacity='0.15' fill-rule='evenodd'%3E%3Cpath d='M5 0h1L0 6V5zM6 5v1H5z'/%3E%3C/g%3E%3C/svg%3E")
        `,
        backgroundBlendMode: "overlay",
        backgroundAttachment: "fixed",
      }}
    >
      <Navigation />

      <div className="flex flex-col lg:flex-row min-h-screen w-full mx-auto">
        <Sidebar />
        <Content />
      </div>
    </div>
  );
};
