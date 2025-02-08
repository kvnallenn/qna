import { Skeleton } from "@/components/ui/skeleton";

const MainSidebar = () => {
  return (
    <>
      <div className="w-full max-w-[400px]" id="content-sidebar">
        <div className="flex flex-col space-y-3">
          <Skeleton className="h-[125px] w-[250px] rounded-xl bg-gray-300" />
          <div className="space-y-2">
            <Skeleton className="h-4 w-[250px] bg-gray-300" />
            <Skeleton className="h-4 w-[200px] bg-gray-300" />
          </div>
        </div>
      </div>
    </>
  );
};

export default MainSidebar;
