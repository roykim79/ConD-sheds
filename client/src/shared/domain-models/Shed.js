const { LinearMeasurement, Rectangle, Point: { $P } } = require('construction-designer-core/geometry')
const { ConstructionComponent } = require('construction-designer-core/construction')
const { PolygonFigure } = require('construction-designer-core/drawing-editor')

class Shed extends ConstructionComponent {
  constructor() {
    super()
  }

  length() {
    return (10).feet();
  }

  width() {
    return (10).feet()
  }
}

module.exports = Shed
