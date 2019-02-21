import Link from "next/link";

const Index = () => (
  <div>
    <p>Hello Djavan!</p>
    <Link href="/about">
      <a>About</a>
    </Link>
  </div>
);

export default Index;
