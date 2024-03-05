import Link from "next/link";
import animationData from "@/Images/all-svg-animations/not-found.json";
import LottieAnimation from "@/utils/LotteiFiles/LottieAnimation";

export default function NotFound() {
  return (
    <section className="flex flex-col pt-14 items-center justify-center h-screen font-roboto">
      <LottieAnimation animationData={animationData} />
      <h1 className="text-4xl font-bold mt-5">Oops! Page Not Found</h1>
      <p className="text-lg mt-4 text-center">
        We couldn’t find the page you’re looking for.
      </p>
      <Link href="/" className="text-blue-500 mt-4 underline">
        Go to main page
      </Link>
    </section>
  );
}
