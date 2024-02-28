import Image from "next/image";
import Link from "next/link";
import Products from "./products/Products";

export default function Home() {
  return (
    <main><h1>Hello world!!</h1>
      <Link href='/users'>Users</Link>
      <div>    <Products /></div>
  
      </main>
  );
}
