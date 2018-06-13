const React = require('react');

const { DrawingEditor } = require('construction-designer-core/drawing-editor');
const { DrawingCanvas } = require('construction-designer-core/drawing-editor-react');
const { Rectangle } = require('construction-designer-core/geometry');

class App extends React.Component {
  drawingEditor() {
    if (!this._topViewDrawingEditor) {
      this._topViewDrawingEditor = this.defaultDrawingEditor();
    }
    return this._topViewDrawingEditor;
  }

  defaultDrawingEditor() {
    const drawingEditor = new DrawingEditor();
    // Initialize the tools and zoom levels
    drawingEditor.toolPalette();
    drawingEditor.zoomPalette();

    drawingEditor.projectRepository().reset();

    const component = new Rectangle(0, 0, 100, 100).toPolygon();
    drawingEditor.drawingController().addComponent(component);

    return drawingEditor;
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to Construction Designer</h1>
        </header>
        <div className="drawing-editor">
          <DrawingCanvas drawingEditor={this.drawingEditor()} />
        </div>
      </div>
    );
  }
}

module.exports = App;
