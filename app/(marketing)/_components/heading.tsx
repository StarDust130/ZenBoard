"use client";
import { Spinner } from "@/components/spinner";
import { Button } from "@/components/ui/button";
import { SignInButton } from "@clerk/clerk-react";
import { useConvexAuth } from "convex/react";
import { Sign } from "crypto";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const Heading = () => {
  const { isAuthenticated, isLoading } = useConvexAuth();
  return (
    <div className="max-w-3xl space-y-4">
      <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold ">
        Your Ideas, Documents, & Plans. All in one place. Welcome to{" "}
        <span className="underline ">ZenBoard</span>
      </h1>

      <h3 className="text-lg sm:text-xl md:text-2xl font-medium ">
        Elevate your productivity - smarter, faster, and more collaboratively
        than ever before.
      </h3>

      {isLoading && (
        <div className="w-full flex justify-center items-center">
          {" "}
          <Spinner size="lg" />
        </div>
      )}
      {isAuthenticated && !isLoading && (
        <Button asChild>
          <Link href="/documents">
            Get Started <ArrowRight className="h-4 w-4 ml-2 " />
          </Link>
        </Button>
      )}
      {!isAuthenticated && !isLoading && (
        <SignInButton mode="modal">
          <Button>
            Get ZB Free <ArrowRight className="h-4 w-4 ml-2 " />{" "}
          </Button>
        </SignInButton>
      )}
    </div>
  );
};

export default Heading;
