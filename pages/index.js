import Head from "next/head";
import Image from "next/image";
import Title from "../components/Title";

export default function Home() {
  return (
    <div>
      <Head>
        <title>a styled-components starter</title>
        <meta name='description' content='A Starter for styled-components' />
        <link rel='icon' href='/wave.ico' />
      </Head>
      <Title>La Familia Davis</Title>
    </div>
  );
}
