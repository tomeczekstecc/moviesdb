import Image from "next/image";

type Props = {
    imgUrl: string;

}

const Thumb = ({imgUrl}: Props) => (
    <Image src={imgUrl}
           placeholder={'blur'}
           blurDataURL={'/placeholder.jpg'}
           className={'rounded-lg'}
           layout={'fill'}
           objectFit={'cover'}
           alt={'poster'}/>
)

export default Thumb;
