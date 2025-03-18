import { HiInbox } from "react-icons/hi";

const NoData = () => {
  return (
    <div className="flex items-center justify-center py-20">
      <div className="text-center text-slate-600">
        <HiInbox size={60} />
        <p className="font-medium">No Data</p>
      </div>
    </div>
  );
};

export default NoData;
