# JointJS Flowchart Application

This is a web application built with React and JointJS that allows users to create and manipulate flowcharts on a canvas. The application includes features for adding shapes, creating connections, and undoing actions using the keyboard (`Ctrl + Z`).

## Features

- **Drag and Drop Shapes**: Users can drag and drop shapes such as rectangles, circles, and images onto the canvas.
- **Canvas Interaction**: Users can double-click on elements to remove them from the canvas.
- **Undo Actions**: Press `Ctrl + Z` to undo the last action on the canvas.
- **Customizable Shapes**: You can add various types of shapes like rectangles, circles, and images.
- **Link Creation**: Create links between shapes with arrow markers.

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **JointJS**: A library for creating interactive diagrams and flowcharts.
- **CSS**: For styling the application.
- **Vite**: A fast build tool for React.

## Setup

### Prerequisites

Make sure you have the following installed:

- **Node.js** (version 12 or higher)
- **npm** (Node Package Manager)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/jointjs-flowchart-app.git
   cd jointjs-flowchart-app
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open the application in your browser at [http://localhost:5173/](http://localhost:5173/).

## Usage

1. **Drag Shapes**: Select a shape from the toolbar and drag it onto the canvas.
2. **Create Links**: Connect shapes by dragging from one shape to another.
3. **Remove Elements**: Double-click on any element to remove it from the canvas.
4. **Undo**: Press `Ctrl + Z` to undo the last action performed on the canvas.

## Project Structure

- `src/components/Canvas.jsx`: The main canvas where shapes are rendered and interactions are handled.
- `src/components/JointShapeFactory.js`: A utility for creating different shapes (rectangle, circle, image, and arrow).
- `src/components/ShapeItem.jsx`: Represents a shape in the toolbar that can be dragged and dropped onto the canvas.
- `src/components/Toolbar.jsx`: The toolbar that holds the draggable shapes.
- `src/App.jsx`: The main application component that ties everything together.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- **JointJS**: A powerful library for creating interactive diagrams and flowcharts.
- **React**: A JavaScript library for building UIs, used to manage state and render the application.

---

