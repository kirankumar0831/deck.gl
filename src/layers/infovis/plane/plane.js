import {Layer} from '../../../lib';
//import {Triangles} from '../mesh';

export default class Plane extends Layer {
  // constructor({data, id = '', cameraID = 'default', textures = []}) {
  //   super({id, cameraID});
  //   this.data = data;

  //   // Color, texture coordinates and vertex indices are representation related
  //   // So they are stored in geometry instead of directly under Layer

  //   this.geometry.vertices = data;
  //   this.geometry.texCoords = [0, 1, 1, 1, 0, 0, 1, 0];
  //   this.geometry.color = [1.0, 0.0, 0.0, 1.0, 0.0, 1.0, 0.0, 1.0, 0.0, 0.0, 1.0, 1.0, 1.0, 1.0, 0.0, 1.0];
  //   this.geometry.index = [0, 2, 1, 2, 3, 1];
  //   this.geometry.textures = textures;
  // }

  // generateGeometry() {
  //   const quad = new Triangles({
  //     position: this.data,
  //     texCoords: this.geometry.texCoords,
  //     color: this.geometry.color,
  //     index: this.geometry.index,
  //     id: this.id,
  //     cameraID: this.cameraID,
  //     textures: this.geometry.textures
  //   });

  //   this.geometry.groups[0].meshes.push(quad);
  // }

  // updateGeometry({groupID, meshID}) {
  //   this.geometry.groups[groupID].meshes[meshID].updateVertices(this.data);
  // }

  // rotateAlongXAxis(angle) {
  //   this.data[1] = this.data[1] * Math.cos(angle) - this.data[2] * Math.sin(angle);
  //   this.data[2] = this.data[1] * Math.sin(angle) + this.data[2] * Math.cos(angle);
  //   this.data[4] = this.data[4] * Math.cos(angle) - this.data[5] * Math.sin(angle);
  //   this.data[5] = this.data[4] * Math.sin(angle) + this.data[5] * Math.cos(angle);
  //   this.data[7] = this.data[7] * Math.cos(angle) - this.data[8] * Math.sin(angle);
  //   this.data[8] = this.data[7] * Math.sin(angle) + this.data[8] * Math.cos(angle);
  //   this.data[10] = this.data[10] * Math.cos(angle) - this.data[11] * Math.sin(angle);
  //   this.data[11] = this.data[10] * Math.sin(angle) + this.data[11] * Math.cos(angle);
  //   this.updateGeometry({
  //     groupID: 0,
  //     meshID: 0
  //   });
  // }
}