// import { connection } from "next/server";
import { CatImage } from "./cat-image";
import { fetchImage } from "./fetch-image";

export default async function Home() {
    // await connection();
    const image = await fetchImage();
    console.log("Home: 画像情報を取得しました", image);
    // return <div>猫画像予定地</div>
    return <CatImage url={image.url} />;
}