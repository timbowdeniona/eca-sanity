/**
 * Generate a counter based on the current timestamp for bot protection
 * Logic: Unix timestamp is reversed and multiplied by 42
 */
export const generateCounter = () => {
  const unixTimestamp = Math.floor(Date.now() / 1000);
  return +("" + unixTimestamp).split("").reverse().join("") * 42;
};

export const makeFormSubmitter = async (request: Request, API_URL: string) => {
  try {
    // Get the form data from the request
    const body = await request.formData();

    const response = await fetch(API_URL, {
      method: "POST",
      body,
      // Do not follow the returned redirect
      redirect: "manual",
    });

    // If the sumbission is successful, the response will be a 302 redirect with a Location header
    if (response.status === 302) {
      // Return the Location header to the client
      return new Response(
        JSON.stringify({ redirectURL: response.headers.get("Location") }),
      );
    }

    throw new Error("Form submission failed.");
  } catch (error) {
    // Handle other unexpected errors
    return new Response(
      JSON.stringify({
        message: "Failed to submit form.",
        error: (error as Error).message,
      }),
      { status: 500 },
    );
  }
};
