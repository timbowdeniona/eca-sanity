import Link from "@/components/base/link";
import { Button } from "../storybook/button";
import ChevronRight from "../storybook/icons/ChevronRight";
import QuestionMark from "../storybook/icons/QuestionMark";

const ErrorComponent = () => {
  return (
    <div className="flex justify-center bg-grey py-12 @container lg:py-32">
      <div className="wrapper w-full max-w-[1440px]">
        <div className="flex flex-col items-center gap-16 @clg:flex-row-reverse @clg:justify-end">
          <div className="flex size-28 items-center justify-center rounded-full border-2 border-purple-80">
            <QuestionMark className="size-28 p-4 [&_path]:fill-red" />
            <span className="sr-only">Search</span>
          </div>
          <div className="flex flex-col gap-4">
            <h1 className="text-center text-purple @clg:text-left">
              Something went wrong
            </h1>
            <h2 className="text-center text-[24px] @clg:text-left @clg:text-[28px]">
              We encountered an error whilst trying to load this page. Please
              accept our apologies whilst we try to fix this error.
            </h2>
            <div className="flex flex-col items-center gap-8 pt-12 @clg:flex-row">
              <Button href="/" mode="link" variant="primary">
                Home <ChevronRight className="ml-4" />
              </Button>
            </div>
            <div className="mt-4">
              <p className="text-center @clg:text-left">
                <span className="">
                  <Link
                    className="text-interface-blue hover:underline"
                    href="/contact-us"
                  >
                    Contact us
                  </Link>
                </span>{" "}
                if you still can&apos;t find what you&apos;re looking for.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorComponent;
