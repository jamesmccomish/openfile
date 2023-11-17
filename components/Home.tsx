import { ConnectButton } from "@rainbow-me/rainbowkit";
import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";

export const Home: NextPage = () => {
    return (
        <div className={styles.container}>
            <Head>
                <title>RainbowKit App</title>
                <meta content="Generated by @rainbow-me/create-rainbowkit" name="description" />
                <link href="/favicon.ico" rel="icon" />
            </Head>

            <main className={styles.main}>
                <ConnectButton />

                <h1 className={styles.title}>
                    Welcome to <a href="">RainbowKit</a> + <a href="">wagmi</a> + <a href="matches">Next.js!</a>
                </h1>

                <p className={styles.description}>
                    Get started by editing <code className={styles.code}>pages/index.tsx</code>
                </p>

                <div className={styles.grid}>
                    <a className={styles.card} href="https://rainbowkit.com">
                        <h2>RainbowKit Documentation &rarr;</h2>
                        <p>Learn how to customize your wallet connection flow.</p>
                    </a>

                    <a className={styles.card} href="https://wagmi.sh">
                        <h2>wagmi Documentation &rarr;</h2>
                        <p>Learn how to interact with Ethereum.</p>
                    </a>
                </div>
            </main>
        </div>
    );
};
