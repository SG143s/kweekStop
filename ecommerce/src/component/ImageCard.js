import Image from "next/image";

export default function IndexPage(props) {
  return (
    <div>
      <Image
        className={props.classname}
        width={props.width}
        height={props.height}
        {...props} // help to spread oprate to use all props values
      />
    </div>
  );
}
