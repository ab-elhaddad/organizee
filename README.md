# organizee

organizee is a command-line interface (CLI) tool designed to help users organize their files efficiently based on file type.

![tool-use](https://github.com/ab-elhaddad/organizee/assets/113056556/81ec5893-8556-4926-8ac6-9a231bdc80ad)

## Inspiration

As a self-proclaimed expert in the art of laziness, I couldn't bear the thought of manually organizing my cluttered folders. With files of all shapes and sizes strewn about like confetti at a chaotic party, finding anything resembled a digital scavenger hunt.

Faced with this organizational nightmare, I had a brilliant (albeit lazy) idea—why not create a tool to do the heavy lifting for me? And thus, Organizee was born—a testament to my innovative approach to avoiding unnecessary effort.

Now, with just a few taps of the keyboard, I can effortlessly whip my unruly directories into shape, transforming them from chaotic messes to tidy repositories of digital bliss

## Features

- File Organization: Automatically sorts files into directories based on their file type.
- Customizable: Users can run the tool with variety of options to customize the organization process.
- Efficient: Streamlines the organization process, saving time and effort.
- Cross-Platform: Compatible with various operating systems, including Windows, macOS, and Linux.

## Installation

To install organizee, you can use npm, the Node.js package manager. Run the following command in your terminal:

```bash
npm install -g organizee
```

This will install the tool globally on your system, allowing you to run it from any directory.

## Usage

To organize your files, run the following command in your terminal:

```bash
npx organizee -p <path>
```

Replace `<path>` with the directory path you want to organize. For example:

```bash
npx organizee -p ~/Downloads
```

This will organize all the files in the `Downloads` directory.

## Options

- `-h, --help`: Displays the help message with usage instructions.

- `-p, --path <path>`: [**Required**] Specifies the directory path to organize. (_takes relative or absolute path_)

- `-v, --verbose`: Enables verbose mode, which displays detailed information during the organization process.

- `-l, --listen`: Keeps the tool running and listens for new files to organize in real-time.

- `-V, --version`: Displays the current version of the tool.

- `-i, --ignore <types>`: Ignores specific file types during organization. Multiple types can be specified separated by commas.

## Examples

1. Organize files in the `Downloads` directory:

```bash
npx organizee -p ~/Downloads
```

2. Organize files in the `Documents` directory with verbose mode enabled:

```bash
npx organizee -p ~/Documents -v
```

3. Organize files using relative path:

```bash
npx organizee -p ../Downloads
```

4. Organize files in the current directory and keep the tool up listening for new files:

```bash
npx organizee -p . -l
```

5. Organize files in the `Desktop` directory, ignoring `.txt` and `.pdf` files:

```bash
npx organizee -p ~/Desktop -i txt,pdf
```

## Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request if you have any suggestions, bug reports, or feature requests.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
