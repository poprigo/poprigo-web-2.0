import Image from 'next/image';

export default function Logo() {
    return (
        <Image src="../assets/images/logo.png" alt="poprigo-logo" width={200} height={200} />
    );
}