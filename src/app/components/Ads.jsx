import { Skeleton } from "@/components/ui/skeleton";

const Ads = () => {
  return (
    <>
      <div className="w-full max-w-[400px]">
        <div className="flex flex-col space-y-3 items-center">
            <Skeleton className="h-[125px] w-[250px] rounded-xl bg-gray-300" id="skeleton" />
        </div>
        
      </div>
    </>
  );
};

export default Ads;
