interface PropsType {
  from: string;
  to: string;
}

const DurationButton: React.FC<PropsType> = ({ from, to }) => {
  return (
    <span className="text-sm text-gray-400 dark:text-white/80 bg-gray-100 dark:bg-gray-100/10 px-3 py-1 rounded-full whitespace-nowrap border border-transparent dark:border-slate-300/10">
      {from} - {to}
    </span>
  );
};

export default DurationButton;
