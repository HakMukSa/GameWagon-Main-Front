type propsType = {
  platform: string;
};
export default function Block(props: propsType) {
  return (
    <div
      key={props.platform}
      className="bg-white rounded-[15px] border-2 border-gray-300 overflow-hidden inline-block whitespace-nowrap mr-[10px] h-[50px]"
    >
      <p className="text-black p-4 relative top-[50%] translate-y-[-50%] transplate-x-[-50%]">
        {props.platform}
      </p>
    </div>
  );
}
