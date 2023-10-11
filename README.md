# Placeholdr

Welcome to the official repository for [Placeholdr.ai](https://placeholdr.ai)! With the power of AI (Stable Diffusion), we present you with a way to generate relevant placeholder images for your projects. This was made out of pure laziness to avoid the hassle of finding the perfect placeholder images, because why search when AI can generate one for you?

## 🌐 Website

You can access the web application directly at [Placeholdr.ai](https://placeholdr.ai).

## 🛠️ Stack

Placeholdr is built with the following technologies:

-   React
-   Vite
-   Tailwind CSS
-   AWS Services:
    -   Lambda
    -   API Gateway
    -   S3
    -   etc etc
-   Stable Diffusion
-   Sharp

## 🖼️ How It Works

1. **Visit Placeholdr:** Head over to [placeholdr.ai](https://placeholdr.ai).
2. **Give a Prompt:** Input any description or topic into the text box.
3. **AI Image Generation:** Once you submit the prompt, the Stable Diffusion AI will spring into action, generating various images sized at `1024x1024` based on your input.
4. **Get the Session ID:** After image generation, you'll receive a session ID that corresponds to the images generated with your prompt.
5. **Plug:** Use this ID in the following URL structure: `https://placeholdr.ai/{session_id}/{width}/{height}`. For instance, if your session ID is `abc123` and you want an image of size `500x300`, you'd use `https://placeholdr.ai/abc123/500/300`.
6. **Play:** On accessing this URL, the system will randomly pick one of the generated images, resize it from the base size of `1024x1024`, save, and finally serve the image in response to the GET request.

## 🌱 Why Placeholdr?

-   **AI-Powered:** Leverages advanced AI to generate a wide array of images based on user input.
-   **Seamless:** Simple and straightforward usage.
-   **Dynamic Sizing:** Ability to specify a relatively wide variety of sizes for the placeholder image.
-   **Laziness:** Say goodbye to the manual searching of placeholder images. Automation at its best!

## 📄 License

Placeholdr is open-sourced under the [MIT license](./LICENSE). I mean, you could make this pretty easily yourself, so what's the point in a license? Idk.

---

Happy coding! 🚀
