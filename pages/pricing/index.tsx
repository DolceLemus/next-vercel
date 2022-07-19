import Link from "next/link";
import { DarkLayout } from "../../components/layouts/DarkLayout";
import { MainLayout } from "../../components/layouts/MainLayout";

export default function PricingPage() {
  return (
    <>
      <h1>Pricing Page</h1>
      <h1 className={"title"}>
        ir a <Link href="/home">Home</Link>
      </h1>

      <p className={"description"}>
        Get started by editing <code className={"code"}>Pricing/index.js</code>
      </p>
    </>
  );
}

PricingPage.getLayout = function getLayout(page: JSX.Element) {
  return (
    <MainLayout>
      <DarkLayout>{page}</DarkLayout>
    </MainLayout>
  );
};
