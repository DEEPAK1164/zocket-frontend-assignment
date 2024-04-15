# CanvasEditor

CanvasEditor is a React component that allows you to customize and edit a canvas element with background color, text color, and an image.

## Installation

To use the CanvasEditor component in your React project, follow these steps:

1. **Create a new React app** using npm create vite@latest:

    ```bash
    npm create vite@latest canva-editor
    ```

2. **Navigate to the project directory:**

    ```bash
    cd canva-editor
    ```

3. **Install the required dependencies:**

    ```bash
    npm install 
    ```

    
3. **Run the repo locally on http://localhost:5173/:**


    ```bash
    cd canva-editor
    npm run dev
    ```

4. **Create a new file** named `CanvasEditor.js` in the `src` directory and paste the CanvasEditor component code into it.

5. **Import and use the CanvasEditor component** in your main application file (`App.js` or `main.js`).

    ```javascript
    import React from 'react';
    import ReactDOM from 'react-dom';
    import CanvasEditor from './CanvasEditor';

    ReactDOM.render(
      <React.StrictMode>
        <CanvasEditor />
      </React.StrictMode>,
      document.getElementById('root')
    );
    ```

6. **Start the development server** and view your CanvasEditor component in the browser:

    ```bash
    cd canva-editor
    npm run dev
    ```

## Usage

The CanvasEditor component provides a user-friendly interface for customizing a canvas. It includes the following features:

- Color picker for background color
- Color picker for text color
- Image insertion

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, feel free to open an issue or submit a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
