# README

## Google Chrome Extension: M3U8 Network Request Analyzer

Welcome to the repository for the Google Chrome extension that analyzes network requests for M3U8 files during web navigation. This extension, built with Vite, TypeScript, React, and TailwindCSS, captures M3U8 requests and presents them in a popup for easy copying and further usage, such as downloading the content as MP4 using FFmpeg.

## Features

- **Network Request Analysis:** Monitors network requests on any website and identifies M3U8 file requests.
- **Popup Interface:** Displays identified M3U8 requests in a user-friendly popup.
- **Copy to Clipboard:** Allows users to easily copy M3U8 URLs for further use.
- **Built with Modern Technologies:** Utilizes Vite, TypeScript, React, and TailwindCSS for a robust and maintainable codebase.

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/matthieu-gll/M3U8-Network-Request-Analyzer
   cd m3u8-network-analyzer
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Build the extension:**

   ```bash
   npm run build
   ```

4. **Load the extension in Chrome:**

   - Open Chrome and navigate to `chrome://extensions/`
   - Enable "Developer mode" by clicking the toggle switch in the top right corner.
   - Click "Load unpacked" and select the `dist` folder from your project directory.

## Usage

1. **Activate the Extension:**

   After loading the extension, an icon will appear in the Chrome toolbar. Click the icon to open the popup.

2. **Analyze Network Requests:**

   Navigate to any website. The extension will automatically monitor and capture network requests for M3U8 files.

3. **View and Copy URLs:**

   Click the extension icon to open the popup. The popup will display a list of captured M3U8 URLs. Click to each URL to copy it to your clipboard.

4. **Download Content:**

   Use FFmpeg to download and convert M3U8 streams to MP4 format. Example command:

   ```bash
   ffmpeg -i "your_m3u8_url" -c copy output.mp4
   ```

## Development

To contribute or make modifications, follow these steps:

1. **Start the development server:**

   ```bash
   npm run dev
   ```

2. **Build the extension in development mode:**

   ```bash
   npm run build:dev
   ```

3. **Load the extension in Chrome:**

   Follow the same steps as in the installation process, but select the `dist` folder created by the development build.


## Dependencies

- **Vite:** Build tool for frontend projects
- **TypeScript:** Typed JavaScript for better development experience
- **React:** UI library for building the popup interface
- **TailwindCSS:** Utility-first CSS framework

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request with your changes.

## License

This project is licensed under the MIT License. See the LICENSE file for details.

## Acknowledgements

Special thanks to the developers and contributors of the tools and libraries used in this project.

## Contact

For any inquiries or issues, please open an issue on this repository or contact [matthieu.gelle@gmail.com].

---

Thank you for using the M3U8 Network Request Analyzer extension! We hope it enhances your web navigation and content retrieval experience.