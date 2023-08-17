import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Head from "next/head";

export default function Layout({ children, metaData }) {
    return (
        <>
            {metaData && (
                <Head>
                    <title>{metaData.title}</title>
                    <meta name="description" content={metaData.description} />
                    <meta name="keywords" content={metaData.keywords} />
                    <meta name="author" content={metaData.author} />
                </Head>
            )
            }

            <main>
                <Header />
                {children}
                <Footer />
            </main>
        </>
    )
}
